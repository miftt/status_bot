"use client";

import { useState, MouseEventHandler, useRef, SyntheticEvent } from "react";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";

//TODO MEMBENARKAN ERRORNYA KARENA TIDAK KIRIM TYPE DATA NYA DARI INDEX

type Tokens = {
    id: number;
    token: string;
    username: string;
}

const AddToken = ({ tokens }: { tokens: any[] }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(Number(""));
  const [token, setToken] = useState("");
  const overlay = useRef(null);
  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      setIsOpen(false);
    }
  };
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // Check if any field is empty
    if (!userId || !token) {
      alert("Please fill in all fields");
      return;
    }

    await axios.post("/api/tokens", {
      token: token,
      userId: userId,
    });
    setUserId(Number(""));
    setToken("");
    toast.success(`Token user ${userId} added successfully`);
    router.refresh();
    setIsOpen(false);
  };
  return (
    <div>
      <button className="btn" onClick={handleModal}>
        Add Token
      </button>
      <div
        className={isOpen ? "modal modal-open" : "modal"}
        onClick={close}
        ref={overlay}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add new token user</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label font-bold">User ID</label>
              <select
                onChange={(e) => setUserId(Number(e.target.value))}
                className="select select-bordered"
              >
                <option value="" disabled>
                  Select User ID
                </option>
                {tokens.map((token) => (
                  <option value={Number(token.id)} key={token.id}>
                    {token.id} | {token.username}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Token</label>
              <input
                type="password"
                onChange={(e) => setToken(e.target.value)}
                className="input input-bordered"
                placeholder="Insert new token"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToken;
