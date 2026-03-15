// Importamos las funciones necesarias desde el módulo de viajes
import { registrarDestino, mostrarItinerario } from "./viajes.js";
//FUNCION PRINCIPAL DE LA APLICACIÓN AL INICIARLA
const iniciarApp=() => {
    //Registrar algunos destinos de ejemplo
    registrarDestino("Londres", "2024-07-15", "Avion", {
        alojamiento: "Hotel", 
        noches: 5, 
        personas: 2});
    registrarDestino("Roma", "2024-08-20", "Tren", {
        alojamiento: "Hostal", 
        noches: 3,
        personas: 4});
     registrarDestino("Madrid", "2024-09-10", "Autobus", {
        alojamiento: "Airbnb", 
        noches: 4, 
        personas: 6});
mostrarItinerario();
}
//Ejetamos la aplicación
iniciarApp();