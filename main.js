import './src/style/style.css'
import javascriptLogo from './src/assets/javascript.svg'
import viteLogo from './src/assets/vite.svg'
import hangman from './src/assets/hangman.svg'
import { setupCounter } from './src/js/counter.js'

document.querySelector('#app').innerHTML = `
  <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
  </a>
  <img src="${hangman}" class="logo" alt="Hangman" />
  <h1>Hello Vite!</h1>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
  <p class="read-the-docs">
    Click on the Vite logo to learn more
  </p>
`

setupCounter(document.querySelector('#counter'))
