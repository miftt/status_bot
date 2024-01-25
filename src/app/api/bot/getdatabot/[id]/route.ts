import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions/authOptions"

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: {params: {id: string, token: string}}) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if(!session) {
    return NextResponse.json({
      error: "Must login first"
    },{status: 401})
  }else if(Number(params.id) !== userId) {
    return NextResponse.json({
      error: "The session id not match with the user id"
    })
  }
  const bots = await prisma.listBot.findMany({
    where: {
      userId: Number(params.id)
    }
  });
  return NextResponse.json(bots);
}