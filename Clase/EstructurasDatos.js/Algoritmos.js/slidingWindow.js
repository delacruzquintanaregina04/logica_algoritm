/*
[2,1,5,4,1,3,2] 
ventana de 3
[2,1,5] la suma es8
[1,5,4] la suma es 10
[5,4,1] 5
[4,1,3] 4
[1,3,2] 3
*/
function obtenerSumaMaxima(arregloNumeros, tamañoVentana) {
    //Vaslidamos que no este vacia
    if (tamañoVentana > arregloNumeros.length) {
        return null; // No se puede calcular la suma máxima si la ventana es mayor que el arreglo
    }   
    let sumaActualdeVentana = 0;

    // Calcular la suma de la primera ventana
    for (let i = 0; i < tamañoVentana; i++) {
        sumaActualdeVentana += arregloNumeros[i];
    }

    let sumaMaximaEncontrada = sumaActualdeVentana;

    // Calculamos la suma de la primera ventana 
    for (let i = tamañoVentana; i < arregloNumeros.length; i++) {
        let elementoQueSale = arregloNumeros[i - tamañoVentana]; // Elemento que sale de la ventana
        let elementoQueEntra = arregloNumeros[i]; // Elemento que entra a la ventana

        //Ajustarmos la suma
        sumaActualdeVentana = sumaActualdeVentana - elementoQueSale + elementoQueEntra;

        // Actualizamos la suma máxima si es necesario
        //Comparanis con el máximo
        if (sumaActualdeVentana > sumaMaximaEncontrada) {
            sumaMaximaEncontrada = sumaActualdeVentana;
        }
    }

    // Devolver la suma máxima encontrada tras recorrer todo el arreglo
    return sumaMaximaEncontrada;
}

let visitasPorMinuto = [10, 20, 30, 40, 50, 5, 60];
let maxTrafico = obtenerSumaMaxima(visitasPorMinuto, 3);
console.log(maxTrafico);
 
