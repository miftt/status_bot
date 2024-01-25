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


const DashboardsPage = () => {
    const { data: session } = useSession();
    const userId = session?.user?.id;
    const [botStatus, setBots] = useState([]);

    useEffect(() => {
        if (userId) {
            fetch(`/api/bot/getdatabot/${userId}`)
              .then(response => response.json())
              .then(data => setBots(data));
        }
    }, [userId]);
    const botStatusCounts = botStatus.reduce((counts: any, bot:listBot) => {
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
                <Card icon={<BsRobot size={40}/>} title="" total={botStatus.length} description="50%"/>
                <Card icon={<FaSignal size={40}/>} title="Online" total={getTotalOnlineBot} description="50%"/>
                <Card icon={<BiNoSignal size={40}/>} title="Ofline" total={getTotalOfflineBot} description="50%"/>
                <Card icon={<FaBan size={40}/>} title="Banned" total={getTotalBannedBot} description="50%"/>
                <Card icon={<GrPowerShutdown size={40}/>} title="Suspend" total={getTotalSuspendBot} description="50%"/>
            </div>
        </div>
     );
}
 
export default DashboardsPage;