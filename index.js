function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}

function displayKeyPress(event) {
  const displayParagraph = document.getElementById('keyPressDisplay');
  if (displayParagraph) {
    displayParagraph.textContent = `Key pressed: ${event.key.toUpperCase()}`;
  }
}

function displayUserInput(event) {
  const inputDisplay = document.getElementById('inputDisplay');
  const textInput = document.getElementById('textInput');

  if (!inputDisplay) return;

  if (event && event.target) {
    inputDisplay.textContent = `You typed: ${event.target.value}`;
  } else if (textInput) {
    inputDisplay.textContent = `You typed: ${textInput.value}`;
  }
}

function setupEventListeners() {
  const changeColorBtn = document.getElementById('changeColorButton');
  const resetColorBtn = document.getElementById('resetColorButton');
  const textInput = document.getElementById('textInput');

  if (changeColorBtn) {
    changeColorBtn.addEventListener('click', changeBackgroundColor);
  }

  if (resetColorBtn) {
    resetColorBtn.addEventListener('dblclick', resetBackgroundColor);
  }

  document.addEventListener('keydown', displayKeyPress);

  if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};
