import { NextResponse } from "next/server";
import { getBotStatusPublicAPI } from "@/lib/prisma/service";

export async function GET(req: Request, { params }: {params: {id: string, token: string}}) {
    if(!params.id[1]){
        return NextResponse.json({
            status: 401,
            error: "Method Not Allowed",
        },{
            status: 401
        })
    }else if(!params.id[1]){
        return NextResponse.json({
            status: 401,
            error: "Method Not Allowed",
        },{
            status: 401
        })
    }
    const res = await getBotStatusPublicAPI(Number(params.id[0]), params.id[1]);
    return new NextResponse(res, { status: 200 });
  }
  