
//exibir no console 150 multiplos de 3

for(let multiplo = 0; multiplo < 150; multiplo++){
    //console.log(multiplo*3); 
}

//executar enquanto a variavel de controle for uma divisao exata de 23
let indice = 1;
while(indice % 23 !== 0){
    //console.log(indice);
    indice++;
}

//executar uma primeira vez e executar se o numero for par se for parar o loop
let numero = 0;

do{
    console.log(numero);
    ++numero;
}while(numero % 2 !== 0);

//percorrer uma lista de produtos e exibi-los
const produtos = ['café', 'shampoo', 'azeite', 'bolacha', 'açucar'];
for(const produto of produtos){
    console.log(produto);
}