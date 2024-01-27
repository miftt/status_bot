import { authOptions } from "@/lib/authOptions/authOptions";
import { getBotStatusFromWeb } from "@/lib/prisma/service";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const session = await getServerSession(authOptions);
    const { searchParams } = new URL(req.url);
    const userId = Number(searchParams.get('userid'));
    if(!session) {
        return NextResponse.json({
            status: 401,
            message: 'Must login first'
        },{
            status: 401
        })
    }else if(session?.user?.id !== Number(userId)) {
        return NextResponse.json({
            status: 401,
            message: 'The session id not match with the user id'
        },{
            status: 401
        })
    }
    const res = await getBotStatusFromWeb(userId);
    return NextResponse.json({
        status: 200,
        data: res
    }, {
        status: 200
    })
}