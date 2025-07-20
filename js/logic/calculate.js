import { state } from './state.js';

export function calculate() {
  switch (state.sign) {
    case '+':
      state.a = (+state.a + +state.b).toString();
      break;
    case '−':
      state.a = (+state.a - +state.b).toString();
      break;
    case '×':
      state.a = (+state.a * +state.b).toString();
      break;
    case '÷':
      if (state.b === '0') {
        state.a = 'Error';
        state.b = '';
        state.sign = '';
        return;
      }
      state.a = (+state.a / +state.b).toString();
      break;
  }

  state.finish = true;
  state.b = '';
  state.sign = '';
}
