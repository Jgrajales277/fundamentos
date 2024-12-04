
function crearPersona( nombre, apellido) {

    return {
        nombre: nombre,
        apellido: apellido,
    }
}

const persona= crearPersona( 'Juliana', 'Castaño');
console.log(persona);

//Since ES6 if properties and values have the same name just write the value.

function crearPersona2( nombre, apellido){
    
    return { nombre, apellido};
}
const persona2= crearPersona2( 'Martina', 'Escobar' );
console.log(persona2);

//With an arrow function there's no need to add return since the function has only one,
//but ir is necessary to put the array in brackets since it has the same names as the arguments.

const crearPersona3= ( nombre, apellido) => ({ nombre, apellido});

const persona3 = crearPersona3 ('Jonatha', 'Lerma');
console.log(persona3);



// Traditional function's built in Object 'arguments'

function imprimeArgumentos(){
    console.log(arguments);
}

imprimeArgumentos( 10, true, false, 'Juliana', 'Hola');

console.log({imprimeArgumentos});

// arrow functions don't have the objet 'arguments built in' It throws error
//To get an object  of arguments with an arrow function the parameter '...rest' is needed before the argument received by the function

const imprimeArgumentos2 = (...args) => {
    console.log(args);
}

imprimeArgumentos2( 13, true, 'Martina Escobar', 'Hija');

console.log({imprimeArgumentos2});

//There can't be other arguments than the one used after '... rest'
//If you need to take a variable apart  it has to go before and it is independent from the group of arguments affected by rest.

const imprimeArgumentos3 = (edad, ...args) => {
    // console.log({edad, args});
    return args;
}

const argumentos = imprimeArgumentos3( 13, true, 'Martina', 'Hija');

console.log(argumentos);

const [nina, nombre, relacion] = imprimeArgumentos3(13, true, 'Martina' , 'Hija')

console.log({ nina, nombre, relacion });

const {apellido: nuevoApellido} = crearPersona ('Juliana', 'Castaño');
console.log({nuevoApellido});

//Desestructuracion de objetos


const tony = {

    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    // edad: 40,
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
    }

// const imprimePropiedades = (personaje) => {
//     console.log('nombre',personaje.nombre);
//     console.log('codeName',personaje.codeName);
//     console.log('vivo',personaje.vivo);
//     console.log('edad',personaje.edad);
//     console.log('trajes',personaje.trajes);
// };

// imprimePropiedades(tony);

const imprimePropiedades = ({nombre, codeName, vivo, edad =15, trajes}) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});   
}

imprimePropiedades(tony);