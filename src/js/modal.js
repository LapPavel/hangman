import '@aarsteinmedia/dotlottie-player-light';
import animationLottie from '../animation/gameAnimation.lottie?url';

function createModal() {
  const modalWindow = document.createElement('dialog');
  modalWindow.classList.add('modal');

  const modalLottie = document.createElement('dotlottie-player');
  modalLottie.classList.add('modal__lottie');
  modalLottie.setAttribute('autoplay', '');
  modalLottie.setAttribute('loop', '');
  modalLottie.load(animationLottie);

  const modalTitle = document.createElement('h3');
  modalTitle.classList.add('modal__title');

  const modalText = document.createElement('p');
  modalText.classList.add('modal__text');

  const modalButton = document.createElement('button');
  modalButton.classList.add('modal__button');
  modalButton.textContent = 'TRY AGAIN';
  modalButton.addEventListener('click', () => {
    modalWindow.close();
    window.location.reload();
  });

  modalWindow.append(modalLottie, modalTitle, modalText, modalButton);

  return { modalWindow, modalTitle, modalText, modalLottie };
}

const { modalWindow, modalTitle, modalText, modalLottie } = createModal();

function openModal(isWon, word) {
  modalTitle.textContent = isWon ? 'Congrats!' : 'Game Over!';
  modalText.textContent = isWon
    ? `You guessed the word: ${word}`
    : `The correct word was: ${word}`;
  if (!isWon) {
    modalLottie.next();
  }
  modalWindow.showModal();
}

export default modalWindow;
export { openModal };
