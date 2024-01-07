import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Token } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    try {
        const body: Token = await req.json();
        const token = await prisma.token.create({
            data: {
                id: body.id,
                token: body.token
            }
        });
        return NextResponse.json(token, { status: 201 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}