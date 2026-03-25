//Fuction de countdown
function countdown(n) {
    //Caso base; cuano n llega a 0, termina
    if(n === 0) {
        console.log("Done!");
        return;
    }
    //Accion actual; imprimir el numero actual y llamar a la funcion con n-1
    console.log(n);

    //Llamada recursiva; countdown se llama a si misma con n-1
    countdown(n-1);
}
countdown(5);