//Pila de platos quitas el de arriba
//CREAR UNA CLASE PILA
class Pila {
    //Metodo constructor para inicializar la pila, lo llamamos para que nos cree una pila
    constructor() {
        this.elementos = []; //this hace referencia al objeto actual
    }  
    
    //Método para agregar un elemento (PUSH)
    agregarElemento(valor) {
        this.elementos.push(valor);
    }   
    //Método para quitar el último elemento (POP)
    quitarElemento() {
        return this.elementos.pop();
    }
    verUltimoElemento() {
        // Ver el último elemento sin quitarlo
        //el parentesis es para acceder al ultimo elemento del arreglo
        return this.elementos[this.elementos.length - 1];
    }
    //Método para saber si la pila está vacía
    estaVacia() {
        return this.elementos.length === 0;
    }
    //mostrar los elementos de la pila
    mostrarPila() {
        console.log(this.elementos);
    }
}
let pila = new Pila();
pila.agregarElemento(20);
pila.agregarElemento(10);
pila.agregarElemento(5);
pila.agregarElemento(3);

console.log("Pila después de agregar elementos:",pila.mostrarPila());
console.log("Último elemento de la pila:", pila.verUltimoElemento());
console.log("Elemento quitado de la pila:", pila.quitarElemento());
console.log("¿La pila está vacía?", pila.estaVacia());
