console.log('A01', '->', 3, '->', ((760*3)/1018).toFixed(2));
console.log('A02', '->', 1.5, '->', ((760*1.5)/1018).toFixed(2));
console.log('A03', '->', 2, '->', ((760*2)/1018).toFixed(2));
console.log('A04', '->', 6, '->', ((760*6)/1018).toFixed(2));
console.log('A05', '->', 2, '->', ((760*2)/1018).toFixed(2));
console.log('A06', '->', 6, '->', ((760*6)/1018).toFixed(2));
console.log('A07', '->', 3, '->', ((760*3)/1018).toFixed(2));
console.log('A08', '->', 4, '->', ((760*4)/1018).toFixed(2));
console.log('A09', '->', 2, '->', ((760*2)/1018).toFixed(2));
console.log('A10', '->', 10, '->', ((760*10)/1018).toFixed(2));
console.log('A11', '->', 1.5, '->', ((760*1.5)/1018).toFixed(2));
console.log('A12', '->', 1.5, '->', ((760*1.5)/1018).toFixed(2));
console.log('A13', '->', 9, '->', ((760*9)/1018).toFixed(2));
console.log('A14', '->', 12, '->', ((760*12)/1018).toFixed(2));
console.log('A15', '->', 3, '->', ((760*3)/1018).toFixed(2));
console.log('-----------------------------------------------------------');

const medidas = [
    {medida: 'A01', valor: 3},
    {medida: 'A02', valor: 1.5},
    {medida: 'A03', valor: 2},
    {medida: 'A04', valor: 6},
    {medida: 'A05', valor: 2},
    {medida: 'A06', valor: 6},
    {medida: 'A07', valor: 3},
    {medida: 'A08', valor: 4},
    {medida: 'A09', valor: 2},
    {medida: 'A10', valor: 10},
    {medida: 'A11', valor: 1.5},
    {medida: 'A12', valor: 1.5},
    {medida: 'A13', valor: 9},
    {medida: 'A14', valor: 12},
    {medida: 'A15', valor: 3},
];

// a-b
// c-x
// x = (b*c)/a
// console.log('Comprimento ->', ((760*9)/280).toFixed(2));
const CalculaMedidas = (x) => ((760*x)/1018).toFixed(2);

medidas.map(({medida, valor}) => {
    console.log(medida, '->', valor, '->', CalculaMedidas(valor));
});