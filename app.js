function busquedaLineal(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elemento) {
            return i;
        }
    }
    return -1;
}

const arreglo = [0, 2, 3, 8, 4, 9, 7];
const elementoBuscado = 7;
const indice = busquedaLineal(arreglo, elementoBuscado);
console.log(`El elemento ${elementoBuscado} se encuentra en el índice ${indice}`)
