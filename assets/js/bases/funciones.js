
const saludar = function(nombre){

    console.log('Hola ' + nombre);

    return [1,2,3,4];
}

saludar('Juliana')


const saludar2 = nombre => {
    console.log('Hola ' + nombre);

}

const retorno = saludar('Juliana');
console.log(retorno);

function sumar(a,b) {
    return a + b;

}

console.log(sumar(1,2));

const sumar2 = (a,b) => {
    return a+b;
}

console.log(sumar(1,2));

const sumar3 = (a,b)=> a+b;
console.log(sumar(3,2));


function getAleatorio(){
    return Math.random();
}

console.log(getAleatorio());

const getAleatorio2= () => Math.random();
console.log(getAleatorio2());

