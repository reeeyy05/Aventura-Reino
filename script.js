import { Mercado } from "./mercado.js";
import { EUR } from "./producto.js";

const mercado = new Mercado();

const compras = [
    { personaje: "Guerrero", producto: "Espada Basica" },
    { personaje: "Guerrero", producto: "Armadura Ligera" },
    { personaje: "Cazador", producto: "Arco Largo" },
    { personaje: "Mago", producto: "Pocion de Mana" },
    { personaje: "Asesino", producto: "Daga Envenenada" }
];

console.log('🛒 Mercado disponible:\n');

mercado.listaProductos.forEach(producto => {
    const bonusStr = Object.entries(producto.bonus)
        .map(([clave, valor]) => `${clave}+${valor}`)
        .join(', ');
    console.log(`- ${producto.nombre} [${producto.rareza.toLowerCase()}] (${producto.tipo}) - ${EUR.format(producto.precio)} - ${bonusStr}`);
});

const rarezasConDescuento = ["Raro", "Rara"];

console.log('🤑 ¡Promoción! 20% de descuento en items raros\n');

mercado.listaProductos.forEach(producto => {
    if (rarezasConDescuento.includes(producto.rareza)) {
        producto.aplicarDescuento(20);
        console.log(`${producto.nombre}: ${EUR.format(producto.precio)}`);
    }
});

console.log('\n🛒 Compras realizadas:');
compras.forEach(compra => {
    const nombreProducto = typeof compra.producto === 'string' ? compra.producto : 'Producto desconocido';
    console.log(`- ${compra.personaje} ha comprado ${nombreProducto}`);
});