import './src/style/normalize.css';
import './src/style/style.css';
import { gallowsBox } from './src/js/gallowsBox';
import { wordBox } from './src/js/wordBox';

const appBody = document.querySelector('#app');
appBody.prepend(gallowsBox, wordBox);
