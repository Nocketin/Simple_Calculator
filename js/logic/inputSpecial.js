import { state } from './state.js';

export function inputSpecial(key) {
  switch (key) {
    case 'AC':
      state.a = '';
      state.b = '';
      state.sign = '';
      state.finish = false;
      break;

    case '+/-':
      if (state.a === 'Error') return;
      if (state.b) {
        state.b = state.b.startsWith('-') ? state.b.slice(1) : '-' + state.b;
      } else if (state.a) {
        state.a = state.a.startsWith('-') ? state.a.slice(1) : '-' + state.a;
      }
      break;

    case '%':
      if (state.a === 'Error') return;
      if (state.b) {
        state.b = (+state.b / 100).toString();
      } else if (state.a) {
        state.a = (+state.a / 100).toString();
      }
      break;
  }
}
