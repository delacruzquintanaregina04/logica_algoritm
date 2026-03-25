//Fuction de countdown
function countdown(n) {
    //Caso base; cuano n llega a 0, termina
    console.log("Entrando con n = ", n);
    if(n === 0) {
        console.log("Caso base avanzado");
        return;
    }
    //Accion actual; imprimir el numero actual y llamar a la funcion con n-1
    console.log(n);

    //Llamada recursiva; countdown se llama a si misma con n-1
    countdown(n-1);
    console.log("Saliendo con n = ", n);
}
countdown(5);

//Recursividad Pasar a un probelam massencillo Ejemplo: Factorial de un numero