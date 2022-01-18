// console.log(`tes npm`);

const validator = require('validator');
const email1 = validator.isEmail('if@upnyk.ac.id');
const email2 = validator.isEmail('if@upnyk');

// console.log(email1, email2);


// challenge
// masukkan email ke file json
const fs = require('fs');
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// simpan data

// emailJson = [{}];
// convertJson = JSON.stringify(emailTes);
// console.
// validasiData(email1);

rl.question('Masukkan email anda : ', (emailInput) => {
    // validasi data
    const hasilValidasi = validator.isEmail(emailInput);
    if (hasilValidasi) {
        validasiData(emailInput);
    } else {
        console.log('Email tidak valid');
    }
    rl.close();
});

let validasiData = (emailTes) => {
    let emailJson = {
        emailTes
    };
    let convertJson = JSON.stringify(emailJson);
    // emailJson.push(convertJson);
    fs.writeFile('./dataEmail.json', convertJson, (err) => {
        console.log(err);
    });
};