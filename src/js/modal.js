import videoWon from '../animation/Cat2O_won.webm';
import videoLose from '../animation/Cat2O_lose.webm';

export default function showModal(isWon, word) {
  const modalWindow = document.createElement('dialog');
  modalWindow.classList.add('modal');

  const modalVideo = document.createElement('video');
  modalVideo.classList.add('modal__video');
  modalVideo.setAttribute('src', `${isWon ? videoWon : videoLose}`);
  modalVideo.setAttribute('autoplay', '');
  modalVideo.setAttribute('loop', '');

  const modalTitle = document.createElement('h3');
  modalTitle.classList.add('modal__title');
  modalTitle.textContent = `${isWon ? 'Congrats!' : 'Game Over!'}`;

  const modalText = document.createElement('p');
  modalText.classList.add('modal__text');
  modalText.textContent = `${isWon ? 'You guessed the word:' : 'the correct word was:'} ${word}`;

  const modalButton = document.createElement('button');
  modalButton.classList.add('modal__button');
  modalButton.textContent = 'TRY AGAIN';
  modalButton.addEventListener('click', () => {
    modalWindow.close();
    modalWindow.remove();
  });

  modalWindow.append(modalVideo, modalTitle, modalText, modalButton);
  return modalWindow;
}
