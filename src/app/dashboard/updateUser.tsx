'use client'

import { useState, MouseEventHandler, useRef, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type User = {
    id: number;
    username: string;
    status: string;
    role: string;
}

type Token = {
    id: number;
    user_id: number;
    token: string;
}

const UpdateUser = ({ tokens, user }: { tokens: Token; user: User }) => {
  const [username, setUsername] = useState(user.username);
  const [status, setStatus] = useState(user.status);
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(user.role);
  const [token, setToken] = useState(tokens.token);

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
    if (!username || !status || !role) {
      alert("Please fill in all fields");
      return;
    }

    // Submit the form
    await axios.patch(`/api/users/${user.id}`, {
      username: username,
      password: password,
      status: status,
      role: role,
    });
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={handleModal}>
        Edit 
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"} onClick={close} ref={overlay}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update {user.username+"'"}s</h3>
          <form onSubmit={handleUpdate}>
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
              />
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

export default UpdateUser;
