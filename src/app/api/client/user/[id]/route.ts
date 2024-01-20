import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
import { getServerSession } from "next-auth"; // Anda perlu menginstal next-auth untuk ini
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { authOptions } from "@/lib/authOptions/authOptions"

const prisma = new PrismaClient();

interface User {
    password: string;
    oldPassword: string;
}

export const PATCH = async (req: Request, { params }: { params: { id: string }}) => {
    const body: User = await req.json();
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const session = await getServerSession(authOptions);
    const getOldPassword = await prisma.user.findUnique({
        where: {
            id: Number(params.id)
        },
        select: {
            password: true
        }
    })
   const confirmOldPassword = await bcrypt.compare(body.oldPassword, getOldPassword?.password || "");
   body.oldPassword = '';
   
    const data: Partial<User> = {
        password: body.password,
    };
    if (body.password && body.password.trim() !== "") {
        data.password = hashedPassword;
    }
    if (session === null) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    else if(session?.user?.id !== Number(params.id)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    else if(confirmOldPassword === false) {
        return NextResponse.json({ error: "Wrong old password" }, { status: 401 });
    }
    else {
        try {
            const user = await prisma.user.update({
                where: {
                    id: Number(params.id)
                },
                data: data
            });
            return NextResponse.json({
                success: true,
                username: user.username
            },{
                status: 200
            });
        } catch (error) {
            return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
        }
    }
}

