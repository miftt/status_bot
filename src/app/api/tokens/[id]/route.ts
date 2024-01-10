import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Token } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const PATCH = async (req: Request, { params }: { params: { id: string }}) => {
    const body: Token = await req.json();
    const hashedToken = await bcrypt.hash(body.token, 10);
    const data: Partial<Token> = {
        token: hashedToken
    };
    const user = await prisma.token.update({
        where: {
            userId: Number(params.id)
        },
        data: data
    });
    return NextResponse.json(user, { status: 200 });
}

