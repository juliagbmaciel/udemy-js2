function rand (min, max){
    return Math.floor(Math.random() * (max - min) + min)
}
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode (rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]{}!@#$%*()_+=-'
const geraSimbolo = () => 
console.log(geraMaiuscula())