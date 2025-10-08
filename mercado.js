import Producto from './producto.js';

export { Mercado };

class Mercado {
    listaProductos = [];

    constructor() {
        this.listaProductos.push(new Producto("Espada Basica", 500, "Comun", "arma", "aumenta ataque"));
        this.listaProductos.push(new Producto("Armadura Ligera", 750, "Rara", "armadura", "aumenta defensa"));
        this.listaProductos.push(new Producto("Pocion de vida", 200, "Comun", "consumible", "cura vida"));
        this.listaProductos.push(new Producto("Granada", 250, "Raro", "consumible", "mata al enemigo"));
    }

    // Filtrar productos por una rareza dada
    filtrarPorRareza(rareza) {
        return this.listaProductos.filter(producto => producto.rareza === rareza);
    }

    // Aplicar un descuento a los productos que sean de un tipo o rareza concreta
    aplicarDescuento(tipoRareza) {
        this.listaProductos.forEach(producto => {
            if (producto.tipo === tipoRareza) {
                producto.precio -= 50;
            }
        });
    }

    // Buscar un producto por su nombre
    buscarProducto(nombre) {
        return this.listaProductos.find(producto => producto.nombre === nombre);
    }

    // Mostrar un producto (se llamará al método que tiene este producto)
    mostrarProducto(nombre) {
        const producto = this.buscarProducto(nombre);
        if (producto) {
            producto.mostrarInfo();
        } else {
            console.log("Producto no encontrado");
        }
    }
}