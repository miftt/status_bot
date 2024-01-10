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
        return {status: false, statusCode: 400, message: "Email already registered"};
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

