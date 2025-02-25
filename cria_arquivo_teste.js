const fs = require('fs');
const path = require('path');

const dados_lista_exemplo = [
    { nome: "CC00", descricao: "Comprimento casco", campoa: 760, campob: 90, campoc: 280, resultado: 244 },
    { nome: "CC01", descricao: "Comprimento casco", campoa: 760, campob: 35, campoc: 280, resultado: 95},
    { nome: "CC02", descricao: "Comprimento casco", campoa: 760, campob: 32, campoc: 280, resultado: 87},
    { nome: "CC03", descricao: "Comprimento casco", campoa: 760, campob: 47, campoc: 280, resultado: 128},
    { nome: "CC04", descricao: "Comprimento casco", campoa: 760, campob: 5, campoc: 280, resultado: 138},
    { nome: "CC05", descricao: "Comprimento casco", campoa: 760, campob: 110, campoc: 280, resultado: 299},
    { nome: "CC06", descricao: "Comprimento casco", campoa: 760, campob: 125, campoc: 280, resultado: 339},
    { nome: "CC07", descricao: "Comprimento casco", campoa: 760, campob: 76, campoc: 280, resultado: 206},
    { nome: "CC08", descricao: "Comprimento casco", campoa: 760, campob: 72, campoc: 280, resultado: 195},
    { nome: "CC09", descricao: "Comprimento casco", campoa: 760, campob: 62, campoc: 280, resultado: 168},
    { nome: "CC10", descricao: "Comprimento casco", campoa: 760, campob: 60, campoc: 280, resultado: 163},
    { nome: "CC11", descricao: "Comprimento casco", campoa: 760, campob: 121, campoc: 280, resultado: 329},
    { nome: "CC12", descricao: "Comprimento casco", campoa: 760, campob: 103, campoc: 280, resultado: 280},
    { nome: "CC13", descricao: "Comprimento casco", campoa: 760, campob: 4, campoc: 280, resultado: 11},
    { nome: "CC14", descricao: "Comprimento casco", campoa: 760, campob: 11, campoc: 280, resultado: 30},
    { nome: "CC15", descricao: "Comprimento casco", campoa: 760, campob: 7, campoc: 280, resultado: 19},
    { nome: "CC16", descricao: "Comprimento casco", campoa: 760, campob: 26, campoc: 280, resultado: 71},
    { nome: "CC17", descricao: "Comprimento casco", campoa: 760, campob: 4, campoc: 280, resultado: 11},
    { nome: "CC18", descricao: "Comprimento casco", campoa: 760, campob: 12, campoc: 280, resultado: 33},
    { nome: "CC19", descricao: "Comprimento casco", campoa: 760, campob: 3, campoc: 280, resultado: 8},
    { nome: "CC20", descricao: "Comprimento casco", campoa: 760, campob: 8, campoc: 280, resultado: 22},
    { nome: "CC21", descricao: "Comprimento casco", campoa: 760, campob: 92, campoc: 280, resultado: 250},
    { nome: "CC22", descricao: "Comprimento casco", campoa: 760, campob: 5, campoc: 280, resultado: 14},
    { nome: "CC23", descricao: "Comprimento casco", campoa: 760, campob: 11, campoc: 280, resultado: 30},
    { nome: "CC24", descricao: "Comprimento casco", campoa: 760, campob: 3, campoc: 280, resultado: 8},
    { nome: "CC25", descricao: "Comprimento casco", campoa: 760, campob: 10, campoc: 280, resultado: 27},
    { nome: "CC26", descricao: "Comprimento casco", campoa: 760, campob: 159, campoc: 280, resultado: 432},
    { nome: "CC27", descricao: "Comprimento casco", campoa: 760, campob: 170, campoc: 280, resultado: 461},
    { nome: "CC28", descricao: "Comprimento casco", campoa: 760, campob: 211, campoc: 280, resultado: 573},
    { nome: "CC29", descricao: "Comprimento casco", campoa: 760, campob: 215, campoc: 280, resultado: 584},
    { nome: "CC30", descricao: "Comprimento casco", campoa: 760, campob: 226, campoc: 280, resultado: 613},
    { nome: "CC31", descricao: "Comprimento casco", campoa: 760, campob: 236, campoc: 280, resultado: 641}
];

let jsonTeste = JSON.stringify(dados_lista_exemplo);

fs.writeFile(path.join(__dirname, '/data_app/teste.json'), jsonTeste, (erro) => {
    if(erro) {
        console.log(erro);
    } else {
        console.log("Arquivo salvo!");
    }
});