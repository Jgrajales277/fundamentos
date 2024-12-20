
let a = 10;
let b = a;
a = 30;

console.log({a,b});

let juan = { nombre: 'Juan'};
let ana  = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana});

let cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre : 'Peter'};
let tony  = cambiaNombre( peter );
console.log({ peter, tony});


const frutas = [ 'Manzana', 'Pera', 'Piña'];

console.time( 'spread');
const otrasFrutas = [ ...frutas ];
console.timeEnd( 'spread');

otrasFrutas.push( 'Mango');

console.table({ frutas, otrasFrutas});

console.time( 'slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd( 'slice');

otrasFrutas2.push('Mango');

console.table({ frutas, otrasFrutas, otrasFrutas2});
