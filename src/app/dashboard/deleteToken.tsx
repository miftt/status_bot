'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useRef, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { toast } from "sonner";

const DeleteToken = ({token}: {token: any}) => {
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
    
      const handleDelete = async (id: number, userId: number, username: string) => {
        await axios.delete(`/api/tokens/${id}/${userId}`);
        toast.success(`Token for user ${username} has been deleted successfully`);
        router.refresh();
        setIsOpen(false);
      };
    return ( 
        <div >
            <button className="text-red-500 pl-4 hover:text-red-600" onClick={() => handleModal()}>
                <RiDeleteBin5Fill size={18}/>
            </button>
            <div className={isOpen ? "modal modal-open" : "modal"} onClick={close} ref={overlay}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are u sure want to delete token for user {token.username}?</h3>
                    <div className="modal-action">
                        <button type="button" className="btn btn-error" onClick={handleModal}>
                            No
                        </button>
                        <button onClick={() => handleDelete(token?.token?.id, token?.token?.userId, token.username)} type="button" className="btn btn-primary">
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DeleteToken;