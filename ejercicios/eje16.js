//16. Sumar solo los números impares entre 1 y 50:
//•	Usa for para recorrer los números del 1 al 50.
//•	Usa if para sumar solo los impares.
//•	Usa while para verificar si la suma supera 500 y, si es así, detener el proceso.
let suma = 0;
for (let i = 1; i <= 50; i += 2) {
    suma += i;
    if (suma > 500) break;
}
console.log(suma);

