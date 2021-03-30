const palavras = ['oi', 'Ola', 'Paralelepipedo'];

const maiorPalavra = palavras.reduce((maiorPalavra, palavraAtual) => {
    console.log(maiorPalavra);
    console.log(palavraAtual);
    if (palavraAtual.length > maiorPalavra.length) {
        return palavraAtual;
    }
    return maiorPalavra;
}, '');

console.log('aaa', maiorPalavra);