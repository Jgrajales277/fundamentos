
let a = 5;

if ( a > 10 ) {

    console.log('A es mayor a 10');
} else{
    console.log('A es menor a 10');
}

    console.log('Fin de programa');


let  hoy = new Date();
let  dia = hoy.getDay();
console.log(dia);

if ( dia === 0 ) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
} else if ( dia === 2) {
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo');
}

dia = 5;

const diaLetras = {
     0:()=> 'domingo -1',
     1:()=> 'lunes -0',
     2:()=> 'martes -2',
     3:()=> 'miércoles -3',
     4:()=> 'jueves -4',
     5:()=> 'viernes -5',
     6:()=> 'sábado -6'
}

console.log(diaLetras[dia]() || 'Día no válido');

const diaPalabras = ['domingo', 'lunes', 'martes', 
    'miércoles', 'jueves', 'viernes', 'sábado']

    console.log(diaPalabras[dia] || 'Día no definido');