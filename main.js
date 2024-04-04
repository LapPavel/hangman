import './src/style/style.css'
import gallows from './src/js/gallows.js'
import { setupCounter } from './src/js/counter.js'

const gallowsSVG = gallows.cloneNode(true)
console.log(gallowsSVG)

document.querySelector('#app').innerHTML = `
  ${gallowsSVG.outerHTML}
  <h1>Hello Vite!</h1>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
  <p class="read-the-docs">
    Click on the Vite logo to learn more
  </p>
`

setupCounter(document.querySelector('#counter'))
