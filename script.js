const btnGenerateLetter = document.getElementById('criar-carta');
const inputTextField = document.getElementById('carta-texto');
const generatedLetter = document.getElementById('carta-gerada');


//- Logica para verificação dos requisitos e montagem da carta.
function generateLetter() {
  
  //-- Remover as tags `span` caso existam.
  while (generatedLetter.firstChild) {
    generatedLetter.removeChild(generatedLetter.firstChild);
  }
  //-- quebra a frase em palavras e adiciona em uma lista.
  let sentence = (inputTextField.value).split(' ');
  
  // O código abaixo foi pesquisado em: https://pt.stackoverflow.com/questions/484146/como-contar-ocorr%C3%AAncias-de-um-valor-dentro-de-um-array
  //-- conta a quantidade de `spaces bars` para verificar se a sentença é formada só por este tipo de caracter
  let countSpaceBar = sentence.filter(x => x == "").length;

  //-- Caso a sentença seja válida, cria os elementos `span` que construirão a carta.
  if (sentence.length > 0 && countSpaceBar < sentence.length) {
    for (let i in sentence)
    {
      createSpan(sentence[i]);
    }
  } else {
    createSpan('Por favor, digite o conteúdo da carta.');
  }
  
}

//-- Adiciona os elementos `span` ao seu pai `p`
function createSpan(phrase){
  const node = document.createElement('span');
  node.innerText = phrase;
  // node.innerHTML = phrase;
  generatedLetter.appendChild(node);
}


window.onload = function () {
  
  btnGenerateLetter.addEventListener('click', generateLetter);

}
