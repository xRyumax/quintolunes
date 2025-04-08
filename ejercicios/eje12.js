//12.	Adivinar un número:
//Genera un número aleatorio del 1 al 10 y usa un while para pedir al usuario que lo adivine hasta que lo haga correctamente.
const aleatorio = Math.floor(Math.random() * 10) + 1;
let intento;
while ((intento = prompt("Adivina (1-10)")) != aleatorio) {
    console.log("Incorrecto");
}
console.log("¡Correcto!");