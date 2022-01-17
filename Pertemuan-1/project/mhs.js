function printName(name) {
    return `Hai, nama saya ${name}`;
}

const printUmur = (umur) => {
    return `Hai, umur saya ${umur}`;
}

module.exports = {
    cekNama: printName,
    cekUmur: printUmur
};