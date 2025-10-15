// Importar la clase enemigo
import { enemigos, JefeFinal } from './enemigos.js';

const enemigos = [
  new enemigos('Goblin', 6, 30),
  new enemigos('Lobo', 9, 42),
  new enemigos('Bandido', 12, 55), 
  new JefeFinal('Dragon', 28, 140, 'Aliento de Fuego', 2.0),
];
  
console.log('\n👿 Enemigos:');
enemigos.forEach(e => console.log(`  - ${e.mostrarEnemigos()}`));