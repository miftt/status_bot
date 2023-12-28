'use client'

import { useState, MouseEventHandler, useRef, SyntheticEvent } from "react";
import type { Tokens } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddUser = ({ tokens }: { tokens: Tokens[] }) => {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

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

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // Check if any field is empty
    if (!username || !password || !status || !role) {
      alert("Please fill in all fields");
      return;
    }

    // Submit the form
    await axios.post("/api/users", {
      username: username,
      password: password,
      status: status,
      role: role,
    });

    // Reset form fields and close modal
    setUsername("");
    setPassword("");
    setStatus("");
    setRole("");
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div>
      <button className="btn" onClick={handleModal}>
        Add User
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"} onClick={close} ref={overlay}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add new user</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label font-bold">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered"
                placeholder="Username"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="select select-bordered"
                required
              >
                <option value="" disabled>
                  Select Status
                </option>
                <option value="Aktif">Aktif</option>
                <option value="Nonaktif">Nonaktif</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="select select-bordered"
                required
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
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

export default AddUser;
