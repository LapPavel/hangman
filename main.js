import './src/style/style.css'
import gallows from './src/js/gallows.js'
import { setupCounter } from './src/js/counter.js'
import { addHead, addBody, addArm } from './src/js/man.js'

const gallowsSVG = gallows.cloneNode(true)

const appBody = document.querySelector('#app')
appBody.innerHTML = `
  <h1>Hello Vite!</h1>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
  <div class="card">
    <button id="addhead" type="button">addHead</button>
  </div>
  <div class="card">
    <button id="addbody" type="button">addBody</button>
  </div>
  <div class="card">
    <button id="addarm" type="button">addArm</button>
  </div>
  <div class="card">
    button id="addleng" type="button">addLeng</button>
  </div>
`
appBody.prepend(gallowsSVG)

setupCounter(document.querySelector('#counter'))
document.querySelector('#addhead').addEventListener('click', () => {
  addHead(gallowsSVG)
})
document.querySelector('#addbody').addEventListener('click', () => {
  addBody(gallowsSVG)
})
document.querySelector('#addarm').addEventListener('click', () => {
  let count = 0;
  addArm(gallowsSVG, count++ === 0 ? 'left' : 'right')
})