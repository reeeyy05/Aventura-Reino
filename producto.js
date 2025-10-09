class Producto {
    nombre;
    precio; 
    rareza;
    tipo;
    bonus;


    constructor(nombre, precio, rareza, tipo, bonus) {
        this.nombre = nombre;
        this.precio = precio;
        this.rareza = rareza;
        this.tipo = tipo;
        this.bonus = bonus;
    }

    //presentación que describa al objeto
    presentar() {
        const precioFormateado = this.formatearPrecio();
        return `El producto ${this.nombre} es de tipo ${this.tipo}, tiene una rareza de ${this.rareza}, un precio de ${precioFormateado} y otorga un bonus de ${this.bonus}.`;
    }

    //formateando su precio en € (los objetos guardan su precio sin decimales por ejemplo 950, esto se formateara a 9,50€)
    formatearPrecio() {
        return (this.precio / 100).toFixed(2) + "€";
    }

    //Aplicar un descuento: Le llega un valor y devuelve una copia de ese producto modificado.
    aplicarDescuento(porcentaje) {
        const copia = structuredClone(this);
        copia.precio = Math.round(this.precio * (1 - porcentaje / 100));
        return copia;
    }
}

export { Producto };