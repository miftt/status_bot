import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function GET(req: Request, { params }: {params: {id: string, token: string}}) {
    const getStatusBot = async () => {
        const data = await prisma.user.findUnique({
            where: {
                id: Number(params.id[0]),
            },
            select: {
                status_bot: true,
                token: true,
            }
        })
        return data;
    }
    const data = await getStatusBot();

    if(!params.id[1]){
        return NextResponse.json({
            status: 401,
            error: "Method Not Allowed",
        },{
            status: 401
        })
    }else if(params.id[1] !== data?.token?.token){
        return NextResponse.json({
            status: 401,
            error: "Method Not Allowed",
        },{
            status: 401
        })
    }
    return new NextResponse(data?.status_bot, { status: 200 });
  }
  