import p from '/producto.js';

export class Mercado {
    listaProductos = [
        new p("Espada Basica", 500, "Comun", "arma", "aumenta ataque"),
        new p("Armadura Ligera", 750, "Rara", "armadura", "aumenta defensa"),
        new p("Pocion de vida", 200, "Comun", "consumible", "cura vida"),
        new p("Granada", 250, "Raro", "consumible", "mata al enemigo")
    ];

    // Filtrar productos por una rareza dada
    filtrarPorRareza(rareza) {
        return this.listaProductos.filter(Producto => Producto.rareza === rareza);
    }

    // Aplicar un descuento a los productos que sean de un tipo o rareza concreta
    aplicarDescuento(tipoRareza) {
        for (let i = 0; i < p.length; i++) {
            if (p[i].tipo === tipoRareza) {
                p[i].precio -= 50;
            }
            
        }
    }

    // Buscar un producto por su nombre
    buscarProducto(nombre) {
        return this.listaProductos.find(producto => producto.nombre === nombre);
    }

    // Mostrar un producto (se llamará al método que tiene este producto)
    mostrarProducto(nombre) {
        return p.presentar();
    }
}