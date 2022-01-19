const express = require('express');
const expressLayouts = require('express-ejs-layouts');

// import local modules
const {
    getMahasiswa,
    simpanMahasiswa,
    tambahMahasiswa,
    ambilMahasiswa,
    ubahMahasiswa,
    hapusMahasiswa
} = require('./utils/mhs');

const app = express();
const port = 3000;
console.log(3000);


app.set('view engine', 'ejs');

app.use(expressLayouts);

app.use(express.static('public'));
// middleware encoding dari form
app.use(express.urlencoded());



app.get('/', (req, res) => {

    const data = {
        title: 'Halaman Home Layout',
        layout: 'layouts/main-layout'
    }

    res.render('index', data);
});

app.get('/jurusan', (req, res) => {
    const data = {
        title: 'Halaman Jurusan Layout',
        layout: 'layouts/main-layout'

    }
    res.render('jurusan', data);
});

app.get('/mahasiswa', (req, res) => {
    const mahasiswa = getMahasiswa();
    const data = {
        title: 'Halaman Mahasiswa Layout',
        layout: 'layouts/main-layout',
        mahasiswa
    }
    res.render('mahasiswa', data);
});


// tambah mahasiswa
app.get('/mahasiswa/tambah', (req, res) => {
    res.render('mahasiswa-tambah', {
        layout: 'layouts/main-layout',
        title: 'Input Mahasiswa'
    })
})

// simpan mahasiswa
app.post('/mahasiswa', (req, res) => {
    tambahMahasiswa(req.body);
    res.redirect('/mahasiswa');
})

// update mahasiswa
app.get('/mahasiswa/ubah/:nim', (req, res) => {
    const mhs = ambilMahasiswa(req.params.nim);
    // console.log(mhs);
    res.render('mahasiswa-ubah', {
        layout: 'layouts/main-layout',
        title: 'Update Mahasiswa',
        mhs
    })
});

// simpan mahasiswa hasil update
app.post('/mahasiswa/ubah', (req, res) => {
    ubahMahasiswa(req.body);
    res.redirect('/mahasiswa');
});

// hapus mahasiswa
app.get('/mahasiswa/hapus/:nim', (req, res) => {
    const mhs = ambilMahasiswa(req.params.nim);

    if (!mhs) {
        res.status(404);
        res.send('<h1>404</h1>')
    } else {
        hapusMahasiswa(req.params.nim);
    }
    res.redirect('/mahasiswa');
})

app.get('/praktikum/:id/:kategori/:value', (req, res) => {
    res.send(`Params = ${req.params.id} , ${req.params.kategori}, ${req.params.value}`);
});

app.get('/praktikum/', (req, res) => {
    res.send(`Query = ${req.query.nama} , ${req.query.jurusan}`);
    console.log(3000);
});

app.use('/', (req, res) => {
    res.status(404);
    res.send(`<h1>404</h1>`)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})