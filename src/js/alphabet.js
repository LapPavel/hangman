const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));

const alphabetKeys = document.createElement('div');
alphabetKeys.classList.add('alphabet');
alphabet.forEach((el) => {
  const key = document.createElement('button');
  key.textContent = el;
  key.classList.add('alphabet__key');
  alphabetKeys.append(key);
});

export { alphabet, alphabetKeys }