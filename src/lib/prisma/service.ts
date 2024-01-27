import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export async function login(data: {username: string}){
    const user = await prisma.user.findUnique({
        where: {
            username: data.username,
        },
    });
    if (user){
        return user;
    }else {
        return null;
    }
}


export async function register(
    data: {
        username: string;
        password: string;
        role: string;
        status: string;
    },
){
    const user = await prisma.user.findUnique({
        where: {
            username: data.username,
        },
    });

    if (user){
        return {status: false, statusCode: 400, message: "Username already registered"};
    }else {
        data.role = "User";
        data.status = 'Nonaktif';
        data.password = await bcrypt.hash(data.password, 10);
        try{
            await prisma.user.create({
                data: data,
            });
            return{status: true, statusCode: 200, message: "Register Success"};
        }catch(error){
            return {status: false, statusCode: 400, message: "Register Failed"};
        }
    }   
}


export async function getDataBot(userId: any){
    const listBot = await prisma.listBot.findMany({
        where: {
            userId: userId
        }
    })
    if (listBot){
        return listBot;
    }
    else{
        return null;
    }
}

export async function getBotStatusFromWeb(userId: number){
    const statusUserBot = await prisma.user.findUnique({
        select: {
            status_bot: true
        },
        where: {
            id: userId
        }
    })
    if(statusUserBot){
        return statusUserBot;
    }else {
        return null;
    }
}
export async function getBotStatusAPI(userId: number, token: string){
    const statusUserBot = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select:{
            status_bot: true,
            token: true
        }
    })
    if(token !== statusUserBot?.token?.token){
        return 'Method Not Allowed';
    }
    if(statusUserBot){
        return statusUserBot?.status_bot;
    }else {
        return null;
    }
}
