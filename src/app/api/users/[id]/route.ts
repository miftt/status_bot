import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions/authOptions"
import { deleteUser, updateUser } from "@/lib/prisma/service";


export const DELETE = async (req: Request, { params }: { params: { id: string }}) => {
    // Dapatkan sesi pengguna
    const session = await getServerSession(authOptions);
    if (session?.user.role !== "Admin") {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }
    const res = await deleteUser(Number(params.id));
    return NextResponse.json(res, { status: 200 });
}

export const PATCH = async (req: Request, { params }: { params: { id: string }}) => {
    const body = await req.json();
    const expireDate = new Date(body.expireDate);
    // Dapatkan sesi pengguna
    const session = await getServerSession(authOptions);
    if (session?.user.role !== "Admin") {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }
    const data = {
        id: Number(params.id),
        username: body.username,
        password: body.password,
        status: body.status,
        role: body.role,
        expireDate: expireDate,
    };
    const res = await updateUser(data);
    return NextResponse.json(res, { status: 200 });

}

