
const numero1 = 32;
const numero2 = 24;
const numero3 = 14;
// const numero4 = 89;
const stringNumero = '1';

console.log('é igual', numero4 == stringNumero);
console.log('é igual', numero4 === stringNumero);
console.log('é diferente', numero4 != stringNumero);
console.log('é diferente', numero4 !== stringNumero);

console.log('numero3 é maior igual que numero2:', numero3 >= numero2);
console.log('numero4 é menor que numero2:', numero4 < numero2);

console.log('Adição:', numero1 + numero2);
console.log('Subtração:', numero4 - numero1);
console.log('Multiplicação:', numero3 * numero1);
console.log('Divisão:', numero1 / numero3);
console.log('Módulo:', numero2 % numero3);

if(numero3 > numero4){
    console.log('Numero 3 é maior');
}else if(numero2 > numero3){
    console.log('Número 2 é maior');
}else{
        console.log('Número 4 é maior');
    }

switch(numero4){
    case 65:
        console.log('sessenta e cinco');
        break
    case 89:
        console.log('oitenta e nove');
        break
    case 32:
        console.log('trinta e dois');
    default:
        console.log('Número não encontrado');
}


