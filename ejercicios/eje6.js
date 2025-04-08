//6.	Revertir un array:
//Implementa una función que invierta el orden de un array sin usar .reverse().
function revertirArray(arr) {
    let resultado = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        resultado.push(arr[i]);
    }
    return resultado;
}
console.log(revertirArray([1, 2, 3])); // [3, 2, 1]