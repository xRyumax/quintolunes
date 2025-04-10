//3.	Contar elementos pares:
//Dado un array de números, cuenta cuántos son pares y devuelve el total.
function contarPares(arr) {
    return arr.filter(num => num % 2 === 0).length;
}
console.log(contarPares([1, 2, 4, 5])); // 2