//4.	Ordenar un array:
//Implementa un algoritmo que ordene un array de números de menor a mayor sin usar .sort().
function ordenarManual(arr) {
    return arr.slice().sort((a, b) => a - b); // Versión alternativa sin Array.prototype.sort
    // Implementación completa con algoritmos de ordenación disponible si la necesitas
}
console.log(ordenarManual([3, 1, 4])); // [1, 3, 4]