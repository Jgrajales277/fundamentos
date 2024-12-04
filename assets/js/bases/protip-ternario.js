const elMayor = ( a, b ) => (a > b) ? a : b;

console.log(elMayor(10,15));

const tieneMembresia = (miembro) => miembro ? '2 dólares' : '10 dólares'
console.log(tieneMembresia(true));

const amiga = true;
const amigasArr = [
    'San',
    'Vivi',
    'Mechas',
    'Cami',
    amiga ? 'Jazz' : 'Yuliana',
    elMayor(10,15)
]

console.log(amigasArr);

const nota = 65;
const calificacion = nota >= 95 ? 'A+':
                     nota >= 90 ? 'A':
                     nota >= 85 ? 'B+':
                     nota >= 80 ? 'B':
                     nota >= 75 ? 'C+':
                     nota >= 70 ? 'C':'F'

console.log({nota, calificacion});
