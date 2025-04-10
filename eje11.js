//11.	Generar una secuencia de Fibonacci:
//Usa un for para generar los primeros 10 números de la serie de Fibonacci e imprímelos.
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
    fib[i] = fib[i-1] + fib[i-2];
}
console.log(fib);