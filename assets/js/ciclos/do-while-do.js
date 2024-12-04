const carros = [ 'Ford', 'Mazda', 'Toyota'];
console.warn('While');

let i = 0;
while( carros[i]){
    
    if( i === 1){
        i++;
        continue;
    }
    console.log(carros[i]);
    
    i++;
    
}

console.warn('Do While');
let j = 0 

do {
    console.log(carros[j]);
    j++;
} while( carros[j]);