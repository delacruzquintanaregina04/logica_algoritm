let nombre=null;

//Se activa ?? cuando la variable es null/underfined
let nombreFinal= nombre ?? "Invitado";

console.log(nombreFinal);

let edad;
//Si existe  tomar el valor sino le asigna 18
let edadFinal= edad ?? 18;

console.log(edadFinal);

//AND
let numero = 0;
let resultado= numero && 100;
console.log(resultado);


//spread operator ... (tres puntos) que me ayudan hacer una copia de un arreglo
let numeros = [1,2,3];
let copiaNumeros = [...numeros];
console.log (copiaNumeros);

let frutas= ["manzana", "pera", "sandia"];
let copiaFrutas= [...frutas, "naranja"];
console.log(frutas);
console.log(copiaFrutas);