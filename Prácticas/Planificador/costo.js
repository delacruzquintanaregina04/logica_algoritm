const Cost_destino = {
  Paris: 1200,
  Londres: 1000,
  Roma: 900,
  Madrid: 800,
  "New York": 1500,
};
const Cost_transporte = {
  Avion: 500,
  Tren: 300,
  Autobus: 200,
};

const Cost_alojamiento = {
  Hotel: 1000,
  Hostal: 500,
  Airbnb: 700,
};
//Función para calcular el costo total del viaje
export const calcularCosto = ({
  destino,
  transporte,
  alojamiento,
  noches = 0,
  personas = 1,
}) => {
  //Obtenemos el costo base del destino, transporte y alojamiento
  //Si no existe el destino, transporte o alojamiento en los objetos de costos, se asigna un valor por defecto de 0
  const baseDestino = Cost_destino[destino] ?? 0;
  const extraTransporte = Cost_transporte[transporte] ?? 0;
  const costoNoche = Cost_alojamiento[alojamiento] ?? 0;
  let costoTotal = (baseDestino + extraTransporte) * personas;
  //Sumamos el costo del alojamineto
  //noches*precio por noche
  costoTotal += costoNoche * noches;
  const descuento =
    //operador ternario
    //condicion ? valor si es true : valor si es false es como un if else pero mas compacto
    personas > 5
      ? 0.12 // Si hay más de 5 personas, se aplica un descuento del 12%
      : personas > 3
        ? 0.08 // Si hay más de 3 personas, se aplica un descuento del 8%
        : 0; // Si no se cumple ninguna de las condiciones anteriores, no se aplica ningún descuento

  //Aplicando el descuento al costo Subtotal
  const total = costoTotal * (1 - descuento);
  return Math.round(total); // Redondeamos el resultado al número entero más cercano
};
/*
let descuento;
if (personas > 5) {
    descuento = 0.12; // Si hay más de 5 personas, se aplica un descuento del 12%
}   else if (personas > 3) {
    descuento = 0.08; // Si hay más de 3 personas, se aplica un descuento del 8%
}   else {
    descuento = 0; // Si no se cumple ninguna de las condiciones anteriores, no se aplica ningún descuento
}
*/
