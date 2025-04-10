//14.	Validar entrada de usuario:
//Pide al usuario que ingrese un número mayor que 0. Si ingresa un número inválido, vuelve a pedirlo usando do while.
let input;
do {
    input = parseInt(prompt("Ingresa un número > 0:"));
} while (isNaN(input) || input <= 0);