import createKeys from './alphabet';
import { gallowsSVG } from './gallowsBox';
import wordList from './worldList';
import manFunction from './man';
import showModal from './modal';

function startGame() {
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const gameIndex = getRandomInt(wordList.length - 1);
  let attempt = 0;

  const wordContainer = document.createElement('div');
  wordContainer.classList.add('words-box');

  const lettersBox = document.createElement('div');
  lettersBox.classList.add('letters-box');
  [...wordList[gameIndex].word].forEach((letter) => {
    const letterContainer = document.createElement('div');
    letterContainer.classList.add('letters-box__letter');
    letterContainer.textContent = letter;
    lettersBox.append(letterContainer);
  });

  const hintText = document.createElement('h3');
  hintText.classList.add('hint-title');
  hintText.textContent = 'Hint: ';
  hintText.insertAdjacentHTML(
    'beforeend',
    `<span>${wordList[gameIndex].hint}</span>`
  );

  const attemptText = document.createElement('h3');
  attemptText.classList.add('attempt-title');
  attemptText.textContent = 'Used attempt: ';
  const attemptValue = document.createElement('span');
  attemptValue.classList.add('attempt-text');
  attemptValue.textContent = `${attempt} / 6`;
  attemptText.append(attemptValue);

  function updateAttempt() {
    attemptValue.textContent = `${attempt} / 6`;
  }

  const alphabetKeys = createKeys();
  wordContainer.append(lettersBox, hintText, attemptText, alphabetKeys);

  function setListener(element) {
    element.addEventListener('click', (event) => {
      if (event.target.classList.contains('alphabet__key') && attempt < 6) {
        const guessedLetter = event.target.textContent;
        const { word } = wordList[gameIndex];

        if (word.includes(guessedLetter)) {
          const letters = [...lettersBox.children];
          word.split('').forEach((letter, index) => {
            if (letter === guessedLetter) {
              letters[index].classList.add('letter-box__letter_guessed');
            }
          });

          const hasWordGuessed = letters.every((letter) =>
            letter.classList.contains('letter-box__letter_guessed')
          );
          if (hasWordGuessed) {
            const modal = showModal(true, word);
            wordContainer.parentElement.append(modal);
            modal.showModal();
            attempt = 6;
          }
        } else {
          if (attempt <= 5) {
            manFunction[attempt](gallowsSVG);
          }
          attempt += 1;
          updateAttempt();
          if (attempt === 6) {
            const modal = showModal(false, word);
            wordContainer.parentElement.append(modal);
            modal.showModal();
          }
        }
        event.target.setAttribute('disabled', '');
      }
    });
  }
  setListener(alphabetKeys);
  return wordContainer;
}

const wordBox = startGame();

export default wordBox;
