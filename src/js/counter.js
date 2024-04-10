export default function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    const el = element;
    el.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
