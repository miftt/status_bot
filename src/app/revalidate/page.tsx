'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

const RevalidatePage = () => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Refreshing');
  const router = useRouter();
  const refresh = () => router.refresh();


  useEffect(() => {
    const intervalId = setInterval(() => {
        setLoadingText((prevLoadingText) => {
            return prevLoadingText === 'Refreshing Data...' ? 'Refresh' : `${prevLoadingText}.`;
        });
    }, 1000);

    return () => clearInterval(intervalId); // Clear interval on unmount
}, []);

  const revalidate = async () => {
    setLoading(true)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/revalidate?tag=bot&secret=mifuzi12345`,{
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
        <div className="mt-2 flex flex-col gap-4">
          <Toaster position="top-center" richColors />
            <button className="btn btn-sm btn-primary" onClick={() => revalidate()}>
            {loading ? loadingText : 'Refresh Data'}
            </button>
        </div>
     );
}
 
export default RevalidatePage;