'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useRef, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { toast } from "sonner";

interface tokens {
    id: number;
    userId: string;
    username: string;
}

const DeleteToken: React.FC<tokens> = ({
    id,
    userId,
    username
}) => {
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
    
      const handleDelete = async (id: number, userId: string, username: string) => {
        await axios.delete(`/api/tokens/${id}/${userId}`);
        toast.success(`Token for user ${username} has been deleted successfully`);
        router.refresh();
        setIsOpen(false);
      };
    return ( 
        <div >
            <button className="py-2 px-2 rounded-md text-red-500 hover:bg-red-700" onClick={() => handleModal()}>
                <RiDeleteBin5Fill size={18}/>
            </button>
            <div className={isOpen ? "modal modal-open" : "modal"} onClick={close} ref={overlay}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are u sure want to delete token for user {username}?</h3>
                    <div className="modal-action">
                        <button type="button" className="btn btn-error" onClick={handleModal}>
                            No
                        </button>
                        <button onClick={() => handleDelete(id, userId, username)} type="button" className="btn btn-primary">
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DeleteToken;