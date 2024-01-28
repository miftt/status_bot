import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions/authOptions"
import { createToken } from "@/lib/prisma/service";

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        // dapatkan session
        const session = await getServerSession(authOptions);
        if (session?.user.role !== "Admin") {
            return NextResponse.json({ error: "Method Not Allowed" }, { status: 401 });
        }
        const res = await createToken(body.userId, body.token);
        return NextResponse.json(res, { status: 201 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}