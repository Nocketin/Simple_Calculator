import { state } from '../logic/state.js';
import { calculate } from '../logic/calculate.js';
import { updateDisplay } from './display.js';

export function insertEquals() {
  const equal = document.querySelector('.equal');

  equal.addEventListener('click', () => {
    calculate();
    updateDisplay(state.a, '', '');
  });
}
