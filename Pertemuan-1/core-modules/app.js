const fs = require('fs');
const {
    type
} = require('os');


// create file
// fs.writeFile('./mhs.txt', "Halo mhs", (err) => {
//     console.log(err);
// })


// read file
// fs.readFile('./mhs.txt', "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// // insert data json

let dataJson = [{
    "nama": "Nico",
    "umur": 15
}];

let dataJsonInput = JSON.stringify(dataJson);
// let dataJsonInput =

fs.writeFile("./dataMahasiswa.json", dataJsonInput, (err) => {
    console.log(err);
})

let pushData = [{
    "nama": "Nico Satu",
    "umur": 16
}];

// read json 
fs.readFile('./dataMahasiswa.json', 'utf-8', (err, data) => {
    if (err) throw err;
    const dataDiri = JSON.parse(data);
    // console.log(dataDiri);
    // console.log(dataDiri);
    dataDiri.push(pushData);
    simpanData(dataDiri);
    // console.log(dataDiri);
})

// let dataJsonInputBaru = JSON.stringify(pushData);

// fs.writeFile('./dataMahasiswa.json', dataJsonInputBaru, (err) => {
//     console.log(err);
// })

let simpanData = (dataInput) => {
    let dataJsonInputBaru = JSON.stringify(dataInput);
    fs.writeFile('./dataMahasiswa.json', dataJsonInputBaru, (err) => {
        console.log(err);
    })
    // console.log(dataJsonInputBaru);
}