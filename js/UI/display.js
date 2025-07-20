const screen = document.querySelector('.calculator-screen p');

function fontSizeChange() {
  const screenWidth = screen.parentElement.clientWidth - 40;
  let fontSize = 64;

  screen.style.fontSize = fontSize + 'px';
  screen.style.whiteSpace = 'nowrap';

  while (screen.scrollWidth > screenWidth && fontSize > 16) {
    fontSize -= 2;
    screen.style.fontSize = fontSize + 'px';
  }

  if (fontSize <= 16) {
    screen.style.whiteSpace = 'normal';
  }
}

export function updateDisplay(a, sign, b) {
  let expression = a;
  if (sign) expression += ' ' + sign;
  if (b) expression += ' ' + b;

  screen.textContent = expression || 0;
  fontSizeChange();
  console.log(a, sign, b);
}
