//importar la función calcularCosto desde el archivo costo.js
import { calcularCosto } from "./costo.js";
//se una const porque no vamos a modificar el arreglo de destinos, solo vamos a agregar nuevos destinos
const destinos = [];

//Función para registrar un nuevo destino
export const registrarDestino = (destino, fecha, transporte, opciones = {}) => {
  const { alojamiento = "Hotel", noches = 0, personas = 1 } = opciones;
  //Crear un objeto con los detalles del viaje
  const nuevoViaje = {
    destino,
    fecha,
    transporte,
    alojamiento,
    noches,
    personas,

    //calcular el costo total del viaje utilizando la función calcularCosto
    costo: calcularCosto({
      destino,
      transporte,
      alojamiento,
      noches,
      personas,
    }),
  };
  //Agregar el nuevo viaje al arreglo de destinos
  destinos.push(nuevoViaje);
  return nuevoViaje;
};

export const obtenerItinerario = () => {
  return [...destinos]; //retorna una copia del arreglo de destinos
};
//Función para mostrar el itinerario completo
export const mostrarItinerario = () => {
  if (destinos.length === 0) {
    console.log("No hay destinos registrados.");
    return;
  }
  //Iterar sobre el arreglo de destinos y mostrar los detalles de cada viaje
  //forEach es un método de los arreglos que ejecuta una función para cada elemento del arreglo, recibe una función como argumento, esa función recibe el elemento actual y el índice del elemento como argumentos
  destinos.forEach((viaje, index) => {
    console.log(`${index + 1}.`);
    console.log(`Destino: ${viaje.destino}`);
    console.log(`Fecha: ${viaje.fecha}`);
    console.log(`Transporte: ${viaje.transporte}`);
    console.log(`Alojamiento: ${viaje.alojamiento}`);
    console.log(`Noches: ${viaje.noches}`);
    console.log(`Personas: ${viaje.personas}`);
    console.log(`Costo Total: $${viaje.costo}`);
    console.log("-----------------------------");
  });
};
