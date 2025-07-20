import { state } from '../logic/state.js';
import { updateDisplay } from './display.js';

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const maxLength = 30;

export function insertDigits() {
  const buttons = document.querySelector('.buttons');

  buttons.addEventListener('click', (event) => {
    const key = event.target.textContent;

    if (!digits.includes(key)) return;

    if (key === ',') {
      if (!state.sign && !state.a.includes('.')) {
        state.a += '.';
      } else if (state.sign && !state.b.includes('.')) {
        state.b += '.';
      }
      updateDisplay(state.a, state.sign, state.b);
      return;
    }

    if (!state.sign) {
      if (state.finish) {
        state.a = '';
        state.finish = false;
      }
      if (state.a.length >= maxLength) return;
      state.a += key;
    } else {
      if (state.b.length >= maxLength) return;
      state.b += key;
    }
    updateDisplay(state.a, state.sign, state.b);
  });
}
