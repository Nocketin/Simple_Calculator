import { state } from '../logic/state.js';
import { updateDisplay } from './display.js';
import { specialSymbols } from '../logic/constants.js';
import { inputSpecial } from '../logic/inputSpecial.js';

export function insertSpecial() {
  const buttons = document.querySelector('.buttons');

  buttons.addEventListener('click', (event) => {
    const key = event.target.textContent;

    if (!specialSymbols.includes(key)) return;
    inputSpecial(key);
    updateDisplay(state.a, state.sign, state.b);
  });
}
