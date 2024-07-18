import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions/authOptions';

import getDate from '@/hooks/getDate';
import { getDataBot } from '@/lib/prisma/service';

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userid') || '';
  if(!userId){
    return NextResponse.json({
      status: 400,
    }, {
      status: 400
    })
  }else if(!session){
    return NextResponse.json({
      status: 401,
      message: 'Must login first',
    },{
      status: 401
    })
  }else if(session?.user?.id !== userId) {
    return NextResponse.json({
      status: 401,
      message: 'The session id not match with the user id',
    },{
      status: 401
    })
  }
  const res = await getDataBot(userId);
  return NextResponse.json({
    status: 200,
    data: res,
  }, {
    status: 200
  });
}


export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get('id'));
  const userId = searchParams.get('userId') || '';
  const token = searchParams.get('token');

  if (isNaN(id)) {
    return NextResponse.json({
      status: 400,
      message: 'SLOT harus berupa angka',
    }, {
      status: 400
    });
  }

  // Cek apakah token valid
  const userWithToken = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      token: true,
    },
  });

  if (!userWithToken || !userWithToken.token || userWithToken.token.token !== token) {
    return NextResponse.json({
      status: 405,
      message: 'Method Not Allowed',
    }, {
      status: 405
    });
  }

  const botData = {
    id: id,
    namaBot: searchParams.get('namaBot') || '',
    status: searchParams.get('status') || '',
    world: searchParams.get('world') || '',
    uptime: searchParams.get('uptime') || '',
    lastUpdate: getDate().allData,
    botInfo: searchParams.get('botInfo') || '',
    userId: userId, // ID of the User
  };
  console.log(botData)
  const existingBot = await prisma.listBot.findUnique({
    where: {
      id_userId: {
        id: id,
        userId: userId
      }
    },
  });

  const checkTotalBot = await prisma.listBot.count({
    where: {
      userId: userId
    }
  })

  const isActive = await prisma.user.findUnique({
    where: {
      id: userId
    },
    select: {
      status: true
    }
  })

  const checkRole = await prisma.user.findUnique({
    where: {
      id: userId
    },
    select: {
      role: true
    }
  })

  if (new Date(userWithToken.expireDate) < new Date() && isActive?.status !== 'Aktif') {
    return NextResponse.json({
      status: 401,
      message: 'Status user ini tidak aktif. Hubungi Developer untuk memperbarui status.',
    }, {
      status: 401
    });
  }
  if(isActive?.status === 'Nonaktif'){
    return NextResponse.json({
      status: 403,
      message: 'Status user ini tidak aktif. Hubungi Developer untuk memperbarui status.',
    },{
      status: 403
    })
  }
  if(userWithToken.expireDate < new Date()){
    const updateExpireDate = await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        status: 'Nonaktif'
      }
    })
    return NextResponse.json({
      message: 'kadaluarsa bang',
      data: updateExpireDate.expireDate
    },{
      status: 403
    })
  }

  // if (new Date(userWithToken.expireDate) === new Date() && isActive?.status !== 'Aktif') {
  //   return NextResponse.json({
  //     status: 401,
  //     message: 'Status user ini tidak aktif. Hubungi Developer untuk memperbarui status.',
  //   }, {
  //     status: 401
  //   });
  // }

  if (existingBot) {
    const updatedBot = await prisma.listBot.update({
      where: {
        id_userId: {
          id: id,
          userId: userId
        }
      },
      data: botData,
    });
    return NextResponse.json({
      status: 200,
      message: 'Data bot berhasil diperbarui',
      data: updatedBot
    });
  }else if(checkTotalBot >= 10 && checkRole?.role === 'User') {
    return NextResponse.json({
      status: 403,
      message: 'Jumlah bot kamu sudah 10 dan sudah melebihi batas',
    }, {
      status: 403
    });
  }else if(checkTotalBot >= 50 && checkRole?.role === 'Gold'){
    return NextResponse.json({
      status: 403,
      message: 'Jumlah bot kamu sudah 50 dan sudah melebihi batas',
    }, {
      status: 403
    });
  } else {
      const newBot = await prisma.listBot.create({
        data: botData,
      }); 
    return NextResponse.json({
      status: 201,
      message: 'Bot berhasil ditambahkan',
      data: newBot
    }, {
      status: 201
    });
  }
}




// import { NextResponse, NextRequest } from 'next/server';

// type Bot = {
//     id: number,
//     namaBot: string,
//     status: string,
//     world: string,
//     uptime: string,
//     lastUpdate: string,
//     botInfo: string
// }

// const bot = [
//     {
//       id: 1,
//       namaBot: 'aduda',
//       status: "Online",
//       world: "AWIKWOK",
//       uptime: "10 minutes",
//       lastUpdate: "10 minutes ago",
//       botInfo: "Farming"
//     },
//     {
//         id: 2,
//         namaBot: 'abubi',
//         status: "Online",
//         world: "AJAMA",
//         uptime: "15 minutes",
//         lastUpdate: "15 minutes ago",
//         botInfo: "Harvest Tree"
//     },
//     {
//         id: 3,
//         namaBot: 'akimas',
//         status: "Offline",
//         world: "EXIT",
//         uptime: "15 minutes",
//         lastUpdate: "15 minutes ago",
//         botInfo: "Harvest Tree"
//     },
//     {
//         id: 4,
//         namaBot: 'ajabase',
//         status: "Banned",
//         world: "AJAMA",
//         uptime: "15 minutes",
//         lastUpdate: "15 minutes ago",
//         botInfo: "Banned"
//     },
//   ];

// export async function GET(req: NextRequest) {
//     const { searchParams } = new URL(req.url);
//     const id = searchParams.get('id');
//     if(id){
//         const detailBot = bot.find(bot => bot.id === Number(id))
//         if(detailBot){
//             return NextResponse.json({
//                 status: 200,
//                 message: 'success',
//                 data: detailBot
//             });
//         }
//         return NextResponse.json({
//             status: 404,
//             message: `Tidak ada data bot pada id ${id}`,
//             data: {}
//         })
//     }
//       return NextResponse.json({
//         status: 200,
//         message: 'success',
//         data: bot
//       });
// }
// export async function POST(req: NextRequest) {
//     // Menerima data dari parameter URL
//     const { searchParams } = new URL(req.url);
//     const id = Number(searchParams.get('id'));
  
//     // Cek apakah id adalah angka
//     if (isNaN(id)) {
//       return NextResponse.json({
//         status: 400,
//         message: 'ID harus berupa angka',
//       });
//     }
  
//     const botData: Bot = {
//       id: id,
//       namaBot: searchParams.get('namaBot') || '',
//       status: searchParams.get('status') || '',
//       world: searchParams.get('world') || '',
//       uptime: searchParams.get('uptime') || '',
//       lastUpdate: searchParams.get('lastUpdate') || '',
//       botInfo: searchParams.get('botInfo') || ''
//     };
  
//     // Cari bot dengan ID yang sama
//     const existingBotIndex = bot.findIndex(b => b.id === id);
  
//     if (existingBotIndex !== -1) {
//       // Jika bot ditemukan, ganti data bot
//       bot[existingBotIndex] = botData;
//       return NextResponse.json({
//         status: 200,
//         message: 'Data bot berhasil diperbarui',
//         data: botData
//       });
//     } else {
//       // Jika bot tidak ditemukan, tambahkan bot baru
//       bot.push(botData);
//       return NextResponse.json({
//         status: 201,
//         message: 'Bot berhasil ditambahkan',
//         data: botData
//       });
//     }
//   }
  
  