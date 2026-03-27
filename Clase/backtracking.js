function generarSubconjuntos(nums) {
    //Aqui se guardan los subconjuntos finales
    const resultados = [];
    //Aqui se define la función de backtracking, que se encargará de generar los subconjuntos
    //La función toma dos parámetros: inicio, que indica el índice actual en el array nums.
    //Camino significa el subconjunto actual que se está construyendo, y se va modificando a medida que se exploran diferentes combinaciones de números en el array nums.
    function backtrack(inicio, camino) {
        //Guardar copia del cambio actual
        resultados.push([...camino]);
        for (let i = inicio; i < nums.length; i++) {
            //Elegir el numero actual y agregarlo al camino
            camino.push(nums[i]);
            //Explorar 
            backtrack(i + 1, camino);
            //Deshacer la elección; eliminar el numero actual del camino
            camino.pop();
        }
    }
    backtrack(0, []);
    console.log("Resultados finales: ", resultados);
    return resultados;
}
console.log(generarSubconjuntos([1, 2, 3]));
//El resultado es un array con todos los subconjuntos posibles de [1, 2, 3], incluyendo el conjunto vacío [] y el conjunto completo [1, 2, 3].
//La función backtrack se llama recursivamente para explorar todas las combinaciones posibles de números en el array nums.