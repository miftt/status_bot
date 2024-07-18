import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
const prisma = new PrismaClient();
import  { v4 as uuidv4 } from 'uuid';


/**
 * Fungsi login untuk mencari pengguna berdasarkan username.
 * @param {Object} data - Objek yang berisi username pengguna.
 * @param {string} data.username - Username pengguna.
 * @returns {Object|null} Mengembalikan objek pengguna jika ditemukan, atau null jika tidak.
 */
export async function login(data: {username: string}){
    const usernameInput = data.username.toLocaleLowerCase();
    const user = await prisma.user.findUnique({
        where: {
            username: usernameInput
        },
    });
    if (user){
        return user;
    }else if(user === data.username ){
        return user;
    }else {
        return null;
    }
}


/**
 * Fungsi register untuk mendaftarkan pengguna baru.
 * @param {Object} data - Objek yang berisi detail pengguna.
 * @param {string} data.id - UserId pengguna dengan UUID.
 * @param {string} data.username - Username pengguna.
 * @param {string} data.password - Password pengguna.
 * @param {string} data.role - Role pengguna.
 * @param {string} data.status - Status pengguna.
 * @returns {Object} Mengembalikan objek yang berisi status, kode status, dan pesan.
 */
export async function register(
    data: {
        id: string;
        username: string;
        password: string;
        role: string;
        status: string;
    },
){
    const usernameLower = data.username.toLowerCase();
    const user = await prisma.user.findUnique({
        where: {
            username: data.username.toLowerCase(),
        },
    });

    if (user){
        return {status: false, statusCode: 400, message: "Username already registered"};
    }else {
        data.username = usernameLower;
        data.id = uuidv4();
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
 * Fungsi updatePassword untuk memperbarui password pengguna.
 * @param {string} id - ID pengguna dengan UUID.
 * @param {string} oldPassword - Password lama pengguna.
 * @param {string} newPassword - Password baru pengguna.
 * @returns {Object} Mengembalikan objek yang berisi status dan pesan.
 */
export async function updatePassword(id: string, oldPassword: string, newPassword: string){
    const getOldPassword = await prisma.user.findUnique({
        where:{
            id: id
        },
        select: {
            password: true
        }
    })
    const confirmOldPassword = await bcrypt.compare(oldPassword, getOldPassword?.password as string);
    if(confirmOldPassword === false){
        return {status: 400, message: "Wrong old password"};
    }else{
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const updatePassword = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                password: hashedPassword
            }
        });
        return {updatePassword: updatePassword, status: 200, message: "Success update password"}
    }
}


/**
 * Fungsi getAllUsers untuk mendapatkan semua pengguna.
 * Fungsi ini mengambil data pengguna dari database menggunakan prisma.
 * Data yang dipilih mencakup id, username, status, role, created_at, expireDate,
 * dan token pengguna.
 * @returns {Array} Mengembalikan array pengguna jika ditemukan, atau array kosong
 * jika tidak.
 */
export async function getAllUsers(){
    let users: any;
    try {
        users = await prisma.user.findMany({
            select: {
                id: true,
                username: true,
                status: true,
                role: true,
                created_at: true,
                expireDate: true,
                token: {
                  select: {
                    id: true,
                    token: true,
                    userId: true,
                  },
                },
              },
        });
    } catch (error) {
        console.error(error);
        users = [];
    } finally {
        await prisma.$disconnect();
    }
    return users;
}



/**
 * Fungsi deleteUser untuk menghapus pengguna berdasarkan userId.
 * @param {string} userId - ID pengguna dengan UUID.
 * @returns {Object|null} Mengembalikan objek yang berisi status,
 * pesan, dan data jika berhasil, atau null jika gagal.
 */
export async function deleteUser(userId: string){
    const deleteUser = await prisma.user.delete({
        where: {
            id: userId
        }
    });
    if(deleteUser){
        return {status: 200, message: "Success delete user", data: deleteUser}
    }else{
        return null;
    }
}


/**
 * Fungsi updateUser untuk memperbarui detail pengguna.
 * @param {Object} data - Objek yang berisi detail pengguna.
 * @param {string} data.id - ID pengguna dengan UUID.
 * @param {string} data.username - Username pengguna.
 * @param {string} [data.password] - Password pengguna. Opsional.
 * @param {string} data.status - Status pengguna.
 * @param {string} data.role - Role pengguna.
 * @param {Date} data.expireDate - Tanggal kedaluwarsa pengguna.
 * @returns {Object|null} Mengembalikan objek yang berisi status,
 * pesan, dan data jika berhasil, atau null jika gagal.
 */
export async function updateUser(data:{
    id: string,
    username: string,
    password?: string,
    status: string,
    role: string,
    expireDate: Date
}){
    const hashedPassword = await bcrypt.hash(data.password as string, 10);
    if (data.password && data.password.trim() !== "") {
        data.password = hashedPassword;
    }else{
        delete data.password;
    }
    const updateUser = await prisma.user.update({
        where: {
            id: data.id
        },
        data: data
    })
    if(updateUser){
        return {status: 200, message: "Success update user", data: updateUser}
    }else{
        return null;
    }
}


