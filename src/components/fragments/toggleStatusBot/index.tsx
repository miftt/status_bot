'use client'

import { useState, useEffect } from 'react'
import axios from "axios";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface ToggleBotProps{
  status: string
}

const ToggleBot: React.FC<ToggleBotProps> = ({
  status
}) => {
  const { data: session } = useSession()
  const router = useRouter()
  const [isChecked, setIsChecked] = useState(status === "Online")
  const [isStatus, setIsStatus] = useState(status)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsChecked(status === "Online");
    setIsStatus(status);
  }, [status]);

  const handleCheckboxChange = async () => {
    setIsLoading(true);
    const newCheckedStatus = !isChecked;
    setIsChecked(newCheckedStatus);
    const newStatus = newCheckedStatus ? "Online" : "Offline";
    setIsStatus(newStatus);
    await new Promise((r) => setTimeout(r, 1000)); // Menambahkan await di sini
    await axios.patch(`/api/bot/setstatusbot/${session?.user?.id}`, {
      status: newStatus,
    })
    setIsLoading(false);
    toast.success(`Status bot now is ${newStatus}`);
    router.refresh();
  }

  return (
    <>
      <label className={`autoSaverSwitch relative inline-flex ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer' } select-none items-center`}>
        <input
          type='checkbox'
          name='autoSaver'
          className={`sr-only`}
          checked={isChecked}
          onChange={handleCheckboxChange}
          disabled={isLoading}
        />
        <span
          className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-primary' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-6' : ''
            }`}
          ></span>
        </span>
        <span className='label flex items-center text-sm font-medium text-white'>
          Status Bot <span className='pl-1'> {isChecked ? 'On' : 'Off'} </span>
        </span>
      </label>
    </>
  )
}

export default ToggleBot;
