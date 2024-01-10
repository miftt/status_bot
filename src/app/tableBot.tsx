// import { PrismaClient } from "@prisma/client";
// import Revalidate from "./revalidate/page";
// //TODO: tambahkan userId sesi dari login untuk userId

// const prisma = new PrismaClient();

// type listBot = {
//   id: number,
//   namaBot: string,
//   status: string,
//   world: string,
//   uptime: string,
//   lastUpdate: string,
//   botInfo: string
// }

// type getSession = {
//   sessi: any
// }


// // Anda perlu menyediakan userId saat memanggil fungsi ini
// async function getData(userId: any){
//   const bots = await prisma.listBot.findMany({
//     where: {
//       userId: userId,
//     },
//   });
//   return bots;
// }

// export default async function tableBot({bot, sessi} : {bot: listBot, sessi: getSession}) {
//   // Ganti ini dengan session username yang sebenarnya pakai session
//   console.log(sessi.sessi);
//   const data = await getData(sessi);
//   return (
//     <div className="flex">
//       <div className="flex flex-grow items-center justify-center ">
//         {/* ... */}
//         <div className="row">
//           <div className="col-md-12">
//             <div className="card border border-gray-300">
//               <div className="card-body">
//                 <h5 className="card-main-title">Bot Status Table</h5>
//                 <div className="table-responsive">
//                   <table className="table table-zebra">
//                     <thead>
//                       <tr className="bg-base-200">
//                         <th>Slot</th>
//                         <th>Nama Bot</th>
//                         <th>Status</th>
//                         <th>World</th>
//                         <th>Uptime</th>
//                         <th>Last Update</th>
//                         <th>Bot Info</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {data.sort((a, b) => a.id - b.id).map((bot) => (
//                         <tr key={bot.id}>
//                           <td>{bot.id}</td>
//                           <td>{bot.namaBot}</td>
//                           <td className={bot.status === "Online" ? "text-success" : bot.status === "Banned" ? "text-warning" : "text-error"}>{bot.status}</td>
//                           <td>{bot.world}</td>
//                           <td>{bot.uptime}</td>
//                           <td>{bot.lastUpdate}</td>
//                           <td>{bot.botInfo}</td>
//                         </tr>
//                       ))}
//                       {data.length === 0 && <tr><td colSpan={7} className="text-center">No data available</td></tr>}
//                     </tbody>
//                   </table>
//                     <Revalidate/>
//                   <div className="flex justify-center mt-10">
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* ... */}
//       </div>
//       </div>
//   );
// }
