import { NextResponse, NextRequest } from 'next/server';

type Bot = {
    id: number,
    namaBot: string,
    status: string,
    world: string,
    uptime: string,
    lastUpdate: string,
    botInfo: string
}

const bot = [
    {
      id: 1,
      namaBot: 'aduda',
      status: "Online",
      world: "AWIKWOK",
      uptime: "10 minutes",
      lastUpdate: "10 minutes ago",
      botInfo: "Farming"
    },
    {
        id: 2,
        namaBot: 'abubi',
        status: "Online",
        world: "AJAMA",
        uptime: "15 minutes",
        lastUpdate: "15 minutes ago",
        botInfo: "Harvest Tree"
    },
    {
        id: 3,
        namaBot: 'akimas',
        status: "Offline",
        world: "EXIT",
        uptime: "15 minutes",
        lastUpdate: "15 minutes ago",
        botInfo: "Harvest Tree"
    },
    {
        id: 4,
        namaBot: 'ajabase',
        status: "Banned",
        world: "AJAMA",
        uptime: "15 minutes",
        lastUpdate: "15 minutes ago",
        botInfo: "Banned"
    },
  ];

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if(id){
        const detailBot = bot.find(bot => bot.id === Number(id))
        if(detailBot){
            return NextResponse.json({
                status: 200,
                message: 'success',
                data: detailBot
            });
        }
        return NextResponse.json({
            status: 404,
            message: `Tidak ada data bot pada id ${id}`,
            data: {}
        })
    }
      return NextResponse.json({
        status: 200,
        message: 'success',
        data: bot
      });
}
export async function POST(req: NextRequest) {
    // Menerima data dari parameter URL
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get('id'));
  
    // Cek apakah id adalah angka
    if (isNaN(id)) {
      return NextResponse.json({
        status: 400,
        message: 'ID harus berupa angka',
      });
    }
  
    const botData: Bot = {
      id: id,
      namaBot: searchParams.get('namaBot') || '',
      status: searchParams.get('status') || '',
      world: searchParams.get('world') || '',
      uptime: searchParams.get('uptime') || '',
      lastUpdate: searchParams.get('lastUpdate') || '',
      botInfo: searchParams.get('botInfo') || ''
    };
  
    // Cari bot dengan ID yang sama
    const existingBotIndex = bot.findIndex(b => b.id === id);
  
    if (existingBotIndex !== -1) {
      // Jika bot ditemukan, ganti data bot
      bot[existingBotIndex] = botData;
      return NextResponse.json({
        status: 200,
        message: 'Data bot berhasil diperbarui',
        data: botData
      });
    } else {
      // Jika bot tidak ditemukan, tambahkan bot baru
      bot.push(botData);
      return NextResponse.json({
        status: 201,
        message: 'Bot berhasil ditambahkan',
        data: botData
      });
    }
  }
  
  