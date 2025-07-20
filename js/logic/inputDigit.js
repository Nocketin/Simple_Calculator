import { state } from './state.js';
import { maxLength } from './constants.js';

export function inputDigit(key) {
  if (state.a === 'Error') return;
  if (key === ',') {
    if (!state.sign && !state.a.includes('.')) {
      state.a += '.';
    } else if (state.sign && !state.b.includes('.')) {
      state.b += '.';
    }
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
}
