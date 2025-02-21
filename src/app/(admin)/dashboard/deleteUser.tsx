'use client'

import { useState, MouseEventHandler, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner"
import { RiDeleteBin5Fill } from "react-icons/ri";

type User = {
    id: string;
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

  const handleDelete = async (userId: string) => {
    await axios.delete(`/api/users/${userId}`);
    toast.success(`User ${user.username} deleted successfully`);
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div>
      <button className="btn btn-error btn-sm text-white" onClick={handleModal}>
        <RiDeleteBin5Fill/>
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
