
let personaje = {

    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        long: -118.70
        },
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    }
    }
console.log(personaje);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);
console.log('Latitud:', personaje.coords.lat);
console.log('Cantidad de trajes:', personaje.trajes.length);
console.log('Último traje:', personaje.trajes[personaje.trajes.length -1]);

const x = 'vivo';
console.log('¿Vivo?:', personaje[x]);

delete personaje.edad;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

personaje.casado = true;

Object.freeze(personaje);

personaje.dinero = 1000000;

Object.freeze(personaje.direccion);
personaje.direccion.ubicacion = 'Costa Rica'

console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);
