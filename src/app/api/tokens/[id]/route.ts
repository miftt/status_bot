import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Token } from "@prisma/client";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth"; // Anda perlu menginstal next-auth untuk ini
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { authOptions } from "@/lib/authOptions/authOptions"

const prisma = new PrismaClient();

export const GET = async (req: Request, { params }: { params: { id: string }}) => {
    const session = await getServerSession(authOptions);
    if(!session){
        return NextResponse.json({error: "Must login first"}, {status: 401})
    }else if(session?.user?.id !== Number(params.id)){
        return NextResponse.json({error: "The session id not match with the user id"}, {status: 401})
    }
    const token = await prisma.token.findUnique({
        where: {
            userId: Number(params.id)
        },select:{
            token: true
        }
    })
    return NextResponse.json({
        status: 200, data: token
    },{status: 200});
}

export const PATCH = async (req: Request, { params }: { params: { id: string }}) => {
    const body: Token = await req.json();
    const hashedToken = await bcrypt.hash(body.token, 10);
    const data: Partial<Token> = {
        token: hashedToken
    };
    //dapatkan session
    const session = await getServerSession(authOptions);
    if (session?.user.role !== "Admin") {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }
    const user = await prisma.token.update({
        where: {
            userId: Number(params.id)
        },
        data: data
    });
    return NextResponse.json(user, { status: 200 });
}

