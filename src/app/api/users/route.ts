import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Users } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const body: Users = await req.json();
    const user = await prisma.users.create({
         data: {
             username: body.username,
             password: body.password,
             status: body.status,
             role: body.role
         }
    });
    return NextResponse.json(user, { status: 201 });
}