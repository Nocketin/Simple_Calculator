Task: https: //docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.rtfo3o71ktll

How to run the app: 
1. Необходимо установить зависимости и собрать приложение при помощи webpack:
npm install и npm run bouild
2. Запускать приложение с собранного index.hrml в папке dist

Структура папок: 
css: 
  style.css - css стили

dist(после сборки): 
  index.html и main.[contenthash].js файлы с подключеными стилями и оптимизированным кодом

js: 
  logic - папка с логикой калькулятора (операции, добавление чисел и знаков, хранение переменных)
  UI - папка с навешиванием событий при клике на кнопки калькулятора (цифры, знаки, переключение темы(для темы оставил логику вместе с eventlistener))
  index.js импортирует необходимые для приложения функции и стили



