import { state } from '../logic/state.js';
import { updateDisplay } from './display.js';
import { digits } from '../logic/constants.js';
import { inputDigit } from '../logic/inputDigit.js';

export function insertDigits() {
  const buttons = document.querySelector('.buttons');

  buttons.addEventListener('click', (event) => {
    const key = event.target.textContent;

    if (!digits.includes(key)) return;

    inputDigit(key);
    updateDisplay(state.a, state.sign, state.b);
  });
}
