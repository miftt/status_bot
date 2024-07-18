import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions/authOptions"
import { deleteToken } from "@/lib/prisma/service";

export const DELETE = async (req: Request, { params }: { params: { id: string, userId: string }}) => {
    // Dapatkan sesi pengguna
    const session = await getServerSession(authOptions);
    // Jika tidak ada sesi, kembalikan kesalahan
    if (!session) {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }
    if (session?.user.role !== "Admin") {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }
    // Jika ada sesi, lanjutkan dengan permintaan
    const res = await deleteToken(Number(params.id[0]), params.id[1]);

    return NextResponse.json(res, { status: 200 });
}
