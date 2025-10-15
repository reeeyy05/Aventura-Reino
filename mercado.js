import p from '/producto.js';

export class Mercado {

    /**
     * Crea un nuevo mercado con una lista de productos.
     */
    listaProductos = [
        new p("Espada Basica", 500, "Comun", "arma", "aumenta ataque"),
        new p("Armadura Ligera", 750, "Rara", "armadura", "aumenta defensa"),
        new p("Pocion de vida", 200, "Comun", "consumible", "cura vida"),
        new p("Granada", 250, "Raro", "consumible", "mata al enemigo"),
        new p("Arco Largo", 1200, "Epico", "arma", "aumenta ataque"),
        new p("Escudo Antiguo", 900, "Epico", "armadura", "aumenta defensa"),
        new p("Pocion de Mana", 300, "Comun", "consumible", "recarga mana"),
        new p("Daga Envenenada", 1100, "Legendario", "arma", "aumenta ataque y envenena"),
        new p("Armadura de Dragón", 2000, "Legendario", "armadura", "aumenta defensa y resistencia al fuego"),
        new p("Elixir de Inmortalidad", 5000, "Legendario", "consumible", "revive al jugador")
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