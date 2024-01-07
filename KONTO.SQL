
-- Penyisipan 20 data ke dalam tabel Member
INSERT INTO dbo.Member (
    Member_ID,
    NO_KTP,
    Nama,
    Jenis_Kelamin,
    Alamat,
    Kelurahan,
    Kecamatan,
    Kabupaten_Kota,
    Provinsi,
    Tanggal_Daftar_Member,
    Tanggal_Kadaluarsa_Member,
    No_Kontak,
    Jenis_MemberJenis_Member_ID
)
VALUES
  ('1', '1234567890', 'John Doe', 'Pria', 'Jl. Contoh No. 123', 'Kelurahan1', 'Kecamatan1', 'Kabupaten1', 'Provinsi1', '2023-01-01', '2024-01-01', '081234567890', 1),
  ('2', '9876543210', 'Jane Doe', 'Perempuan', 'Jl. Contoh No. 456', 'Kelurahan2', 'Kecamatan2', 'Kabupaten2', 'Provinsi2', '2023-01-02', '2024-02-01', '087654321098', 2),
  ('3', '1111222233', 'Alice', 'Perempuan', 'Jl. Kenangan No. 789', 'Kelurahan3', 'Kecamatan3', 'Kabupaten3', 'Provinsi3', '2023-01-03', '2024-03-01', '081112223334', 3),
  ('4', '4444555566', 'Bob', 'Pria', 'Jl. Sejahtera No. 101', 'Kelurahan4', 'Kecamatan4', 'Kabupaten4', 'Provinsi4', '2023-01-04', '2024-04-01', '088877766655', 4),
  ('5', '5555666677', 'Eve', 'Perempuan', 'Jl. Damai No. 202', 'Kelurahan5', 'Kecamatan5', 'Kabupaten5', 'Provinsi5', '2023-01-05', '2024-05-01', '099988877766', 1),
  ('6', '6666777788', 'Frank', 'Pria', 'Jl. Harmoni No. 303', 'Kelurahan6', 'Kecamatan6', 'Kabupaten6', 'Provinsi6', '2023-01-06', '2024-06-01', '066677788899', 2),
  ('7', '7777888899', 'Grace', 'Perempuan', 'Jl. Indah No. 404', 'Kelurahan7', 'Kecamatan7', 'Kabupaten7', 'Provinsi7', '2023-01-07', '2024-07-01', '077788899900', 3),
  ('8', '8888999000', 'Harry', 'Pria', 'Jl. Bahagia No. 505', 'Kelurahan8', 'Kecamatan8', 'Kabupaten8', 'Provinsi8', '2023-01-08', '2024-08-01', '088899900011', 4),
  ('9', '9999000011', 'Irene', 'Perempuan', 'Jl. Senang No. 606', 'Kelurahan9', 'Kecamatan9', 'Kabupaten9', 'Provinsi9', '2023-01-09', '2024-09-01', '099900001122', 1),
  ('10', '1011121314', 'James', 'Pria', 'Jl. Makmur No. 707', 'Kelurahan10', 'Kecamatan10', 'Kabupaten10', 'Provinsi10', '2023-01-10', '2024-10-01', '101112131415', 2),
  ('11', '1112131415', 'Kelly', 'Perempuan', 'Jl. Bahagia No. 808', 'Kelurahan11', 'Kecamatan11', 'Kabupaten11', 'Provinsi11', '2023-01-11', '2024-11-01', '111213141516', 3),
  ('12', '1213141516', 'Larry', 'Pria', 'Jl. Damai No. 909', 'Kelurahan12', 'Kecamatan12', 'Kabupaten12', 'Provinsi12', '2023-01-12', '2024-12-01', '121314151617', 4),
  ('13', '1314151617', 'Mia', 'Perempuan', 'Jl. Harmoni No. 1010', 'Kelurahan13', 'Kecamatan13', 'Kabupaten13', 'Provinsi13', '2023-01-13', '2025-01-01', '131415161718', 1),
  ('14', '1415161718', 'Nathan', 'Pria', 'Jl. Indah No. 1111', 'Kelurahan14', 'Kecamatan14', 'Kabupaten14', 'Provinsi14', '2023-01-14', '2025-02-01', '141516171819', 2),
  ('15', '1516171819', 'Olivia', 'Perempuan', 'Jl. Makmur No. 1212', 'Kelurahan15', 'Kecamatan15', 'Kabupaten15', 'Provinsi15', '2023-01-15', '2025-03-01', '151617181920', 3),
  ('16', '1617181920', 'Peter', 'Pria', 'Jl. Senang No. 1313', 'Kelurahan16', 'Kecamatan16', 'Kabupaten16', 'Provinsi16', '2023-01-16', '2025-04-01', '161718192021', 4),
  ('17', '1718192021', 'Quinn', 'Perempuan', 'Jl. Bahagia No. 1414', 'Kelurahan17', 'Kecamatan17', 'Kabupaten17', 'Provinsi17', '2023-01-17', '2025-05-01', '171819202223', 1),
  ('18', '1819202122', 'Ryan', 'Pria', 'Jl. Damai No. 1515', 'Kelurahan18', 'Kecamatan18', 'Kabupaten18', 'Provinsi18', '2023-01-18', '2025-06-01', '181920212224', 2),
  ('19', '1920212223', 'Samantha', 'Perempuan', 'Jl. Harmoni No. 1616', 'Kelurahan19', 'Kecamatan19', 'Kabupaten19', 'Provinsi19', '2023-01-19', '2025-07-01', '192021222325', 3),
  ('20', '2021222324', 'Timothy', 'Pria', 'Jl. Indah No. 1717', 'Kelurahan20', 'Kecamatan20', 'Kabupaten20', 'Provinsi20', '2023-01-20', '2025-08-01', '202122232425', 4);



