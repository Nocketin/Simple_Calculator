import '../css/style.css';
import { insertDigits } from './UI/digits.js';
import { insertOperators } from './UI/operators.js';
import { insertEquals } from './UI/equals.js';
import { insertSpecial } from './UI/specialSymbols.js';
import { changeTheme } from './UI/theme-toggle.js';

insertDigits();
insertOperators();
insertEquals();
insertSpecial();
changeTheme();
