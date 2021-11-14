/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/another-file.js
const aFunction = ()=> {
    console.log('from another file');
}

/* harmony default export */ const another_file = (aFunction);

;// CONCATENATED MODULE: ./src/index.js



console.log('arghh');

const body = document.querySelector('body');
const container = document.createElement('div');
const header = document.createElement('h1');
header.innerText = 'Hello'
container.classList.add('container');
container.appendChild(header);
body.appendChild(container);

another_file();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLG1EQUFlLFNBQVMsRUFBQzs7O0FDSkg7QUFDdUI7O0FBRTdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX3BvX2Rva3VtZW50YWNpamkvLi9zcmMvanMvYW5vdGhlci1maWxlLmpzIiwid2VicGFjazovL3dlYnBhY2tfcG9fZG9rdW1lbnRhY2lqaS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhRnVuY3Rpb24gPSAoKT0+IHtcbiAgICBjb25zb2xlLmxvZygnZnJvbSBhbm90aGVyIGZpbGUnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYUZ1bmN0aW9uO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgYUZ1bmN0aW9uIGZyb20gJy4vanMvYW5vdGhlci1maWxlLmpzJztcblxuY29uc29sZS5sb2coJ2FyZ2hoJyk7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5oZWFkZXIuaW5uZXJUZXh0ID0gJ0hlbGxvJ1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbmFGdW5jdGlvbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9