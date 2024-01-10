const OlaMundo = 'Olá Mundo, introdução a JS';
const DataAtual = new Date();

console.log('Olá mundo, introdução a JS');
console.log(`Data hora: ${DataAtual}`);

function mensagem(mensagem){
    alert ('mensagem');
}

function mensagem2(){
    mensagem('Aprendendo funções');
}

const mensagemFinal = (mensagemFinal) => {
    console.log(mensagemFinal);
}

mensagemFinal('Concluimos a execução');