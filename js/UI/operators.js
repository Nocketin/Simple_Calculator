import { state } from '../logic/state.js';
import { updateDisplay } from './display.js';
import { operators } from '../logic/constants.js';
import { inputOperator } from '../logic/inputOperator.js';

export function insertOperators() {
  const buttons = document.querySelector('.buttons');

  buttons.addEventListener('click', (event) => {
    const key = event.target.textContent;

    if (!operators.includes(key)) return;

    inputOperator(key);
    updateDisplay(state.a, state.sign, state.b);
  });
}
