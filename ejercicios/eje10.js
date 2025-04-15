//10.	Tabla de multiplicar:
//Pide al usuario un número y usa un for para imprimir su tabla de multiplicar del 1 al 10.
const readline = require('readline');

// Definición de la función primero
function tablaMultiplicar(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        throw new Error('Debe ingresar un número válido');
    }

    console.log(`\n=== Tabla del ${num} ===`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} × ${i} = ${num * i}`);
    }
}

// Configuración de readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Lógica de entrada
rl.question('Ingrese un número: ', (input) => {
    try {
        const numero = Number(input);
        tablaMultiplicar(numero);
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        rl.close();
    }
});