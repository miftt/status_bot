import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();


/**
 * Fungsi login untuk mencari pengguna berdasarkan username.
 * @param {Object} data - Objek yang berisi username pengguna.
 * @param {string} data.username - Username pengguna.
 * @returns {Object|null} Mengembalikan objek pengguna jika ditemukan, atau null jika tidak.
 */
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


/**
 * Fungsi register untuk mendaftarkan pengguna baru.
 * @param {Object} data - Objek yang berisi detail pengguna.
 * @param {string} data.username - Username pengguna.
 * @param {string} data.password - Password pengguna.
 * @param {string} data.role - Role pengguna.
 * @param {string} data.status - Status pengguna.
 * @returns {Object} Mengembalikan objek yang berisi status, kode status, dan pesan.
 */
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


/**
 * Fungsi getDataBot untuk mendapatkan daftar bot berdasarkan userId.
 * @param {any} userId - ID pengguna.
 * @returns {Array|null} Mengembalikan array bot jika ditemukan, atau null jika tidak.
 */
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


/**
 * Fungsi getBotStatusFromWeb untuk mendapatkan status bot dari web berdasarkan userId.
 * @param {number} userId - ID pengguna.
 * @returns {Object|null} Mengembalikan objek status bot jika ditemukan, atau null jika tidak.
 */
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

/**
 * Fungsi getBotStatusPublicAPI untuk mendapatkan status bot melalui API publik
 * berdasarkan userId dan token.
 * @param {number} userId - ID pengguna.
 * @param {string} token - Token pengguna.
 * @returns {string|null} Mengembalikan status bot jika
 * token valid dan ditemukan, 'Method Not Allowed' jika token tidak valid, 
 * atau null jika tidak ditemukan.
 */
export async function getBotStatusPublicAPI(userId: number, token: string){
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
