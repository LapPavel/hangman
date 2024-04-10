import './src/style/normalize.css';
import './src/style/style.css';
import gallows from './src/js/gallows';
import manFunction from './src/js/man';
import { alphabetKeys } from './src/js/alphabet';
import wordList from './src/js/worldList';

const gallowsSVG = gallows.cloneNode(true);

const getRandomInt = (max) => Math.floor(Math.random() * (max - 1));
const gameIndex = getRandomInt(wordList.length - 1);

const appBody = document.querySelector('#app');
appBody.innerHTML = `
  <div class="card">
    <button id="man" type="button">add man parts</button>
  </div>`;
const gallowsBox = document.createElement('div');
gallowsBox.classList.add('gallows-box');
const gallowsText = document.createElement('h2');
gallowsText.classList.add('gallows-box__title');
gallowsText.textContent = 'HANGMAN GAME';
gallowsBox.append(gallowsSVG, gallowsText);

const wordBox = document.createElement('div');
wordBox.classList.add('words-box');

const letterBox = document.createElement('div');
letterBox.classList.add('letter-box');

const hintText = document.createElement('h3');
hintText.classList.add('hint-text');
hintText.textContent = 'Hint: ';
hintText.insertAdjacentHTML(
  'beforeend',
  `<span>${wordList[gameIndex].hint}</span>`
);

wordBox.append(hintText, alphabetKeys);

appBody.prepend(letterBox, gallowsBox, wordBox);

let numManParts = 0;
document.querySelector('#man').addEventListener('click', () => {
  if (numManParts <= 5) manFunction[numManParts](gallowsSVG);
  numManParts += 1;
});
