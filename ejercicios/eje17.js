//17.Contador de intentos:
//Simula un intento de login.
//Usa while para permitir 3 intentos.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const CONTRASEÑA_CORRECTA = "123";
const MAX_INTENTOS = 3;

async function verificarLogin() {
  let intentos = MAX_INTENTOS;
  let accesoConcedido = false;

  while (intentos > 0 && !accesoConcedido) {
    const contraseña = await new Promise(resolve => {
      rl.question(`Contraseña (${intentos} intentos restantes): `, resolve);
    });

    if (contraseña === CONTRASEÑA_CORRECTA) {
      console.log("\nAcceso concedido");
      accesoConcedido = true;
    } else {
      console.log("Contraseña incorrecta\n");
      intentos--;
    }
  }

  if (!accesoConcedido) {
    console.log("\nHas agotado tus intentos. Acceso denegado");
  }

  rl.close();
}

console.log("=== SISTEMA DE LOGIN ===");
verificarLogin();