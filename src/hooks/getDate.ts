/**
 * Fungsi ini mengembalikan tanggal dan waktu saat ini dalam format "HH:MM:SS WIB - DD/MM/YYYY".
 * 
 * @returns {string} String yang berisi tanggal dan waktu saat ini.
 */

const getDate = () => {
    let date = new Date();
    date.setHours(date.getHours() + 7); // Menambahkan 7 jam untuk WIB.
    let waktu = date.getHours().toString().padStart(2, '0') + ":" + 
                date.getMinutes().toString().padStart(2, '0') + ":" + 
                date.getSeconds().toString().padStart(2, '0');
    let tanggal = date.getDate();
    let bulan = date.getMonth() + 1; // Bulan dimulai dari 0, jadi kita tambahkan 1.
    let tahun = date.getFullYear();

    let allData = `${waktu} WIB - ${tanggal}/${bulan}/${tahun}`;

    return {
        allData: allData,
        waktu: waktu,
        tanggal: tanggal,
        bulan: bulan,
        tahun: tahun
    };
}
export default getDate;