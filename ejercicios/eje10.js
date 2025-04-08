//10.	Tabla de multiplicar:
//Pide al usuario un número y usa un for para imprimir su tabla de multiplicar del 1 al 10.
function tablaMultiplicar(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
tablaMultiplicar(5); // Imprime la tabla del 5