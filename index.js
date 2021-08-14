const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]')
}

refs.btnStart.addEventListener('click', changeColor);
refs.btnStop.addEventListener('click', stopChangeColor);

let isActive = false;
let colorId = null;

function changeColor() {
  if (isActive) {
    return;
  }  
  colorId = setInterval(() => {
    refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)]
  }, 1000);
  isActive = true;
  // console.log('start');
};

function stopChangeColor() {  
  clearInterval(colorId)
  isActive = false;
  // console.log('stop');
}