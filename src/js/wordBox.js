import { alphabetKeys } from './alphabet';
import { gallowsSVG } from './gallowsBox';
import wordList from './worldList';
import manFunction from './man';

const getRandomInt = (max) => Math.floor(Math.random() * max);
const gameIndex = getRandomInt(wordList.length - 1);
let attempt = 0;

const wordBox = document.createElement('div');
wordBox.classList.add('words-box');

const lettersBox = document.createElement('div');
lettersBox.classList.add('letter-box');
[...wordList[gameIndex].word].forEach((letter) => {
  const letterContainer = document.createElement('div');
  letterContainer.classList.add('letter-box__letter');
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

wordBox.append(lettersBox, hintText, attemptText, alphabetKeys);

function setListener(element) {
  element.addEventListener('click', (event) => {
    if (event.target.classList.contains('alphabet__key') && attempt < 6) {
      const guessedLetter = event.target.textContent;
      const { word } = wordList[gameIndex];

      if (word.includes(guessedLetter)) {
        const letters = [...lettersBox.children];
        word.split('').forEach((letter, index) => {
          if (letter === guessedLetter) {
            lettersBox.children[index].classList.add(
              'letter-box__letter_guessed'
            );
          }
        });

        const hasWordGuessed = letters.every((letter) =>
          letter.classList.contains('letter-box__letter_guessed')
        );
        if (hasWordGuessed) {
          // console.log('He-he!');
          attempt = 6;
        }
      } else {
        if (attempt <= 5) {
          manFunction[attempt](gallowsSVG);
        }
        attempt += 1;
        updateAttempt();
        if (attempt === 6) {
          // console.log('Not he-he!');
        }
      }
      event.target.setAttribute('disabled', '');
    }
  });
}
setListener(alphabetKeys);

export default wordBox;
