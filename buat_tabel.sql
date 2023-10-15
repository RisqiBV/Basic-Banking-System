CREATE TABLE IF NOT EXISTS nasabah (
    
    nik SERIAL PRIMARY KEY,
    nama VARCHAR(255),
    alamat VARCHAR(255),

);

CREATE TABLE IF NOT EXISTS akun (
    
    norek SERIAL PRIMARY KEY,
    mutasi FLOAT(50),
    saldo FLOAT(50),
    
);

CREATE TABLE IF NOT EXISTS transaksi (
    
    id SERIAL PRIMARY KEY,
    jenis_transaksi VARCHAR(8),
    nominal FLOAT(50),
    
);