//18. Sumar hasta que el usuario ingrese 0:
//Pide números al usuario y usa while para sumarlos hasta que ingrese 0.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let suma = 0;

function askNumber() {
    readline.question('Número (0 para terminar): ', input => {
        const num = parseFloat(input);
        
        if (isNaN(num)) {
            console.log("¡Debes ingresar un número válido!");
            askNumber();
            return;
        }
        
        if (num !== 0) {
            suma += num;
            askNumber();
        } else {
            console.log("Total:", suma);
            readline.close();
        }
    });
}

askNumber();