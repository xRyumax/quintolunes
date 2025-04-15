//5.	Buscar un elemento:
//Dado un array de nombres, busca si un nombre específico está en la lista y devuelve su posición.
function buscarNombre(arr, nombre) {
    return arr.indexOf(nombre);
}
console.log(buscarNombre(['Ana', 'Juan'], 'Ana')); // 1