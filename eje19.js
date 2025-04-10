//19. Imprimir la serie de Fibonacci hasta que un número supere 100:
//Usa while para generar la serie de Fibonacci hasta que un número supere 100.
let fib = [0, 1], i = 1;
while (fib[i] <= 100) {
    fib.push(fib[i] + fib[i-1]);
    i++;
}
console.log(fib);