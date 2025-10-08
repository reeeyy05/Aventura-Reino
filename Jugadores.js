// clase Jugadores con atributos nombre, puntos, vidaMaxima e inventario
export class Jugadores {
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
        const objetoClone = {
            ...objeto
        };
        this.inventario.push(objetoClone);
    }

    //sumar puntos al jugador cuando gane batallas.
    sumarPuntos(puntos) {
        this.puntos += puntos;
    }
    
    //Obtener ataque total: Calculará el ataque en función de los objetos.
    //Obtener defensa total: Calculará la defensa en función de los objetos.
    //Agrupar inventario por tipo de objeto.
    //Mostrar jugador: Se mostrará su nombre, puntos, vida, ataque, defensa e inventario.
}