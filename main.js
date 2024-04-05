import './src/style/style.css'
import gallows from './src/js/gallows.js'
import { manFunction } from './src/js/man.js'

const gallowsSVG = gallows.cloneNode(true)

const appBody = document.querySelector('#app')
appBody.innerHTML = `
  <div class="card">
    <button id="man" type="button">add man parts</button>
  </div>
`
appBody.prepend(gallowsSVG)

let numManParts = 0
document.querySelector('#man').addEventListener('click', () => {
  if (numManParts <= 5)  manFunction[numManParts++](gallowsSVG)
})
