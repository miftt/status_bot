import { NextResponse } from "next/server";
import { getBotStatusPublicAPI } from "@/lib/prisma/service";

export async function GET(req: Request, { params }: {params: {id: string, token: string}}) {
    const data = await getBotStatusPublicAPI(Number(params.id[0]), params.id[1]);
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
    return new NextResponse(data, { status: 200 });
  }
  