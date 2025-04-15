//15.	Mostrar menú hasta que el usuario salga:
//Muestra un menú con opciones y usa do while para repetir hasta que el usuario elija salir.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function mostrarMenu() {
  let opcion;
  do {
    console.log('\n=== MENÚ PRINCIPAL ===');
    console.log('1. Opción 1');
    console.log('2. Opción 2');
    console.log('3. Salir');
    
    opcion = await new Promise(resolve => {
      rl.question('Seleccione una opción: ', resolve);
    });

    switch(opcion) {
      case '1':
        console.log('\nHas seleccionado la Opción 1');
        // Aquí iría la lógica de la opción 1
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simula procesamiento
        break;
      case '2':
        console.log('\nHas seleccionado la Opción 2');
        // Aquí iría la lógica de la opción 2
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simula procesamiento
        break;
      case '3':
        console.log('\nAdiossss...');
        break;
      default:
        console.log('\nOpción no válida. Intente nuevamente.');
    }
  } while (opcion !== '3');

  rl.close();
}

mostrarMenu();