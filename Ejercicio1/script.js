
const numeros = [];

for (let i = 0; i < 10; i++) {
    const numero = Math.floor(Math.random() * 100) + 1;
    numeros.push(numero);
}

console.log("numeros al azar ", numeros.join(", "));