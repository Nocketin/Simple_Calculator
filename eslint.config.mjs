import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  {
    ignores: ['dist/**', 'node_modules/**'],
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js, prettier: prettierPlugin },
    languageOptions: { globals: globals.browser },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
]);
