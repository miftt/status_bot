import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions/authOptions"
import { updatePassword } from "@/lib/prisma/service";


export const PATCH = async (req: Request, { params }: { params: { id: string }}) => {
    const body = await req.json();
    const session = await getServerSession(authOptions);

    const data = {
        newPassword: body.newPassword,
        oldPassword: body.oldPassword
    };
    body.oldPassword = '';
    if (session === null) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    else if(session?.user?.id !== Number(params.id)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    else {
        try {
            const res = await updatePassword(Number(params.id), data.oldPassword, data.newPassword);
            if(res?.status === 400){
                return NextResponse.json(res,{
                    status: 400
                });
            }else if(res?.status === 200){
                return NextResponse.json({status: res?.status, message: res?.message},{status: 200});
            }
        } catch (error) {
            return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
        }
    }
}

