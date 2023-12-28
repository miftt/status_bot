'use client'

import { useState, MouseEventHandler, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";  

type User = {
    id: number;
    username: string;
    status: string;
    role: string;
}

const DeleteUser = ({ user }: { user: User }) => {

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

  const handleDelete = async (userId: number) => {
    await axios.delete(`/api/users/${userId}`);
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div>
      <button className="btn btn-error   btn-sm" onClick={handleModal}>
        Delete
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"} onClick={close} ref={overlay}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are u sure to delete this {user.username}?</h3>
            <div className="modal-action">
              <button type="button" className="btn btn-error" onClick={handleModal}>
                No
              </button>
              <button onClick={() => handleDelete(user.id)} type="button" className="btn btn-primary">
                Yes
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
