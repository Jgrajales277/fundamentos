
let juegos = [ 'Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('largo:', juegos.length);   

let primero = juegos[0];
let ultimo = juegos[juegos.length -1];

let primero1 = juegos[2 -2];

console.log([primero1, ultimo]);

juegos.forEach((elemento, indice, arr) => {
console.log({elemento, indice, arr});

});

let nuevaLongitud = juegos.push('F-Zero');

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});


let ultimoJuegoEliminado = juegos.pop();
console.log({ultimoJuegoEliminado, juegos});


let posicion = 1;
let juegosBorrados = juegos.splice( posicion, 2);
console.log({juegosBorrados, juegos});


let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});