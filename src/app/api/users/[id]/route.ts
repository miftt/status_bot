import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";

const prisma = new PrismaClient();

export const DELETE = async (req: Request, { params }: { params: { id: string }}) => {
    const user = await prisma.user.delete({
         where: {
             id: Number(params.id)
         }
         });
    return NextResponse.json(user, { status: 200 });
}

export const PATCH = async (req: Request, { params }: { params: { id: string }}) => {
    const body: User = await req.json();
    const data: Partial<User> = {
        username: body.username,
        status: body.status,
        role: body.role
    };
    if (body.password && body.password.trim() !== "") {
        data.password = body.password;
    }
    const user = await prisma.user.update({
        where: {
            id: Number(params.id)
        },
        data: data
    });
    return NextResponse.json(user, { status: 200 });
}

