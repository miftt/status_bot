'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

const RevalidatePage = () => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Revalidating');
  const router = useRouter();
  const refresh = () => router.refresh();


  useEffect(() => {
    const intervalId = setInterval(() => {
        setLoadingText((prevLoadingText) => {
            return prevLoadingText === 'Refreshing...' ? 'Refresh' : `${prevLoadingText}.`;
        });
    }, 1000);

    return () => clearInterval(intervalId); // Clear interval on unmount
}, []);

  const revalidate = async () => {
    setLoading(true)
    const res = await fetch('http://localhost:3000/api/revalidate?tag=bot&secret=mifuzi12345',{
      method: 'POST',
    });
    if (!res.ok) {
      setLoading(false)
      toast.error('Failed to Refresh');
      return;
    }else{
      const response = await res.json();
      if (response.revalidate) {
        toast.success('Refresh data success');
        refresh();
      };
      setLoading(false)
    }
  }
    return ( 
        <div>
          <Toaster position="top-center" richColors />
            <button className="btn btn-sm btn-primary" onClick={() => revalidate()}>
            {loading ? loadingText : 'Refresh Data'}
            </button>
        </div>
     );
}
 
export default RevalidatePage;