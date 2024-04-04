const SVG_NS = 'http://www.w3.org/2000/svg'

export function addHead(element) {
  element.insertAdjacentHTML(
    'beforeend',
    '<circle cx="140" cy="70" r="20" style="stroke: #000; stroke-width: 2; fill: #fff;"></circle>'
  )
}

export function addBody(element) {
  const rect = document.createElementNS(SVG_NS, 'rect');
  rect.setAttribute('x', '130');
  rect.setAttribute('y', '90');
  rect.setAttribute('width', '20');
  rect.setAttribute('height', '50');
  rect.setAttribute('style', 'stroke: #000; stroke-width: 2; fill: #fff;');
  element.appendChild(rect);
}

export function addArm(element, side) {
  const line = document.createElementNS(SVG_NS, 'line');
  line.setAttribute('x1', '140');
  line.setAttribute('y1', '110');
  line.setAttribute('x2', side === 'left' ? '120' : '160');
  line.setAttribute('y2', '140');
  line.setAttribute('style', 'stroke: #000; stroke-width: 2;');
  element.appendChild(line);
}

export function addLeg(element, side) {
  const line = document.createElementNS(SVG_NS, 'line');
  line.setAttribute('x1', '140');
  line.setAttribute('y1', '140');
  line.setAttribute('x2', side === 'left' ? '120' : '160');
  line.setAttribute('y2', '170');
  line.setAttribute('style', 'stroke: #000; stroke-width: 2;');
  element.appendChild(line);
}

// Вызовите эту функцию, когда игрок допустит ошибку
addHead();
addBody();
addArm('left');
addArm('right');
addLeg('left');
addLeg('right');
