import { state } from './state.js';
import { updateDisplay } from '../UI/display.js';

const specialButtons = ['AC', '+/-', '%'];

export function insertSpecialBtn() {
  const buttons = document.querySelector('.buttons');

  buttons.addEventListener('click', (event) => {
    const key = event.target.textContent;
    if (!specialButtons.includes(key)) return;

    switch (key) {
      case 'AC':
        state.a = '';
        state.b = '';
        state.sign = '';
        state.finish = false;
        updateDisplay('0', '', '');
        break;

      case '+/-':
        if (state.b) {
          state.b = state.b.startsWith('-') ? state.b.slice(1) : '-' + state.b;
          updateDisplay(state.a, state.sign, state.b);
        } else if (state.a) {
          state.a = state.a.startsWith('-') ? state.a.slice(1) : '-' + state.a;
          updateDisplay(state.a, state.sign, state.b);
        }
        break;

      case '%':
        if (state.b) {
          state.b = (+state.b / 100).toString();
          updateDisplay(state.a, state.sign, state.b);
        } else if (state.a) {
          state.a = (+state.a / 100).toString();
          updateDisplay(state.a, state.sign, state.b);
        }
        break;
    }
  });
}
