import videoWon from '../animation/Cat2O_won.webm';
import videoLose from '../animation/Cat2O_lose.webm';

export default class Modal {
  constructor(isWon) {
    this.isWon = isWon;
    this.modalWindow = this.createModal();
  }

  createModal() {
    const modalWindow = document.createElement('dialog');
    modalWindow.classList.add('modal');

    this.modalVideo = this.createVideo();
    this.modalTitle = this.createTitle();
    this.modalText = this.createText();
    this.modalButton = this.createButton();

    modalWindow.append(
      this.modalVideo,
      this.modalTitle,
      this.modalText,
      this.modalButton
    );
    return modalWindow;
  }

  createVideo() {
    const modalVideo = document.createElement('video');
    modalVideo.classList.add('modal__video');
    modalVideo.setAttribute('src', `${this.isWon ? videoWon : videoLose}`);
    modalVideo.setAttribute('playsinline', '');
    modalVideo.setAttribute('autoplay', '');
    modalVideo.setAttribute('loop', '');
    modalVideo.setAttribute('muted', '');
    return modalVideo;
  }

  createTitle() {
    const modalTitle = document.createElement('h3');
    modalTitle.classList.add('modal__title');
    modalTitle.textContent = this.isWon ? 'Congrats!' : 'Game Over!';
    return modalTitle;
  }

  createText() {
    this.modalText = document.createElement('p');
    this.modalText.classList.add('modal__text');
    return this.modalText;
  }

  createButton() {
    this.modalButton = document.createElement('button');
    this.modalButton.classList.add('modal__button');
    this.modalButton.textContent = 'TRY AGAIN';
    this.modalButton.addEventListener('click', () => {
      window.location.reload();
    });
    return this.modalButton;
  }

  open(word) {
    this.modalText.textContent = `${this.isWon ? 'You guessed the word:' : 'The correct word was:'} ${word}`;
    this.modalWindow.showModal();
  }
}
