import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Users } from "@prisma/client";

const prisma = new PrismaClient();

export const DELETE = async (req: Request, { params }: { params: { id: string }}) => {
    const user = await prisma.users.delete({
         where: {
             id: Number(params.id)
         }
         });
    return NextResponse.json(user, { status: 200 });
}

export const PATCH = async (req: Request, { params }: { params: { id: string }}) => {
    const body: Users = await req.json();
    const data: Partial<Users> = {
        username: body.username,
        status: body.status,
        role: body.role
    };
    if (body.password && body.password.trim() !== "") {
        data.password = body.password;
    }
    const user = await prisma.users.update({
        where: {
            id: Number(params.id)
        },
        data: data
    });
    return NextResponse.json(user, { status: 200 });
}

