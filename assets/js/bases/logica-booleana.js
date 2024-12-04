const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}
const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not !');

console.log(!true); //false
console.log(!false); //true

console.log(!regresaFalse()); //true

console.log('----------------');

console.warn('And &&');

console.log(true && true); //true
console.log(true && false); //false
console.log(true && !false); //true

console.log(regresaFalse() && regresaTrue());//false
console.log(regresaTrue() && regresaFalse());//false
console.log('4 condiciones con && ', true && true && true && false);
regresaFalse() && regresaTrue();

console.log('----------------');

console.warn('Or ||');

console.log(true || false); //true

console.log(regresaTrue() || regresaFalse()); //true;

console.log('4 condiciones con || ', true || true || true || false);

console.log('----------------');

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyfalse = false;

const a1 = false && 'Hola Mundo' && 150;
console.log({a1});

const a2 =  'Hola' && 'Mundo' && soyfalse;
console.log({a1, a2});

const a3 =  soyfalse || 'Ya no soy falso';
console.log({a1, a2, a3});

const a4 =  soyfalse || soyUndefined || soyNull || 'Ya no soy falso' || true;

const a5 =  soyfalse || soyUndefined || regresaTrue() || 'Ya no soy falso' || true;
console.log({a1, a2, a3, a4, a5});

if (true || true || true || false) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}