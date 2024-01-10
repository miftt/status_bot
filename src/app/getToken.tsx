'use client'

import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import {toast} from 'sonner'
interface GetTokenProps {
  token: any;
}

const GetToken: React.FC<GetTokenProps> = ({ token }) => {
  const [isVisible, setIsVisible] = useState(true);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(token);
      toast.success('Token copied to clipboard');
    } catch (err) {
      toast.error('Failed to copy token: '+ err);
    }
  }

  return (
    <div className="flex justify-center items-center mb-10 text-black">
  <div className="bg-gray-100 p-8 rounded-lg shadow-md">
    <p className="text-lg font-semibold mb-4">Your Token is:</p>
    <div className="flex justify-center">
      <button onClick={() => copyToClipboard()} className="items-center justify-center px-4 py-2 rounded-md bg-primary text-white focus:outline-none hover:bg-pink-500 transition-all t">
        <FiClipboard size={15}/>
      </button>
    </div>
    {isVisible && (
      <div className="bg-white border border-gray-300 p-4 rounded-lg">
        <p className="font-bold">{token}</p>
      </div>
    )}
    <div className="flex justify-center">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="flex mt-4 px-4 py-2 rounded-md bg-primary text-white focus:outline-none hover:bg-pink-500 transition-all"
      >
        {isVisible ? "Hide" : "Show token"}
      </button>
    </div>
  </div>
</div>

  );
};

export default GetToken;
