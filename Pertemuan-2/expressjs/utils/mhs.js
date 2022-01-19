const fs = require('fs');

//buat folder jika belum ada
// if (!fs.existsSync(dirPath)) {
//     fs.mkdirSync(dirPath)
// }

//Buat file jika belum ada
const filePath = './data/mahasiswa.json';
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8');
}


const getMahasiswa = () => {
    const fileBuffer = fs.readFileSync(filePath, 'utf-8');
    const mahasiswa = JSON.parse(fileBuffer);
    return mahasiswa;
}



// tambah mahasiswa
const tambahMahasiswa = (mhs) => {
    const mahasiswa = getMahasiswa();
    mahasiswa.push(mhs);
    simpanMahasiswa(mahasiswa)
}

// simpan mahasiswa
const simpanMahasiswa = (mahasiswa) => {
    fs.writeFileSync(filePath, JSON.stringify(mahasiswa));
}



// update mahasiswa
const ambilMahasiswa = (nim) => {
    const mahasiswa = getMahasiswa();
    const mhs = mahasiswa.find((mhs) => mhs.nim === nim);
    return mhs;
}


// const ubah mahasiswa
const ubahMahasiswa = (newMhs) => {
    const mahasiswa = getMahasiswa();

    const newMahasiswa = mahasiswa.filter((mhs) => mhs.nim === newMhs.old_nim);
    delete newMhs.old_nim;

    newMahasiswa.push(newMhs);
    simpanMahasiswa(newMahasiswa);
}

// hapus mahasiswa
const hapusMahasiswa = (nim) => {
    const mahasiswa = getMahasiswa();
    const newMahasiswa = mahasiswa.filter((mhs) => mhs.nim !== nim)
    simpanMahasiswa(newMahasiswa);
}

module.exports = {
    getMahasiswa,
    simpanMahasiswa,
    tambahMahasiswa,
    ambilMahasiswa,
    ubahMahasiswa,
    hapusMahasiswa
}