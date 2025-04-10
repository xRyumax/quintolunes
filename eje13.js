//13.	Contar regresivamente desde un número:
//Usa while para imprimir una cuenta regresiva desde un número ingresado por el usuario hasta 0.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un número para la cuenta regresiva: ', (input) => {
  let num = parseInt(input);

  if (isNaN(num)) {
    console.log('Por favor ingresa un número válido');
    rl.close();
    return;
  }

  console.log(`\nCuenta regresiva desde ${num}:`);
  while (num >= 0) {
    console.log(num--);
  }

  rl.close();
});