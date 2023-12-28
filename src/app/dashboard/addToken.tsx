'use client'

import { useState, MouseEventHandler, useRef } from "react";
import type { Tokens } from "@prisma/client"

const AddToken = (
    {tokens}: {tokens: Tokens[]
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const overlay = useRef(null)
    const close: MouseEventHandler = (e) => {
        if(e.target === overlay.current){
            setIsOpen(false)
        }
    }
    const handleModal = () => {
        setIsOpen(!isOpen);
    }
    return ( 
        <div>
            <button className="btn" onClick={handleModal}>Add Token</button>
            <div className={isOpen ? 'modal modal-open' : 'modal'} onClick={close} ref={overlay}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Add new token user
                    </h3>
                    <form>
                        <div className="form-control w-full">
                            <label className="label font-bold">User ID</label>
                        <select className="select select-bordered">
                            <option value="" disabled>Select User ID</option>
                            {tokens.map((token) =>(
                                <option value={token.id} key={token.id}>{token.id}</option>
                            ))}
                        </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Token</label>
                        <input
                         type="password" 
                         className="input input-bordered" 
                         placeholder="Insert new token"/>
                        </div>
                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handleModal}>Close</button>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default AddToken;
