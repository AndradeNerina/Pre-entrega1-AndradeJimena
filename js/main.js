// Definir productos disponibles con su precio
const productosDisponibles = {
  Camisas: 20,
  Pantalones: 30,
  Zapatos: 50,
}; 

// Función principal del simulador
function simuladorProductos() {
  let costoTotal = 0;

// Solicitar al usuario que seleccione productos y calcular el costo total
  for (const producto in productosDisponibles) {
    const cantidad = parseInt(
      prompt(`Ingrese la cantidad de ${producto} que desea:`)
    );
    if (!isNaN(cantidad) && cantidad > 0) {
      costoTotal += cantidad * productosDisponibles[producto];
    }
  }

  alert(`El costo total de los productos seleccionados es de $${costoTotal}.`); // Mostrar el resultado al usuario
}

// Llamar a la función principal del simulador
simuladorProductos();
