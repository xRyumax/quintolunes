//8.	Sumar solo los números positivos:
//Filtra los negativos y suma los positivos.
function sumarPositivos(arr) {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}
console.log(sumarPositivos([1, -2, 3, -9, 10]));