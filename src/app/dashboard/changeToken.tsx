'use client'

import { useState, MouseEventHandler, useRef, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner"

// type User = {
//     id: number;
//     username: string;
//     status: string;
//     role: string;
//     token: string;
// }

type Token = {
    id: number;
    token: string;
    user: {
        id: number;
        username: string;
        status: string;
        role: string;
        token: string;
    }
}

const ChangeToken = ({ tokens }: { tokens: Token[]}) => {
  const [userId, setUserId] = useState(Number(''));
  const [token, setToken] = useState("");

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const overlay = useRef(null);

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      setIsOpen(false);
    }
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();

    // Check if any field is empty
    if (!userId || !token) {
      alert("Please fill in all fields");
      return;
    }

    // Submit the form
    await axios.patch(`/api/tokens/${userId}`, {
        token: token,
    });
    toast.success(`User ${userId} updated successfully`);
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div>
      <button className="btn" onClick={handleModal}>
        Change Token
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"} onClick={close} ref={overlay}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Token</h3>
          <form onSubmit={handleUpdate}>
          <div className="form-control w-full">
                <label className="label font-bold">User ID</label>
                <select onChange={(e) => setUserId(Number(e.target.value))} className="select select-bordered">
                <option value="" disabled>Select User ID</option>
                    {tokens.map((token: any) =>(
                        <option value={Number(token.id)} key={token.id}>{token.id} | {token.username}</option>
                    ))}
                </select>
                </div>
            <div className="form-control w-full">
              <label className="label font-bold">Token</label>
              <input
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="input input-bordered"
                placeholder="Token"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangeToken;
