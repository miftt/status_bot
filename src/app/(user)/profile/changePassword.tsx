'use client'

import { useState, MouseEventHandler, useRef, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner"

interface User {
    userId: number;
}

const ChangePassword: React.FC<User> = ({
  userId,
}) => {
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

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
  
    try {
      await axios.patch(`/api/client/user/${userId}`, {
        password: password,
        oldPassword: oldPassword
      });
  
      toast.success(`Your password has been updated successfully`);
      router.refresh();
      setIsOpen(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {;
        toast.error('Wrong old password. Please try again.');
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };
  

  return (
    <div className="text-white">
      <button className="mr-3 text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800" onClick={handleModal}>
        Change Password
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"} onClick={close} ref={overlay}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Change Password</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control w-full">
              <label className="label font-bold">Old password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="input input-bordered"
                placeholder="****"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">New password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
                placeholder="****"
                required
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Cancel
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

export default ChangePassword;
