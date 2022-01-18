const http = require('http');
const fs = require('fs');

const port = 8000;

http.createServer((req, res) => {

    res.writeHead(200, {
        'content-type': 'text/html'
    });

    // const url = req.url;

    // res.write('Membuat Web Server');
    // switch (url) {
    //     case '/mahasiswa':
    //         res.write('Halaman Mahasiswa');
    //         break;
    //     case '/jurusan':
    //         res.write('Halaman Jurusan');
    //         break;
    //     default:
    //         res.write('Halaman Home');
    //         break;
    // }

    // call html file
    // fs.readFile('./index.html', (err, data) => {
    //     if (err) {
    //         res.writeHead(400);
    //         res.write('Error : File Not Found ')
    //     } else {
    //         res.write(data);
    //     }
    //     res.end();
    // })

    // res.end();

    // call html bootstrap
    const url = req.url;
    switch (url) {
        case '/mahasiswa':
            link('./indexBootstrapMahasiswa.html', res);
            // fs.readFile('./indexBootstrapMahasiswa.html', (err, data) => {
            //     if (err) {
            //         res.writeHead(400);
            //         res.write('Error : File Not Found ')
            //     } else {
            //         res.write(data);
            //     }
            //     res.end();
            // });
            break;
        case '/jurusan':
            link('./indexBootstrapJurusan.html', res);
            // fs.readFile('./indexBootstrapJurusan.html', (err, data) => {
            //     if (err) {
            //         res.writeHead(400);
            //         res.write('Error : File Not Found ')
            //     } else {
            //         res.write(data);
            //     }
            //     res.end();
            // });
            break;
        default:
            link('./indexBootstrap.html', res);
            // fs.readFile('./indexBootstrap.html', (err, data) => {
            //     if (err) {
            //         res.writeHead(400);
            //         res.write('Error : File Not Found ')
            //     } else {
            //         res.write(data);
            //     }
            //     res.end();
            // });

    }

}).listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});


const link = (link, res) => {
    fs.readFile(link, (err, data) => {
        if (err) {
            res.writeHead(400);
            res.write('Error : File Not Found ')
        } else {
            res.write(data);
        }
        res.end();
    });
}