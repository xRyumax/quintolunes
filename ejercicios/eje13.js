//13.	Contar regresivamente desde un número:
//Usa while para imprimir una cuenta regresiva desde un número ingresado por el usuario hasta 0.
let num = parseInt(prompt("Ingresa un número:"));
while (num >= 0) {
    console.log(num--);
}