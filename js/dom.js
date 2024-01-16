const divs= document.getElementsByTagName('div');
console.log(divs);
const h2s = document.getElementsByTagName('h2');
console.log(h2s);
const titulo = document.getElementById('titulo');
console.log(titulo);
const elementsMarginTop2 = document.getElementsByClassName('mt-2');
console.log(elementsMarginTop2);

function alterarHtml(){
    titulo.textContent = 'Novo título';
    titulo.style.color = '#ac4389';
    //elementsMarginTop2.className = 'mt-4';
}

