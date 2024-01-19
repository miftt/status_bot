'use client'

import { FiClipboard } from "react-icons/fi";
import { toast } from "sonner";

interface CopyTokenProps {
    token: string
}

const CopyToken: React.FC<CopyTokenProps> = ({token}) => {
    const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(token);
          toast.success('Token copied to clipboard');
        } catch (err) {
          toast.error('Failed to copy token: '+ err);
        }
      } 
    return ( 
        <div>
            <button onClick={()=> copyToClipboard()} className="items-center justify-center px-2 py-2 rounded-md text-info focus:outline-none hover:bg-blue-500 transition-all">
                <FiClipboard size={15}/>
            </button>
        </div>
     );
}
 
export default CopyToken;