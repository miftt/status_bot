
import Revalidate from './revalidate/page'



type Bot = {
  id: number,
  namaBot: string,
  status: string,
  world: string,
  uptime: string,
  lastUpdate: string,
  botInfo: string
}


async function getData(){
  const res = await fetch('http://localhost:3000/api/bot',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: "force-cache",
    next: {
      tags: ["bot"],
    }
  })
  // console.log(res.data)
  return res.json()
}

export default async function Home() {
  const data = await getData();
  // console.log(data)

  return (
    <div className="flex items-center justify-center w-full">
      {/* ... */}
      <div className="row">
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
                    </tr>
                  </thead>
                  <tbody>
                    {data.data.map((bot: Bot) => (
                      <tr key={bot.id}>
                        <td>{bot.id}</td>
                        <td>{bot.namaBot}</td>
                        <td className={bot.status === "Online" ? "text-success" : bot.status === "Banned" ? "text-warning" : "text-error"}>{bot.status}</td>
                        <td>{bot.world}</td>
                        <td>{bot.uptime}</td>
                        <td>{bot.lastUpdate}</td>
                        <td>{bot.botInfo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-center mt-10">
                  <Revalidate/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ... */}
    </div>
  );
}
