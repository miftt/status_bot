import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const body: User = await req.json();
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await prisma.user.create({
         data: {
             username: body.username,
             password: hashedPassword,
             status: body.status,
             role: body.role
         }
    });
    return NextResponse.json(user, { status: 201 });
}