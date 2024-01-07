import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Token } from "@prisma/client";

const prisma = new PrismaClient();

export const PATCH = async (req: Request, { params }: { params: { id: string }}) => {
    const body: Token = await req.json();
    const data: Partial<Token> = {
        token: body.token
    };
    const user = await prisma.token.update({
        where: {
            id: Number(params.id)
        },
        data: data
    });
    return NextResponse.json(user, { status: 200 });
}

