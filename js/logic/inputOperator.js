import { state } from './state.js';
import { calculate } from './calculate.js';

export function inputOperator(key) {
  if (state.a === 'Error') return;
  if (state.sign && state.b) {
    calculate();
    state.sign = key;
    state.finish = false;
  } else {
    state.sign = key;
  }
}
