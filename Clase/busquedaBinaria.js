function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    console.log(`Buscando ${target} entre los índices ${low} y ${high}`);
    // Caso base: ya no hay rango válido para buscar
    if (low > high) {
        console.log(`Elemento no encontrado`);
        return -1; // Elemento no encontrado
    }

    // Paso 1: Dividir el rango en dos mitades y calcular el índice medio
    let mid = Math.floor((low + high) / 2);
    console.log(`MID: ${mid}, Valor medio: ${arr[mid]}`);

    // Paso 2: Conquistar - comparar el valor medio con el objetivo
    if (arr[mid] === target) {
        // Elemento encontrado
        console.log(`Elemento encontrado en índice ${mid}`);
        return mid; // Elemento encontrado
    }

    // Paso 3: Recursión en la mitad correspondiente
    if (arr[mid] > target) {
        // El objetivo es menor que el valor medio, buscar en la mitad izquierda
        console.log(`El objetivo es menor, buscar en la mitad izquierda`);
        return binarySearch(arr, target, low, mid - 1);
    } else {
        // El objetivo es mayor que el valor medio, buscar en la mitad derecha
        console.log(`El objetivo es mayor, buscar en la mitad derecha`);
        return binarySearch(arr, target, mid + 1, high);
    }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9)); // Devuelve 8, que es el índice de 9 en el array
/*lo que se hace es dividir el array en mitades sucesivas,
 comparando el elemento del medio con el objetivo, y 
 descartando la mitad que no contiene el objetivo,
  hasta encontrarlo o determinar que no está presente.*/
