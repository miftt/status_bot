'use client'

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import type { listBot } from "@prisma/client";

import { BsRobot } from "react-icons/bs";
import { FaSignal } from "react-icons/fa";
import { BiNoSignal } from "react-icons/bi";
import { FaBan } from "react-icons/fa";
import { GrPowerShutdown } from "react-icons/gr";
import Card from "./Card";
import { client } from "@/lib/supabase/init";


const DashboardsPage = () => {
    const { data: session } = useSession();
    const userId = session?.user?.id;
    // const [botStatus, setBots] = useState([]);

    // useEffect(() => {
    //     if (userId) {
    //         fetch(`/api/bot/getdatabot/${userId}`)
    //           .then(response => response.json())
    //           .then(data => setBots(data));
    //     }
    // }, [userId]);
    const [dataBot, setDataBot] = useState<any[]>([]);
    useEffect(() => {
      if(userId){
      const getDataBot = async () => {
        const {data, error } = await client
        .from('listBot')
        .select('*')
        .eq('userId', userId)
        if(data){
          console.log(data)
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
    const botStatusCounts = dataBot.reduce((counts: any, bot:listBot) => {
        counts[bot.status] = (counts[bot.status] || 0) + 1;
        return counts;
    }, {});
      
    const getTotalOnlineBot = botStatusCounts["Online"] || 0;
    const getTotalOfflineBot = botStatusCounts["Offline"] || 0;
    const getTotalBannedBot = botStatusCounts["Banned"] || 0;
    const getTotalSuspendBot = botStatusCounts["Suspended"] || 0;
    return ( 
        <div>
            <div className="grid gap-y-1 gap-x-1 md:grid-cols-2 xl:grid-cols-3">
                <Card icon={<BsRobot size={40}/>} title="" total={dataBot.length} description="50%"/>
                <Card icon={<FaSignal size={40}/>} title="Online" total={getTotalOnlineBot} description="50%"/>
                <Card icon={<BiNoSignal size={40}/>} title="Ofline" total={getTotalOfflineBot} description="50%"/>
                <Card icon={<FaBan size={40}/>} title="Banned" total={getTotalBannedBot} description="50%"/>
                <Card icon={<GrPowerShutdown size={40}/>} title="Suspend" total={getTotalSuspendBot} description="50%"/>
            </div>
        </div>
     );
}
 
export default DashboardsPage;