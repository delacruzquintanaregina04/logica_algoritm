//Si hay prioridad en laas tortillas
//FIFO-First In First Out
class Cola {
  constructor() {
    this.elementos = [];
  }
  // Método para agregar al final (enqueue)
  agregarElemento(valor) {
    this.elementos.push(valor);
  }
  // Método para quitar el primer elemento (dequeue)
  quitarElemento() {
    return this.elementos.shift();
  }
  // Método para ver el primer elemento sin quitarlo
  verPrimero() {
    return this.elementos[0];
  }
  // Método para saber si la cola está vacía
  estaVacia() {
    return this.elementos.length === 0;
  }
  // Método para mostrar los elementos de la cola
  mostrarCola() {
    console.log(this.elementos);
  }
}
let filaTortillas = new Cola();
filaTortillas.agregarElemento("Regina");
filaTortillas.agregarElemento("Luis");
filaTortillas.agregarElemento("Yeyis");
filaTortillas.agregarElemento("César");

console.log(filaTortillas.mostrarCola());
console.log(filaTortillas.verPrimero());
console.log(filaTortillas.quitarElemento());
console.log(filaTortillas.mostrarCola());
