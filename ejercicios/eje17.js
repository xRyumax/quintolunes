//17.Contador de intentos:
//Simula un intento de login.
//Usa while para permitir 3 intentos.
const passCorrecta = "123";
let intentos = 3;
while (intentos--) {
    if (prompt("Contraseña:") === passCorrecta) {
        console.log("Acceso concedido");
        break;
    }
}