import { Mercado } from "./mercado.js";
import { EUR } from "./producto.js";

const mercado = new Mercado();

const compras = [
    { personaje: "Guerrero", producto: mercado.buscarProducto("Espada Basica") },
    { personaje: "Mago", producto: mercado.buscarProducto("Baston Magico") },
    { personaje: "Arquero", producto: mercado.buscarProducto("Arco Largo") },
    { personaje: "Guerrero", producto: mercado.buscarProducto("Armadura Ligera") },
    { personaje: "Mago", producto: mercado.buscarProducto("Toga Magica") }
];

const rarezasConDescuento = ["Comun", "Raro"];

console.log('🤑 ¡Promoción! 20% de descuento en items RAROS\n');

mercado.listaProductos.forEach(producto => {
    if (rarezasConDescuento.includes(producto.rareza)) {
        producto.aplicarDescuento(20);
        console.log(`${producto.nombre}: ${EUR.format(producto.precio)}`)
    }
});

console.log('\n🛒 Compras realizadas:\n');
compras.forEach(compra => {
    console.log(`-${compra.personaje} ha comprado ${compra.producto}`);
});

