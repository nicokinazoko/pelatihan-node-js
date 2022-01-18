const express = require('express');

const app = express();
const port = 3000;
console.log(3000);


app.set('view engine', 'ejs');




app.get('/', (req, res) => {
    // res.sendFile('./indexBootstrap.html', {
    //     root: __dirname
    // });
    res.render('indexBootstrap');
});

app.get('/jurusan', (req, res) => {
    // res.sendFile('./indexBootstrapJurusan.html', {
    //     root: __dirname
    // });
    res.render('indexBootstrapJurusan');
});

app.get('/mahasiswa', (req, res) => {
    // res.sendFile('./indexBootstrapMahasiswa.html', {
    //     root: __dirname
    // });
    res.render('indexBootstrapMahasiswa');
});

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