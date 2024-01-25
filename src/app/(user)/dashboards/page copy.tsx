import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions/authOptions"

import { BsRobot } from "react-icons/bs";
import { FaSignal } from "react-icons/fa";
import { BiNoSignal } from "react-icons/bi";
import { FaBan } from "react-icons/fa";
import { GrPowerShutdown } from "react-icons/gr";
import Card from "./Card";

const prisma = new PrismaClient();

const DashboardsPage = async () => {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    async function getData(userId: any){
        await new Promise((r) => setTimeout(r, 1000));
        const bots = await prisma.listBot.findMany({
          where: {
            userId: userId,
          },
        });
        return bots;
      }
    const botStatus = await getData(userId);
    const botStatusCounts = botStatus.reduce((counts: any, bot) => {
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