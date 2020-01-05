'use strict';
const field = document.querySelector('.input');
const containerWord = document.querySelector('.words');
const appWord = document.querySelector('.app__word');
const button = document.querySelector('.btn');

const correctWord = [
  'casaca',
  'casasa',
  'cacaca'
];

for (let i = 0; i < correctWord.length; i++) {
  console.log(`"${correctWord[i]}"`);
}
let word = 0;
containerWord.innerHTML = word;

/* 
function getCorrectWord(max) {
  return correctWord
} */

let myRandomWord = getCorrectWord(`casaca`);

function tryButton() {
  const userWord = (field.value);

  if (myRandomWord === userWord) {
    alert("ooh yeah! You get it!");
    appWord.innerHTML = 'You get it!';

  } else if (myRandomWord > userWord) {
    appWord.innerHTML = 'Too short';
    containerword.innerHTML = word;

  } else if (userWord > 'casaca') {
    appWord.innerHTML = 'Incorrect! Your word is shorter than ours';
    containerWord.innerHTML = word;

  } else {
    appWord.innerHTML = 'Too long';
    containerWord.innerHTML = word;
  }

}

button.addEventListener('click', tryButton);

const resetButton = document.querySelector('.js__button');

function resetInput() {
  word = 0;
  containerWord.innerHTML = word;
  field.value = '';
  myRandomWord = getCorrectWord(`casaca`);
}

resetButton.addEventListener('click', resetInput);

