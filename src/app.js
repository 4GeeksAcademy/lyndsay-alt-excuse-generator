import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ['The shark', 'The grizzly', 'The wolf', 'Godzilla'];
const action = ['broke apart', 'tore open', 'crushed', 'carried away'];
const what = ['my leg', 'my arm', 'my body', 'my foot'];
const when = [
  'for no reason!',
  'when I was relaxing!',
  'while I was hanging out with my friends!',
  'while I was on vacation!'
];


function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


function generateExcuse() {
  return `${pick(who)} ${pick(action)} ${pick(what)} ${pick(when)}`;
}


window.onload = () => {
  const excuseEl = document.getElementById('excuse');     
  const btn = document.getElementById('newExcuse');       


  excuseEl.innerHTML = generateExcuse();


  btn.addEventListener("click", () => {
    excuseEl.innerHTML = generateExcuse();
    excuseEl.style.color = randomColor();
  });
};
