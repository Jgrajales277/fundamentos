// Entre semana abrimos a las 11, pero los fines de semana    //abrimos a las 9.
// Una persona entra a un sitio web para consultar si está //abierto hoy.

const dia = new Date();
const horaActual =  11;

let horaApertura;
let mensaje; //'Está cerrado, abrimos a las x'

//Resolución sin usar operador ternario:

//if( dia === 0 || dia === 6){
// if( [0,6].includes(dia)){
//     console.log('Fin de semana');
//     horaApertura =9;
// } else{
//     console.log('Entre semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11;

console.log(horaApertura);

// if (horaActual >= horaApertura) {

//         mensaje = 'Está abierto';
// }else {
   
//    mensaje = 'Está cerrado, hoy abrimos a las' +
//    horaApertura;
// mensaje =`Está cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;


console.log(horaActual, mensaje);