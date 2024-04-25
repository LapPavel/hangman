import gallows from './gallows';

const gallowsSVG = gallows.cloneNode(true);

const gallowsBox = document.createElement('div');
gallowsBox.classList.add('gallows-box');
const gallowsText = document.createElement('h2');
gallowsText.classList.add('gallows-box__title');
gallowsText.textContent = 'HANGMAN GAME';
gallowsBox.append(gallowsSVG, gallowsText);

export { gallowsSVG, gallowsBox };
