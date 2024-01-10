import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import bcrypt from 'bcrypt'
import { getServerSession } from "next-auth"; // Anda perlu menginstal next-auth untuk ini
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const prisma = new PrismaClient();

export const DELETE = async (req: Request, { params }: { params: { id: string }}) => {
    // Dapatkan sesi pengguna
    const session = await getServerSession(authOptions);
    if (session?.user.role !== "Admin") {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }
    const user = await prisma.user.delete({
         where: {
             id: Number(params.id)
         }
         });
    return NextResponse.json(user, { status: 200 });
}

export const PATCH = async (req: Request, { params }: { params: { id: string }}) => {
    const body: User = await req.json();
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const expireDate = new Date(body.expireDate);
    // Dapatkan sesi pengguna
    const session = await getServerSession(authOptions);
    if (session?.user.role !== "Admin") {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }
    const data: Partial<User> = {
    username: body.username,
    status: body.status,
    role: body.role,
    expireDate: expireDate,
};
if (body.password && body.password.trim() !== "") {
    data.password = hashedPassword;
}
const user = await prisma.user.update({
    where: {
        id: Number(params.id)
    },
    data: data
});
return NextResponse.json(user, { status: 200 });

}

