import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Token } from "@prisma/client";
import bcrypt from "bcrypt";


const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    try {
        const body: Token = await req.json();
        const hashedPassword = await bcrypt.hash(body.token, 10);
        const token = await prisma.token.create({
            data: {
                token: hashedPassword,
                userId: body.userId,
            }
        });
        return NextResponse.json(token, { status: 201 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}