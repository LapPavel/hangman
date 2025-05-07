import Modal from './modal';

const modalBox = document.createElement('div');
modalBox.classList.add('modal-box');

const modalWin = new Modal(true);
const modalLose = new Modal(false);
modalBox.append(modalWin.modalWindow, modalLose.modalWindow);

export { modalBox, modalWin, modalLose };
