import './src/style/normalize.css'
import './src/style/style.css'
import gallows from './src/js/gallows.js'
import { manFunction } from './src/js/man.js'
import { alphabet, alphabetKeys } from './src/js/alphabet.js'
import { wordList } from './src/js/worldList.js'

const gallowsSVG = gallows.cloneNode(true)

const getRandomInt = (max) => Math.floor(Math.random() * (max - 1));
const gameIndex = getRandomInt(wordList.length - 1);

const appBody = document.querySelector('#app')
appBody.innerHTML = `
  <div class="card">
    <button id="man" type="button">add man parts</button>
  </div>
`
const gallowsBox = document.createElement('div');
gallowsBox.classList.add('gallows-box');
const gallowsText = document.createElement('h2');
gallowsText.classList.add('gallows-box__title')
gallowsText.textContent = 'HANGMAN GAME';
gallowsBox.append(gallowsSVG, gallowsText);

const wordBox = document.createElement('div');
wordBox.classList.add('words-box');

const letterBox = document.createElement('div');
letterBox.classList.add('letter-box');

const helpText = document.createElement('h3');
helpText.classList.add('help-text');
helpText.textContent = 'Help: ';
helpText.insertAdjacentHTML('beforeend', `<span>${wordList[gameIndex].hint}</span>`)

wordBox.append(helpText, alphabetKeys)

appBody.prepend(letterBox, gallowsBox, wordBox);

let numManParts = 0
document.querySelector('#man').addEventListener('click', () => {
  if (numManParts <= 5)  manFunction[numManParts++](gallowsSVG)
})
