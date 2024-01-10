// import { PrismaClient } from "@prisma/client";
// import cron from 'node-cron';

// const prisma = new PrismaClient();

// // Fungsi untuk memeriksa dan memperbarui status pengguna
// export async function checkAndDeactivateUsers() {
//   const now = new Date();

//   // Temukan semua pengguna yang sudah kadaluarsa dan masih aktif
//   const users = await prisma.user.findMany({
//     where: {
//       expireDate: {
//         lt: now,
//       },
//       status: 'Aktif',
//     },
//   });

//   // Perbarui status pengguna menjadi 'nonaktif'
//   for (const user of users) {
//     await prisma.user.update({
//       where: {
//         id: user.id,
//       },
//       data: {
//         status: 'Nonaktif',
//       },
//     });
//   }
// }

// // Fungsi untuk menjalankan tugas terjadwal
// export function startCronJob() {
//   // Jalankan fungsi setiap detik
//   cron.schedule('* * * * * *', checkAndDeactivateUsers);
//   console.log('Status bot is running...');
// }
