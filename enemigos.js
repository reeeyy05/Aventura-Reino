export class Enemigos {
    tipo;
    nombre;
    nivelataque;
    puntosvida;

    constructor(tipo, nombre, nivelataque, puntosvida) {
        this.tipo = 'Enemigo';
        this.nombre = nombre;
        this.nivelataque = nivelataque;
        this.puntosvida = puntosvida;
    }
     presentarse(){
        return `Soy ${this.nombre}, el enemigo tengo ${this.nivelataque} y ${this.puntosvida} de vida `;
    }
}


export class JefeFinal extends Enemigos {
    habilidadespecial;
    multiplicardanio;

    constructor(nombre, nivelataque, puntosvida, habilidadespecial, multiplicardanio = 2.0) {
        super('jefe', nombre, nivelataque, puntosvida);
        this.tipo = 'Jefe'
        this.habilidadespecial = habilidadespecial;
        this.multiplicardanio = multiplicardanio;
    }

    presentarse(){
        return `Soy ${this.nombre}, el jefe final. Mi habilidad especial es: ${this.habilidadespecial}`;
    }
}











