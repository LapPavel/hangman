// Функция для добавления головы
export function addHead() {
  var svgns = "http://www.w3.org/2000/svg";
  var circle = document.createElementNS(svgns, 'circle');
  circle.setAttributeNS(null, 'cx', '140');
  circle.setAttributeNS(null, 'cy', '70');
  circle.setAttributeNS(null, 'r', '20');
  circle.setAttributeNS(null, 'style', 'stroke: #000; stroke-width: 2; fill: #fff;');
  document.querySelector('svg').appendChild(circle);
}

// Вызовите эту функцию, когда игрок допустит ошибку
addHead();

export function addBody() {
  var svgns = "http://www.w3.org/2000/svg";
  var rect = document.createElementNS(svgns, 'rect');
  rect.setAttributeNS(null, 'x', '130');
  rect.setAttributeNS(null, 'y', '90');
  rect.setAttributeNS(null, 'width', '20');
  rect.setAttributeNS(null, 'height', '50');
  rect.setAttributeNS(null, 'style', 'stroke: #000; stroke-width: 2; fill: #fff;');
  document.querySelector('svg').appendChild(rect);
}

// Функция для добавления одной руки
export function addArm(side) {
  var svgns = "http://www.w3.org/2000/svg";
  var line = document.createElementNS(svgns, 'line');
  line.setAttributeNS(null, 'x1', '140');
  line.setAttributeNS(null, 'y1', '110');
  line.setAttributeNS(null, 'x2', side === 'left' ? '120' : '160');
  line.setAttributeNS(null, 'y2', '140');
  line.setAttributeNS(null, 'style', 'stroke: #000; stroke-width: 2;');
  document.querySelector('svg').appendChild(line);
}

// Функция для добавления одной ноги
export function addLeg(side) {
  var svgns = "http://www.w3.org/2000/svg";
  var line = document.createElementNS(svgns, 'line');
  line.setAttributeNS(null, 'x1', '140');
  line.setAttributeNS(null, 'y1', '140');
  line.setAttributeNS(null, 'x2', side === 'left' ? '120' : '160');
  line.setAttributeNS(null, 'y2', '170');
  line.setAttributeNS(null, 'style', 'stroke: #000; stroke-width: 2;');
  document.querySelector('svg').appendChild(line);
}

// Пример вызова функций
addBody();
addArm('left');
addArm('right');
addLeg('left');
addLeg('right');