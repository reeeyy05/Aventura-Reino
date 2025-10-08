// clase Jugador con atributos nombre, puntos, vidaMaxima e inventario
export class Jugador {
    nombre;
    puntos = 0;
    vidaMaxima = 100;
    inventario = [];

    constructor(nombre, vidaMaxima) {
        this.nombre = nombre;
        if (vidaMaxima) this.vidaMaxima = vidaMaxima;
    }

    //añadir objetos al inventario
    añadirObjeto(objeto) {
        const objetoClone = { ...objeto };
        this.inventario.push(objetoClone);
    }
}