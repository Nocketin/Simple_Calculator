import { state } from './state.js';
import { updateDisplay } from '../UI/display.js';

export function insertEquals() {
  const equal = document.querySelector('.equal');

  equal.addEventListener('click', () => {
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

    state.finish = true;
    state.b = '';
    state.sign = '';
    updateDisplay(state.a, '', '');
  });
}
