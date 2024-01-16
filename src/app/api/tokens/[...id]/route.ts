import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth"; // Anda perlu menginstal next-auth untuk ini
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { authOptions } from "@/lib/authOptions/authOptions"

const prisma = new PrismaClient();

export const DELETE = async (req: Request, { params }: { params: { id: string, userId: string }}) => {
    // Dapatkan sesi pengguna
    const session = await getServerSession(authOptions);
    // console.log(session)

    // Jika tidak ada sesi, kembalikan kesalahan
    if (!session) {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }
    if (session?.user.role !== "Admin") {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }
    // Jika ada sesi, lanjutkan dengan permintaan
    const bot = await prisma.token.delete({
        where: {            
            id: Number(params.id[0]),
            userId: Number(params.id[1]),
        }
    });

    return NextResponse.json(bot, { status: 200 });
}
