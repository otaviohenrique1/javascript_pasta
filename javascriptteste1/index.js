function calculaMedida(a, b, c) {
    return (parseFloat(a)*parseFloat(b))/parseFloat(c);
}
const teorema_de_pitagoras = (cateto1, cateto2) => Math.sqrt((cateto1**2) + (cateto2**2)); // Teorema de Pitágoras -> h**2=c1**2+c2**2
// -----------Navio -> Nelson-class battleship-----------
// a-b
// c-x
// console.log('Comprimento ->' ,(760*1)/280);
// console.log('Altura -> ', (277*1)/91);
// console.log('Largura -> ', (120*5)/43);
// console.log((280*1)/350);
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
const calculaMedida1 = (x) => {
    let r1 = (200*x)/165;
    let r2 = `${x} -> ${r1.toFixed(2)} -> ${Math.round(r1)}`;
    return r2;
};
// console.log(calculaMedida1(4));
// console.log(teorema_de_pitagoras(11, 19));
// console.log((21*7)/12);
// console.log((165*20)/260);
const calculaTamanhoRoda2 = (x) => {
    let r1 = (24*x)/44;
    let r2 = (200*r1)/165;
    let r3 = `Roda 2 -> ${x} -> ${r1.toFixed(2)} -> ${r2.toFixed(2)} -> ${Math.round(r2)}`;
    // let r3 = `Roda 2 -> ${r1.toFixed(2)} -> ${Math.round(r1)} -> ${r2.toFixed(2)} -> ${Math.round(r2)}`;
    return r3;
};
// console.log(calculaTamanhoRoda2(1)); // Roda 2
const calculaTamanhoRoda2_2 = (x) => {
    let r1 = (165*x)/165;
    let r2 = (200*r1)/165;
    let r3 = `Roda 2 -> ${x} -> ${r1.toFixed(2)} -> ${r2.toFixed(2)} -> ${Math.round(r2)}`;
    return r3;
};
console.log(calculaTamanhoRoda2_2(15));
// -------------------------------------------------------