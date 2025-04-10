//14.	Validar entrada de usuario:
//Pide al usuario que ingrese un número mayor que 0. Si ingresa un número inválido, vuelve a pedirlo usando do while.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirNumero() {
  rl.question('Ingresa un número mayor que 0: ', (input) => {
    const numero = parseInt(input);

    if (isNaN(numero) || numero <= 0) {
      console.log('Número inválido. Debe ser un número mayor que 0.');
      pedirNumero(); // Vuelve a preguntar
    } else {
      console.log(`Número válido ingresado: ${numero}`);
      rl.close();
    }
  });
}

pedirNumero();