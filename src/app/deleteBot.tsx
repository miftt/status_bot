'use client'

import { useState, MouseEventHandler, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner"
import { MdDelete } from "react-icons/md";

type Bot = {
    id: number;
    userId: number;
}

const DeleteBot = ({ bot }: { bot: Bot }) => {

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

  const handleDelete = async (userId: number, id: number) => {
    await axios.delete(`/api/bot/${id}/${userId}`);
    toast.success(`Bot slot ke ${id} deleted successfully`);
    router.refresh();
    setIsOpen(false);
};


  return (
    <div>
      <button className="btn bg-[rgb(255,70,84)] btn-sm text-white" onClick={handleModal}>
        <MdDelete size={18}/>
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"} onClick={close} ref={overlay}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are u sure to delete slot {bot.id}?</h3>
            <div className="modal-action">
              <button type="button" className="btn btn-error" onClick={handleModal}>
                No
              </button>
              <button onClick={() => handleDelete(bot.userId,bot.id)} type="button" className="btn btn-primary">
                Yes
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBot;
