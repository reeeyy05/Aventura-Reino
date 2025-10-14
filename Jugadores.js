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
        let miAtaque = 3; // Empiezo con 3
        
        // Busco todas mis armas
        for (let objeto of this.inventario) {// Recorro inventario
            if (objeto.tipo === 'arma') {// Si es arma
                miAtaque += objeto.ataque ? objeto.ataque : 0;// Sumo su ataque si lo tiene
            }
        }
        
        return miAtaque;
    }

    //Obtener defensa total: Calculará la defensa en función de los objetos.
    defensaTotal() {
        let miDefensa = 6; // Empiezo con 6
        
        // Busco todas mis armaduras
        for (let objeto of this.inventario) {
            if (objeto.tipo === 'armadura') {// Si es armadura
                miDefensa += objeto.defensa ? objeto.defensa : 0;// Sumo su defensa si la tiene
            }
        }
        
        return miDefensa;
    }

    //Agrupar inventario por tipo de objeto.
    inventarioPorTipo() {
        const grupos = {};
        
        for (let objeto of this.inventario) {
            // Si no existe el grupo, lo creo
            if (!grupos[objeto.tipo]) {
                grupos[objeto.tipo] = [];
            }
            // Añado el objeto al grupo
            grupos[objeto.tipo].push(objeto);
        }
        
        return grupos;
    }
    //Mostrar jugador: Se mostrará su nombre, puntos, vida, ataque, defensa e inventario.
    mostrar() {
        return {
            nombre: this.nombre,
            puntos: this.puntos,
            vida: this.vida, // Añadir vida actual
            vidaMaxima: this.vidaMaxima,
            ataque: this.ataqueTotal(),
            defensa: this.defensaTotal(),
            inventario: this.inventario
        };
    }
}

//Exportar la clase Jugadores