import p from '/producto.js';

export class Mercado {

    /**
     * Crea un nuevo mercado con una lista de productos.
     */
    listaProductos = [
        new p("Espada Basica", 500, "Comun", "arma", { ataque: 5 }),
        new p("Armadura Ligera", 750, "Rara", "armadura", { defensa: 10 }),
        new p("Pocion de vida", 200, "Comun", "consumible", { curacion: 50 }),
        new p("Granada", 250, "Raro", "consumible", { ataque: 30 }),
        new p("Arco Largo", 1200, "Epico", "arma", { ataque: 15 }),
        new p("Escudo Antiguo", 900, "Epico", "armadura", { defensa: 20 }),
        new p("Pocion de Mana", 300, "Comun", "consumible", { curacion: 40 }),
        new p("Daga Envenenada", 1100, "Legendario", "arma", { ataque: 25 }),
        new p("Armadura de Dragón", 2000, "Legendario", "armadura", { defensa: 35 })
    ];

    /**
     * Filtrar productos por rareza
     * @param rareza Rareza por la que filtrar 
     * @returns Lista de productos que coinciden con la rareza indicada
     */
    filtrarPorRareza(rareza) {
        return this.listaProductos.filter(producto => producto.rareza === rareza);
    }

    /**
     * 
     * @param rareza Rareza por la que filtrar
     * @param porcentaje Porcentaje de descuento a aplicar
     * @returns Lista de productos con el descuento aplicado
     */
    aplicarDescuento(rareza, porcentaje) {
        return Mercado.map(producto => producto.rareza === rareza ? p.aplicarDescuento(porcentaje) : producto);
    }

    /**
     * 
     * @param nombre Nombre del producto a buscar
     * @returns Producto que coincide con el nombre indicado o undefined si no se encuentra
     */
    buscarProducto(nombre) {
        return this.listaProductos.find(producto => producto.nombre === nombre);
    }

    /**
     * 
     * @returns Descripción de todos los productos en el mercado
     */
    mostrarProducto() {
        return p.presentar();
    }
}