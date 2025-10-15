//importar la clase Jugadores
import {
    Jugadores
} from './Jugadores.js';

// bienvenida
console.log("🏰Bienvenidos a la Aventura del Reino🏰");

//Crear jugadores
const jugador1 = new Jugadores('Paco');
const jugador2 = new Jugadores('Juan');
const jugador3 = new Jugadores('Gustavo');
console.log("👤Jugadores creados: ", jugador1.nombre, jugador2.nombre, jugador3.nombre);