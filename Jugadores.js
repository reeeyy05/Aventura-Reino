// clase Jugadores con atributos nombre, puntos, vidaMaxima e inventario
export class Jugadores {
    nombre;
    puntos = 0;
    vida = 100;
    vidaMaxima = 100;
    inventario = [];

    constructor(nombre) {
        this.nombre = nombre;
        this.puntos = 0;
        this.vida = this.vidaMaxima;
        this.vidaMaxima = 100;
        this.inventario = [];
        
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
    ataqueTotal() {
        return this.inventario
            .filter(objeto => objeto.tipo === 'arma')
            .reduce((total, objeto) => total + (objeto.ataque || 0), 0);
    }
    //Obtener defensa total: Calculará la defensa en función de los objetos.
    defensaTotal() {
        return this.inventario
            .filter(objeto => objeto.tipo === 'armadura')
            .reduce((total, objeto) => total + (objeto.defensa || 0), 0);
    }

    //Agrupar inventario por tipo de objeto.
    inventarioPorTipo() {
        return this.inventario.reduce((grupos, objeto) => {
            if (!grupos[objeto.tipo]) grupos[objeto.tipo] = [];
            grupos[objeto.tipo].push(objeto);
            return grupos;
        }, {});
    }
    //Mostrar jugador: Se mostrará su nombre, puntos, vida, ataque, defensa e inventario.
    mostrar() {
        return {
            nombre: this.nombre,
            puntos: this.puntos,
            vidaMaxima: this.vidaMaxima,
            ataque: this.ataqueTotal(),
            defensa: this.defensaTotal(),
            inventario: this.inventario
        };
    }
}

//Exportar la clase Jugadores