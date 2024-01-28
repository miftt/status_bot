import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions/authOptions"
import { deleteListBot } from "@/lib/prisma/service";

export const DELETE = async (req: Request, { params }: { params: { id: string, userId: string }}) => {
    // Dapatkan sesi pengguna
    const session = await getServerSession(authOptions);
    
    // console.log(session)

    // Jika tidak ada sesi, kembalikan kesalahan
    if (!session) {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }
    else if(session?.user.id !== Number(params.id[1])){
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
    }
    else {
        const res = await deleteListBot(Number(params.id[0]), Number(params.id[1]));
        return NextResponse.json({ status: 200, message: "Success delete bot", data: res }, { status: 200 });
    }

}
