import { state } from './state.js';
import { updateDisplay } from '../UI/display.js';

const operators = ['−', '+', '×', '÷'];

export function insertOperators() {
  const buttons = document.querySelector('.buttons');

  buttons.addEventListener('click', (event) => {
    const key = event.target.textContent;

    if (!operators.includes(key)) return;

    if (state.sign && state.b) {
      switch (state.sign) {
        case '+':
          state.a = +state.a + +state.b;
          break;
        case '−':
          state.a = +state.a - +state.b;
          break;
        case '×':
          state.a = +state.a * +state.b;
          break;
        case '÷':
          if (state.b === '0') {
            state.a = 'Error';
            state.b = '';
            state.sign = '';
            updateDisplay(state.a, '', '');
            return;
          }
          state.a = +state.a / +state.b;
          break;
      }
      state.b = '';
      state.sign = key;
      state.finish = false;
    } else {
      state.sign = key;
    }

    updateDisplay(state.a, state.sign, state.b);
  });
}
