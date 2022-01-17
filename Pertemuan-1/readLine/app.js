const readLine = require('readline');
const fs = require('fs');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('Masukkan Email Anda : ', (answer) => {
//     console.log(`Terimakasih, Pemberitahuan terbaru akan dikirimkan ke ${answer}`);
//     rl.close();
// });


// make multi question

// const readLineInterface = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

rl.question('Masukkan Nama Anda : ', (answerSatu) => {
    rl.question('Masukkan Umur Anda : ', (answerDua) => {
        console.log(`Pertanyaan Selesai`);
        inputJson(answerSatu, answerDua);
        rl.close();
    });



})

let inputJson = (nama, umur) => {
    let dataJson = [{
        "namaUser": nama,
        "umurUser": umur
    }];

    let hasilJson = JSON.stringify(dataJson);

    fs.writeFile('./dataUser.json', hasilJson, (err) => {
        console.log(err);
    });
}