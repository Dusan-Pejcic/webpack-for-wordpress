import "./style.scss";
import aFunction from './js/another-file.js';

console.log('arghh');

const body = document.querySelector('body');
const container = document.createElement('div');
const header = document.createElement('h1');
header.innerText = 'Hello'
container.classList.add('container');
container.appendChild(header);
body.appendChild(container);

aFunction();
