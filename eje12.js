//12.	Adivinar un número:
//Genera un número aleatorio del 1 al 10 y usa un while para pedir al usuario que lo adivine hasta que lo haga correctamente.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const aleatorio = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

function adivinarNumero() {
  rl.question(`Intento #${intentos + 1}: Adivina el número (1-10): `, (intento) => {
    intentos++;
    const numero = parseInt(intento);

    if (isNaN(numero) || numero < 1 || numero > 10) {
      console.log('Por favor ingresa un número entre 1 y 10');
    } else if (numero === aleatorio) {
      console.log(`¡Correcto! Lo adivinaste en ${intentos} intentos.`);
      rl.close();
      return;
    } else {
      console.log(numero < aleatorio ? 'Más alto' : 'Más bajo');
    }

    adivinarNumero();
  });
}

console.log('¡Adivina el número secreto entre 1 y 10!');
adivinarNumero();