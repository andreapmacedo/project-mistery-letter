const btnGenerateLetter = document.getElementById('criar-carta');
const inputTextField = document.getElementById('carta-texto');
const generatedLetter = document.getElementById('carta-gerada');
const letterCounter = document.querySelector('#carta-contador');
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const style = ['newspaper', 'magazine1', 'magazine2'];
const inclination = ['skewleft', 'skewright'];

function totalWords() {
  letterCounter.innerText = generatedLetter.children.length;
}

function addRandomClass() {
  const rdmSz = Math.floor(Math.random() * (size.length - 0) + 0);
  const rdmRt = Math.floor(Math.random() * (rotation.length - 0) + 0);
  const rdmInc = Math.floor(Math.random() * (inclination.length - 0) + 0);
  const rdmStl = Math.floor(Math.random() * (style.length - 0) + 0);
  const lClasses = `${size[rdmSz]} ${rotation[rdmRt]} ${inclination[rdmInc]} ${style[rdmStl]}`;
  // console.log(lClasses);
  return lClasses;
}

function resetClasses(event) {
  const spanLetter = event.target;
  spanLetter.className = '';
  spanLetter.className = addRandomClass();
}

function createSpan(letter) {
  const spanLetter = document.createElement('span');
  spanLetter.innerText = letter;
  spanLetter.className = addRandomClass();
  spanLetter.addEventListener('click', resetClasses);
  generatedLetter.appendChild(spanLetter);
}

function generateLetter() {
  generatedLetter.innerHTML = '';
  const input = inputTextField.value;
  const wordsArray = (input).split(' ');
  if (input === null || input === '' || input === ' ') {
    generatedLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    wordsArray.forEach((word) => createSpan(word));
  }
  totalWords();
}

window.onload = () => {
  btnGenerateLetter.addEventListener('click', generateLetter);
};
