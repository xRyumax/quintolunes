//2.	Número mayor y menor:
//Crea una función que reciba un array de números y retorne el mayor y el menor.
function mayorYMenor(arr) {
    return {
        mayor: Math.max(...arr),
        menor: Math.min(...arr)
    };
}
console.log(mayorYMenor([5, 2, 9])); // { mayor: 9, menor: 2 }