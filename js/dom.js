const divs= document.getElementsByTagName('div');
//console.log(divs);
const h2s = document.getElementsByTagName('h2');
//console.log(h2s);
const titulo = document.getElementById('titulo');
//console.log(titulo);
const input = document.getElementById('input');
const paragrafo = document.getElementById('paragrafo');
const elementsMarginTop2 = document.getElementsByClassName('mt-2');
//console.log(elementsMarginTop2);

function alterarHtml(){
    titulo.textContent = input.value;
    titulo.style.color = '#ac4389';
    for(let element of elementsMarginTop2){
        element.className = 'mt-4';
    }
    input.value = '';

    const novoP = document.createElement('p');
    novoP.textContent = 'Novo texto adicionado via JavaScrip DOM';

    paragrafo.parentNode.appendChild(novoP);
}

// function alterarHtml(){
//     titulo.textContent = 'Novo título';
//     titulo.style.color = '#ac4389';
//     for(let element of elementsMarginTop2){
//         element.className = 'mt-4';
//     }
//     //elementsMarginTop2.className = 'mt-4';
// 
