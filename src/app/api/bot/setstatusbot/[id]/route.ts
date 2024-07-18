import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions/authOptions"
import { updateStatusBot } from "@/lib/prisma/service";

export const PATCH = async (req: Request, { params }: {params: {id: string}}) => {
    const session = await getServerSession(authOptions);
    const body: any = await req.json()

    if(!session) {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }else if(session?.user.id !== params.id) {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }else{
        const res = await updateStatusBot(params.id, body.status)
        return NextResponse.json({
            status: 200,
            data: res?.status_bot
        },({
            status: 200
        }))
    }
}