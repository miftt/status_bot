import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions/authOptions"
import { getToken, updateToken } from "@/lib/prisma/service";


export const GET = async (req: Request, { params }: { params: { id: string }}) => {
    const session = await getServerSession(authOptions);
    if(!session){
        return NextResponse.json({error: "Must login first"}, {status: 401})
    }else if(session?.user?.id !== Number(params.id)){
        return NextResponse.json({error: "The session id not match with the user id"}, {status: 401})
    }
    const res = await getToken(Number(params.id));
    return NextResponse.json({
        status: 200, data: res
    },{status: 200});
}

export const PATCH = async (req: Request, { params }: { params: { id: string }}) => {
    const body = await req.json();
    //dapatkan session
    const session = await getServerSession(authOptions);
    if (session?.user.role !== "Admin") {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }
    const res = await updateToken(Number(params.id), body.token);
    return NextResponse.json(res, { status: 200 });
}

