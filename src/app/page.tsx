import { PrismaClient } from "@prisma/client";
import Revalidate from "./revalidate/page";
import { getServerSession } from "next-auth/next"; // Import useSession
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { authOptions } from "@/lib/authOptions/authOptions"
import Card from "../components/fragments/CardTotalBot/Card";
import DeleteBot from "./deleteBot";
import GetToken from "./getToken";
const prisma = new PrismaClient();

type listBot = {
  id: number,
  namaBot: string,
  status: string,
  world: string,
  uptime: string,
  lastUpdate: string,
  botInfo: string
}

// Anda perlu menyediakan userId saat memanggil fungsi ini
async function getData(userId: any){
  const bots = await prisma.listBot.findMany({
    where: {
      userId: userId,
    },
  });
  return bots;
}

async function getToken(userId: any){
  const token = await prisma.token.findMany({
    where: {
      userId: userId,
    },
  });
  return token;
}

export default async function Home() {
  const session = await getServerSession(authOptions); //// Use useSession to get the session data
  const userId = session?.user?.id; // Get the user id from the session
  const data = await getData(userId);
  const token = await getToken(userId);
  // const getTotalOnlineBot = data.filter(bot => bot.status === "Online").length
  // const getTotalOfflineBot = data.filter(bot => bot.status === "Offline").length
  // const getTotalBannedBot = data.filter(bot => bot.status === "Banned").length
  // const getTotalSuspendBot = data.filter(bot => bot.status === "Suspended").length
  const botStatusCounts = data.reduce((counts: any, bot) => {
    counts[bot.status] = (counts[bot.status] || 0) + 1;
    return counts;
  }, {});
  
  const getTotalOnlineBot = botStatusCounts["Online"] || 0;
  const getTotalOfflineBot = botStatusCounts["Offline"] || 0;
  const getTotalBannedBot = botStatusCounts["Banned"] || 0;
  const getTotalSuspendBot = botStatusCounts["Suspended"] || 0;
  return (
    <div className="flex pt-5">
      <div className="flex-grow items-center justify-center">
        <div className="row">
          <GetToken token={token[0].token}/>
          <div className="flex gap-5">
            <Card info="" total={data.length}/>
            <Card info="Online" total={getTotalOnlineBot}/>
            <Card info="Offline" total={getTotalOfflineBot}/>
            <Card info="Banned" total={getTotalBannedBot}/>
            <Card info="Suspended" total={getTotalSuspendBot}/>
          </div>
          <div className="col-md-12">
            <div className="card border border-gray-300">
              <div className="card-body">
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
                      {data.sort((a, b) => a.id - b.id).map((bot) => (
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
                      ))}
                      {data.length === 0 && <tr><td colSpan={7} className="text-center">No data available</td></tr>}
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
