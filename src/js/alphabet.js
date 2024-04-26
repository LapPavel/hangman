function createKeys() {
  const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

  const keys = document.createElement('div');
  keys.classList.add('alphabet');
  alphabet.forEach((el) => {
    const key = document.createElement('button');
    key.textContent = el;
    key.classList.add('alphabet__key');
    keys.append(key);
  });
  return keys;
}

export default createKeys;
