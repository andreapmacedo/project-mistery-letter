const btnGenerateLetter = document.getElementById('criar-carta');
const inputTextField = document.getElementById('carta-texto');
const generatedLetter = document.getElementById('carta-gerada');



function generateLetter() {

  let sentence = (inputTextField.value).split(' ');
  
  //console.log(sentence);
  // O código abaixo foi pesquisado em:
  // https://pt.stackoverflow.com/questions/484146/como-contar-ocorr%C3%AAncias-de-um-valor-dentro-de-um-array
  let countSpaceBar = sentence.filter(x => x == "").length;

  
  if (sentence.length > 0 && countSpaceBar < sentence.length) {
    for (let i in sentence) {
      if (sentence[i] !== ''){
        const node = document.createElement('span');
        node.innerText = sentence[i];
        generatedLetter.appendChild(node);
      }
    }
  } else {
    const node = document.createElement('span');
    node.innerText = 'Por favor, digite o conteúdo da carta.';
    generatedLetter.appendChild(node);
  }
  
}


window.onload = function () {
  
  btnGenerateLetter.addEventListener('click', generateLetter);

}
