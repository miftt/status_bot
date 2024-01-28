import { authOptions } from "@/lib/authOptions/authOptions";
import { getAllUsers } from "@/lib/prisma/service";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const session = await getServerSession(authOptions);
    if(!session) {
        return NextResponse.json({
            status: 401,
            error: "Please login first"
        });
    }else if(session?.user?.role !== "Admin") {
        return NextResponse.json({
            status: 401,
            error: "Method Not Allowed"
        });
    }else if(session?.user?.username !== "mifuzi") {
        return NextResponse.json({
            status: 401,
            error: "Your not allowed to access this data"
        })
    }
    const user = await getAllUsers();
    return NextResponse.json({
        status: 200,
        data: user
    })
}