CREATE PROCEDURE TambahRincianPenjualan
    @No_Transaksi NVARCHAR(255),
    @Produk_ID INT,
    @Kuantitas MONEY
AS
BEGIN
    -- Cek apakah No_Transaksi tersedia di tabel Penjualan
    IF NOT EXISTS (SELECT 1 FROM Penjualan WHERE No_Transaksi = @No_Transaksi)
    BEGIN
        PRINT 'No_Transaksi tidak ditemukan.';
        RETURN;
    END

    -- Cek apakah Produk_ID tersedia di tabel Produk
    IF NOT EXISTS (SELECT 1 FROM Produk WHERE Produk_ID = @Produk_ID)
    BEGIN
        PRINT 'Produk_ID tidak ditemukan.';
        RETURN;
    END

    -- Tentukan Rincian_ID dengan format INV-YYYYMMDDZZZZ-AAAA
    DECLARE @Rincian_ID NVARCHAR(255);
    DECLARE @LastRincianNumber INT;

	-- Tentukan tanggal_transaksi
DECLARE @Tanggal_Transaksi DATETIME;

-- Ambil tanggal_transaksi dari tabel Penjualan berdasarkan No_Transaksi
	SELECT @Tanggal_Transaksi = Tanggal_Tranksaksi
	FROM Penjualan
	WHERE No_Transaksi = @No_Transaksi;


-- Ambil nomor rincian terakhir pada tanggal berjalan
SELECT @LastRincianNumber = COALESCE(MAX(CAST(RIGHT(Rincian_ID, 4) AS INT)), 0) + 1
FROM Rincian_Penjualan RP
JOIN Penjualan P ON RP.PenjualanNo_Transaksi = P.No_Transaksi
WHERE CONVERT(DATE, P.Tanggal_Tranksaksi) = CONVERT(DATE, GETDATE());


    -- Inisialisasi Rincian_ID sebelum masuk ke dalam loop
	--INV-202401010002
    SET @Rincian_ID = 'INV-' + CONVERT(VARCHAR(8), GETDATE(), 112) + RIGHT('0000' + CAST(@LastRincianNumber AS VARCHAR), 4);

    -- Loop untuk mencoba nomor rincian hingga mendapatkan yang belum digunakan
    DECLARE @Counter INT = 0;

    WHILE EXISTS (SELECT 1 FROM Rincian_Penjualan WHERE Rincian_ID = @Rincian_ID)
    BEGIN
        SET @Counter = @Counter + 1;
        SET @LastRincianNumber = @LastRincianNumber + 1;

        -- Format Rincian_ID
		--INV-202401010002
        SET @Rincian_ID = 'INV-' + CONVERT(VARCHAR(8), GETDATE(), 112) + RIGHT('0000' + CAST(@LastRincianNumber AS VARCHAR), 4);

        -- Exit loop jika sudah mencoba sejumlah maksimal (misalnya, 100 kali)
        IF @Counter > 100
        BEGIN
            PRINT 'Gagal menambahkan rincian penjualan. Coba lagi nanti.';
            RETURN;
        END;
    END;

    -- Tentukan Harga_Satuan dari tabel Produk
    DECLARE @Harga_Satuan INT;
    SELECT @Harga_Satuan = Harga_Satuan FROM Produk WHERE Produk_ID = @Produk_ID;

-- Tentukan Diskon_Produk berdasarkan tanggal yang berjalan
DECLARE @Diskon_Produk MONEY;  -- Ubah tipe data menjadi MONEY sesuai kebutuhan
EXEC NominalDiskonProcedure @Produk_ID, GETDATE, @Diskon_Produk OUTPUT;

-- Tentukan Total_Biaya_per_Produk
DECLARE @Total_Biaya_Per_Produk INT;
SET @Total_Biaya_Per_Produk = @Harga_Satuan * @Kuantitas - @Diskon_Produk;

;

    -- Tentukan Total_Biaya_per_Produk
    DECLARE @TotalBiayaPerProduk INT;
    SET @TotalBiayaPerProduk = @Harga_Satuan * @Kuantitas - @Diskon_Produk;

    -- Insert data ke tabel Rincian_Penjualan
    INSERT INTO Rincian_Penjualan (Rincian_ID, PenjualanNo_Transaksi, ProdukProduk_ID, Kuantitas_Penjualan, Harga_Satuan, Diskon_ProdukDiskon_Produk_ID, Total_Biaya_Per_Produk)
    VALUES (@Rincian_ID, @No_Transaksi, @Produk_ID, @Kuantitas, @Harga_Satuan, @Diskon_Produk, @Total_Biaya_Per_Produk);

    -- Update Total_Pembayaran di tabel Penjualan
    UPDATE Penjualan
    SET Total_Pembayaran = Total_Pembayaran + @Total_Biaya_Per_Produk
    WHERE No_Transaksi = @No_Transaksi;

    -- Menampilkan pesan sukses atau Rincian_ID
    PRINT 'Rincian penjualan berhasil ditambahkan. Rincian_ID: ' + @Rincian_ID;
END;

exec TambahRincianPenjualan @No_Transaksi ='INV-202401010008',
    @Produk_ID = 2,
    @Kuantitas = 70


	select * from Penjualan
	select * from Rincian_Penjualan
	SELECT * FROM Diskon
	SELECT * FROM Diskon_Produk
DROP PROCEDURE TambahRincianPenjualan