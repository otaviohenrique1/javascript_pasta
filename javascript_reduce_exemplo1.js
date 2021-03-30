const numeros = [10, 20, 30, 40, 50];

const total = numeros.reduce((total, item) => {
    console.log(total);
    console.log(item);
    return total + item;
});

console.log(total);
