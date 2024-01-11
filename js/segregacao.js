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

const verdadeiro = true;
const naoVerdadeiro = !verdadeiro;

const tudoEVerdadeiro = verdadeiro && naoVerdadeiro;
const tudoEFalso = !verdadeiro && naoVerdadeiro;
const algumEVerdadeiro = verdadeiro || naoVerdadeiro;
const algumEFalso = verdadeiro || naoVerdadeiro;

console.log('verdadeiro', verdadeiro);
console.log('naoVerdadeiro', naoVerdadeiro);
console.log('tudoEVerdadeiro', tudoEVerdadeiro);
console.log('tudoEFalso', tudoEFalso);
console.log('algumEVerdadeiro', algumEVerdadeiro);
console.log('algumEFalso', algumEFalso);