/**
 * Fungsi createToken untuk membuat token baru untuk pengguna.
 * @param {string} userId - ID pengguna dengan UUID.
 * @param {string} token - Token yang akan di-hash dan disimpan.
 * @returns {Object|null} Mengembalikan objek yang berisi status, pesan, dan data jika berhasil, atau null jika gagal.
 */
export async function createToken(userId: string, token: string){
    const hashedToken = await bcrypt.hash(token, 10);
    const createToken = await prisma.token.create({
        data: {
            userId: userId,
            token: hashedToken
        }
    });
    if(createToken){
        return {status: 200, message: "Success create token", data: createToken}
    }else {
        return null;
    }
}


/**
 * Fungsi getToken untuk mendapatkan token pengguna berdasarkan userId.
 * @param {string} userId - ID pengguna dengan UUID.
 * @returns {Object|null} Mengembalikan objek token jika ditemukan,
 * atau null jika tidak.
 */
export async function getToken(userId: string){
    const token = await prisma.token.findUnique({
        where: {
            userId: userId
        },
        select:{
            token: true
        }
    })
    if(token){
        return token;
    }else{
        return null;
    }
}


/**
 * Fungsi updateToken untuk memperbarui token pengguna.
 * @param {string} userId - ID pengguna dengan UUID.
 * @param {string} token - Token baru yang akan di-hash dan disimpan.
 * @returns {Object|null} Mengembalikan objek yang berisi status, 
 * pesan, dan data jika berhasil, atau null jika gagal.
 */
export async function updateToken(userId: string, token: string){
    const hashedToken = await bcrypt.hash(token, 10);
    const updateToken = await prisma.token.update({
        where: {
            userId: userId
        },
        data:{
            token: hashedToken
        }
    });
    if(updateToken){
        return {status: 200, message: "Success update token", data: updateToken}
    }else {
        return null;
    }
}


/**
 * Fungsi deleteToken untuk menghapus token pengguna.
 * @param {number} id - ID token yang akan dihapus.
 * @param {string} userId - ID pengguna dengan UUID.
 * @returns {Object|null} Mengembalikan objek yang berisi status, pesan,
 * dan data jika berhasil, atau null jika gagal.
 */
export async function deleteToken(id: number, userId: string){
    const deleteToken = await prisma.token.delete({
        where: {
            id: id,
            userId: userId
        }
    })
    if(deleteToken){
        return {status: 200, message: "Success delete token", data: deleteToken}
    }else {
        return null;
    }
}



/**
 * Fungsi getDataBot untuk mendapatkan daftar bot berdasarkan userId.
 * @param {string} userId - ID pengguna dengan UUID.
 * @returns {Array|null} Mengembalikan array bot jika ditemukan,
 * atau null jika tidak.
 */
export async function getDataBot(userId: string){
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
 * @param {string} userId - ID pengguna dengan UUID.
 * @returns {Object|null} Mengembalikan objek status bot jika ditemukan,
 * atau null jika tidak.
 */
export async function getBotStatusFromWeb(userId: string){
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
 * @param {string} userId - ID pengguna dengan UUID.
 * @param {string} token - Token pengguna.
 * @returns {string|null} Mengembalikan status bot jika
 * token valid dan ditemukan, 'Method Not Allowed' jika token tidak valid, 
 * atau null jika tidak ditemukan.
 */
export async function getBotStatusPublicAPI(userId: string, token: string){
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
        return 'Wrong Token!';
    }
    if(statusUserBot){
        return statusUserBot?.status_bot;
    }else {
        return null;
    }
}



/**
 * Fungsi deleteListBot untuk menghapus bot dari daftar berdasarkan id dan userId.
 * @param {number} id - ID bot.
 * @param {string} userId - ID pengguna dengan UUID.
 * @returns {Object|null} Mengembalikan objek bot jika berhasil dihapus,
 * atau null jika tidak.
 */
export async function deleteListBot(id: number, userId: string){
    const listBot = await prisma.listBot.delete({
        where: {
            id_userId: {
                id: id,
                userId: userId
            }
        }
    })
    if(listBot){
        return listBot;
    }else {
        return null;
    }
}


/**
 * Fungsi updateStatusBot untuk memperbarui status bot pengguna.
 * @param {string} id - ID pengguna.
 * @param {string} status - Status bot baru.
 * @returns {Object|null} Mengembalikan objek pengguna jika berhasil diperbarui,
 * atau null jika tidak.
 */
export async function updateStatusBot(id: string, status: string){
    const updateStatus = await prisma.user.update({
        where:{
            id: id
        },
        data:{
            status_bot: status
        }
    })
    if(updateStatus){
        return updateStatus;
    }else {
        return null;
    }
}

