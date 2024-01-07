import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
    const botData = await req.json();
    bot.push(botData);
    return NextResponse.json({
      status: 201,
      message: 'Bot berhasil ditambahkan',
      data: botData
    });
  }