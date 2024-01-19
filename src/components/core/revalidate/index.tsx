'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const RevalidatePage = () => {
  const [loading, setLoading] = useState(false);
  const [loadingDots, setLoadingDots] = useState(0);
  const router = useRouter();
  const refresh = () => router.refresh();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingDots((prevLoadingDots) => {
        return prevLoadingDots >= 3 ? 0 : prevLoadingDots + 1;
      });
    }, 500);

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  const revalidate = async () => {
    setLoading(true);
    const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/revalidate?tag=bot&secret=mifuzigantengbanget`,{
      method: 'POST',
    });
    if (res.status !== 200) {
      setLoading(false);
      toast.error(`Revalidate Failed`);
      return;
    } else {
      const response = await res.data;
      if(response.revalidate){
        toast.success(`Revalidate Success`);
      };
      refresh();
      setLoading(false);
    }   
  }

  const loadingText = `Refreshing${'.'.repeat(loadingDots)}`;

  return (
    <div className="mt-2 flex flex-col gap-4">
      <button className="btn btn-sm btn-primary" onClick={() => revalidate()}>
        {loading ? loadingText : 'Refresh Data'}
      </button>
    </div>
  );
}

export default RevalidatePage;
