'use client'

import useSWR from "swr";

import Revalidate from "../components/core/revalidate";
import DeleteBot from "./deleteBot";
import ToogleBot from "@/components/fragments/toggleStatusBot";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { client } from "@/lib/supabase/init";
// type listBot = {
//   id: number,
//   namaBot: string,
//   status: string,
//   world: string,
//   uptime: string,
//   lastUpdate: string,
//   botInfo: string
// }
// interface Data{
//   data: listBot[]
// }

const fetcher = (url: string) => fetch(url).then((res) => res.json());
//TODOS MAKE REALTIME TINGGAL DIKIT LAGI SEMANGAT!!!!
//SUDAH REALTIME AKAN TETAPI BANYAK ERROR PERTAMA, TIDAK BISA UPDATE KARENA PAKAI REALTIME -- DONE BANG
// DATA SUDAH MASUK KETIKA INSERT DATA AKAN TETAPI BLANK HARUS REFRESH BARU MUNCUL - done bang
// DATA KETIKA DI DELETE MASIH BLANK DAN DATA SEBELUMNYA MASIH ADA
// DATA KETIKA DI UPDATE SEMUANYA NYA KE DUPLICATE
// DONE SEMUA TO DO
export default function Home() {
  const {data: session} = useSession();
  const userId = session?.user?.id;
  // const {data: data, isLoading: loadingDataBot} = useSWR(userId ?`${process.env.NEXT_PUBLIC_API_URL}/api/bot?userid=${userId}` : null, fetcher);
  const {data: botStatus, isLoading: loadingStatusBot} = useSWR(userId ? `${process.env.NEXT_PUBLIC_API_URL}/api/statusbotweb?userid=${userId}`: null, fetcher);
  const [dataBot, setDataBot] = useState<any[]>([]);
    useEffect(() => {
      if(userId){
      const getDataBot = async () => {
        const {data, error } = await client
        .from('listBot')
        .select('*')
        .eq('userId', userId)
        if(data){
          setDataBot(data)
        }
      }
      getDataBot();
    }
    const channel = client.channel('bot').on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'listBot' },
      (payload) => {
        console.log(payload);
        if (payload.eventType === 'DELETE') {
          setDataBot((prevData) => prevData.filter((item) => item.id !== payload.old.id));
        } else if (payload.eventType === 'INSERT') {
          setDataBot((prevData) => [...prevData, payload.new]);
        } else if (payload.eventType === 'UPDATE') {
          setDataBot((prevData) => prevData.map((item) => item.id === payload.new.id ? payload.new : item));
        }
      })
    .subscribe();
    
      return () => {
        channel.unsubscribe();
      }

    },[userId]);
  return (
    <div className="flex pt-5">
      <div className="flex-grow items-center justify-center">
        <div className="flex flex-col items-center justify-start">
          <div className="col-md-12">
            <div className="card border border-gray-300">
              <div className="card-body">
                <p className="text-sm w-fit">Set Status Bot:</p>
                  <ToogleBot status={botStatus?.data?.status_bot || ""}/>
                <p className={`text-white text-sm font-medium w-[75px] text-center rounded-md ${botStatus?.data?.status_bot === "Online" ? "bg-success": "bg-[rgb(255,70,84)]"}`}>{loadingStatusBot ? "Loading..." : botStatus?.data?.status_bot}</p>
                <h5 className="card-main-title">Bot Status Table</h5>
                <div className="table-responsive">
                  <table className="table table-zebra">
                    <thead>
                      <tr className="bg-base-200">
                        <th>Slot</th>
                        <th>Nama Bot</th>
                        <th>Status</th>
                        <th>World</th>
                        <th>Uptime</th>
                        <th>Last Update</th>
                        <th>Bot Info</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {loadingDataBot && <tr><td colSpan={7} className="text-center">Loading...</td></tr>} */}
                      {dataBot?.sort((a:any, b:any) => a.id - b.id).map((bot:any,key: number) => (
                        <tr key={key}>
                          <td>{bot.id}</td>
                          <td>{bot.namaBot}</td>
                          <td className={bot.status === "Online" ? "text-success font-semibold" : bot.status === "Banned" ? "text-[rgb(255,204,0)] font-bold" : "text-error font-bold"}>{bot.status}</td>
                          <td>{bot.world}</td>
                          <td>{bot.uptime}</td>
                          <td>{bot.lastUpdate}</td>
                          <td className={bot.botInfo === "Suspended" ? "text-error" : ""}>{bot.botInfo}</td>
                          <td><DeleteBot bot={bot}/></td>
                        </tr>
                      ))}
                      {/* {data?.data?.sort((a:any, b:any) => a.id - b.id).map((bot:any) => (
                        <tr key={bot.id}>
                          <td>{bot.id}</td>
                          <td>{bot.namaBot}</td>
                          <td className={bot.status === "Online" ? "text-success" : bot.status === "Banned" ? "text-warning" : "text-error"}>{bot.status}</td>
                          <td>{bot.world}</td>
                          <td>{bot.uptime}</td>
                          <td>{bot.lastUpdate}</td>
                          <td className={bot.botInfo === "Suspended" ? "text-error" : ""}>{bot.botInfo}</td>
                          <td><DeleteBot bot={bot}/></td>
                        </tr>
                      ))} */}
                      {dataBot?.length === 0 && <tr><td colSpan={7} className="text-center">No data available</td></tr>}
                      {/* {data?.data?.length === 0 && <tr><td colSpan={7} className="text-center">No data available</td></tr>} */}
                    </tbody>
                  </table>
                    {<Revalidate/>}
                  <div className="flex justify-center mt-10">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
