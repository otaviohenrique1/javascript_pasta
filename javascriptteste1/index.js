function calculaMedida(a, b, c) {
    return (parseFloat(a)*parseFloat(b))/parseFloat(c);
}
const teorema_de_pitagoras = (cateto1, cateto2) => Math.sqrt((cateto1**2) + (cateto2**2)); // Teorema de Pitágoras -> h**2=c1**2+c2**2
// -----------Navio -> Nelson-class battleship-----------
// a-b
// c-x
// console.log('Comprimento ->' ,(760*7)/280);
// console.log('Altura -> ', (277*4)/91);
// console.log('Largura -> ', (120*5)/43);
// console.log((280*1)/350);
// console.log((128*280)/43);
// console.log((280*19)/834);
const calculaMedida_Bateria_8_Canhoes = (x) => {
    let r1 = (7*x)/50;
    let r2 = (19*r1)/7;
    let r3 = `Bateria 8 canhoes -> ${x} -> ${r1.toFixed(2)} -> ${r2.toFixed(2)}`;
    return r3;
};
console.log(calculaMedida_Bateria_8_Canhoes(15));
// console.log(`Comprimento -> ${calculaMedida(760, 4.5, 280)}`);
// console.log(`Altura -> ${calculaMedida(277, 2.5, 91)}`);
// console.log(`Largura -> ${calculaMedida(120, 2.5, 43)}`);
// console.log(`Perimetro do circulo -> P35 -> 11 -> ${2*Math.PI*5.5}`);
// console.log(`Perimetro do circulo -> P36 -> 12 -> ${2*Math.PI*6}`);
// console.log(`Perimetro do circulo -> ${2*Math.PI*5.5}`);
// P=2*pi*r
// console.log((45*4)/20);

// -------------------------------------------------------
// -----------Panzer 3-----------
/*
    a-c
    b-x
    x=(b*c)/a
*/
// console.log((200*40)/163);
// console.log((10*4.5)/18.5, '-> Roda 1'); // Roda 1
// console.log((24*2)/43.5, '-> Roda 2'); // Roda 2
// console.log((23*8)/40, '-> Roda 3'); // Roda 3
// console.log((17*1)/31, '-> Roda 4'); // Roda 4
// console.log((200*43)/163);
// console.log((200*1520)/5560);
// console.log((163*68)/260);
// console.log((200*68)/260);
// console.log((163*4)/195);
// console.log(teorema_de_pitagoras(4, 12));
// -------------------------------------------------------
// -----------SK-105 Kurassier-----------
// console.log((200*23)/123);
// -------------------------------------------------------
// -----------Spapanzer Luchs-----------
// console.log((250*37)/193);
// -------------------------------------------------------
// -----------T-34/76-----------
// console.log((200*2)/165);
const calculaMedida_T34_76 = (x) => {
    let r1 = (200*x)/165;
    let r2 = `Calcula medida -> ${x} -> ${r1.toFixed(2)} -> ${Math.round(r1)}`;
    return r2;
};
// console.log(teorema_de_pitagoras(11, 19));
// console.log((21*7)/12);
// console.log((165*20)/260);
const calculaTamanhoRoda3_T34_76 = (x) => {
    let r1 = (17*x)/49;
    let r2 = (200*r1)/165;
    let r3 = `Roda 3 -> ${x} -> ${r1.toFixed(2)} -> ${r2.toFixed(2)} -> ${Math.round(r2)}`;
    return r3;
};
const calculaTamanhoRoda2_T34_76 = (x) => {
    let r1 = (24*x)/44;
    let r2 = (200*r1)/165;
    let r3 = `Roda 2 -> ${x} -> ${r1.toFixed(2)} -> ${r2.toFixed(2)} -> ${Math.round(r2)}`;
    // let r3 = `Roda 2 -> ${r1.toFixed(2)} -> ${Math.round(r1)} -> ${r2.toFixed(2)} -> ${Math.round(r2)}`;
    return r3;
};
const calculaTamanhoRoda1_T34_76 = (x) => {
    let r1 = (14*x)/27;
    let r2 = (200*r1)/165;
    let r3 = `Roda 1 -> ${x} -> ${r1.toFixed(2)} -> ${r2.toFixed(2)} -> ${Math.round(r2)}`;
    return r3;
};
const calculaTamanhoChassi_T34_76 = (x) => {
    /* Imagem de cima */
    let r1 = (165*x)/165;
    let r2 = (200*r1)/165;
    let r3 = `Chassi -> ${x} -> ${r1.toFixed(2)} -> ${r2.toFixed(2)} -> ${Math.round(r2)}`;
    return r3;
};
const calculaTamanhoChassi_2_T34_76 = (x) => {
    /* Imagem pequena*/
    let r1 = (165*x)/47;
    let r2 = (200*r1)/165;
    let r3 = `Chassi -> ${x} -> ${r1.toFixed(2)} -> ${r2.toFixed(2)} -> ${Math.round(r2)}`;
    return r3;
};
// console.log(calculaMedida_T34_76(49));
// console.log(calculaTamanhoChassi_2_T34_76(5));
// console.log(calculaTamanhoChassi_T34_76(14));
// console.log(calculaTamanhoRoda1_T34_76(6));
// console.log(calculaTamanhoRoda2_T34_76(3));
// console.log(calculaTamanhoRoda3_T34_76(6));


// -------------------------------------------------------