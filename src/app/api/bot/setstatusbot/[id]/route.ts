import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions/authOptions"
const prisma = new PrismaClient();

export const PATCH = async (req: Request, { params }: {params: {id: string}}) => {
    const session = await getServerSession(authOptions);
    const body: any = await req.json()

    if(!session) {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }else if(session?.user.id !== Number(params.id)) {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }else{
        const updateStatus = await prisma.user.update({
            where:{
                id: Number(params.id)
            },
            data:{
                status_bot: body.status
            }
        })
        return NextResponse.json({
            status: 200,
            data: updateStatus.status_bot
        },({
            status: 200
        }))
    }
}