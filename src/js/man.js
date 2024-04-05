function addHead(element) {
  element.insertAdjacentHTML(
    "beforeend",
    '<circle cx="140" cy="70" r="20" style="stroke: #000; stroke-width: 2; fill: #fff;"></circle>'
  );
}

function addBody(element) {
  element.insertAdjacentHTML(
    "beforeend",
    '<line x1="140" y1="90" x2="140" y2="150" style="stroke:#000; stroke-width:2"></line>'
  );
}

function addArm(element, side) {
  element.insertAdjacentHTML(
    "beforeend",
    `<line x1="140" y1="100" x2="${
      side === "left" ? "120" : "160"
    }" y2="130" style="stroke:#000; stroke-width:2"></line>`
  );
}

function addLeg(element, side) {
  element.insertAdjacentHTML(
    "beforeend",
    `<line x1="140" y1="150" x2="${
      side === "left" ? "120" : "160"
    }" y2="180" style="stroke:#000; stroke-width:2"></line>`
  );
}

export const manFunction = [
  (el) => addHead(el),
  (el) => addBody(el),
  (el) => addArm(el, 'left'),
  (el) => addArm(el, 'right'),
  (el) => addLeg(el, 'left'),
  (el) => addLeg(el, 'right')
]
