import './src/style/normalize.css';
import './src/style/style.css';
import { gallowsBox } from './src/js/gallowsBox';
import wordBox from './src/js/wordBox';
import modalWindow from './src/js/modal';

const appBody = document.querySelector('#app');
appBody.prepend(gallowsBox, wordBox, modalWindow);
