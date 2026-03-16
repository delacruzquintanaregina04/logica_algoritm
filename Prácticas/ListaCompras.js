// Crear un arreglo vacío llamado listaDeCompras
let listaDeCompras = [];

//Función para agregar un producto al final de la lista

const agregarProducto = (producto) => {
    // Verificar si el producto ya existe
    if (listaDeCompras.includes(producto)) {
        console.log(`El producto "${producto}" ya está en la lista!!`);
    } else {
        // Agregar el producto al final del arreglo
        listaDeCompras.push(producto);
        console.log(`Producto agregado: ${producto}`);
    }
};

//Función para eliminar un producto de la lista

const eliminarProducto = (producto) => {
    // Buscar el índice del producto
    const indice = listaDeCompras.indexOf(producto);
    if (indice !== -1) {
        // Eliminar el producto usando splice
        listaDeCompras.splice(indice, 1);
        console.log(`Producto eliminado: ${producto}`);
    } else {
        console.log(`El producto "${producto}" no se encuentra en la lista`);
    }
};
//Función para mostrar todos los productos de la lista

const mostrarLista = () => {
    console.log("Lista de Compras:");
    if (listaDeCompras.length === 0) {
        console.log("La lista está vacía.");
        return;
    }
    // Recorrer el arreglo y mostrar cada producto
    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
    });
};

// Ejemplo de uso

agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Huevos");
agregarProducto("Cafe"); // Intento de duplicado
mostrarLista();
eliminarProducto("Queso"); // Producto que no existe
eliminarProducto("Pan"); // Producto que no existe
mostrarLista();