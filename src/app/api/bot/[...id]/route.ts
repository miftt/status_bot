import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const DELETE = async (req: Request, { params }: { params: { id: string, userId: string }}) => {
    const user = await prisma.listBot.delete({
         where: {
             id_userId: {
                 id: Number(params.id[0]),
                 userId: Number(params.id[1])
             }
         }
    });
    return NextResponse.json(user, { status: 200 });
}