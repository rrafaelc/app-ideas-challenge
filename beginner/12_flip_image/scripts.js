const flipbox = document.querySelector('.flip-box');
const flipboxinner = document.querySelector('.flip-box-inner');
const frontimg = document.querySelector('#frontimg');
const flipboxback = document.querySelector('.flip-box-back');
const input = document.querySelector('#input-img');

const form = document.querySelector('form');
const error = document.querySelector('.error');

let stop = false;

function rotateDiv(x, y) {
  if (x <= 70 && (y <= 300) & !stop) {
    // Left to Right
    flipboxinner.style.transform = 'rotateY(180deg)';
    flipboxback.style.transform = 'rotateY(180deg)';
    stop = true;
  } else if (x >= 70 && (y >= 230) & !stop) {
    // Bottom to Top
    flipboxinner.style.transform = 'rotateX(180deg)';
    flipboxback.style.transform = 'rotateX(180deg)';
    stop = true;
  } else if (x >= 70 && (y <= 70) & !stop) {
    // Top to Bottom
    flipboxinner.style.transform = 'rotateX(-180deg)';
    flipboxback.style.transform = 'rotateX(180deg)';
    stop = true;
  } else if (x >= 330 && (y > 0) & !stop) {
    flipboxinner.style.transform = 'rotateY(-180deg)';
    flipboxback.style.transform = 'rotateY(180deg)';
    stop = true;
  }
}

function loadImage(src) {
  const image = new Image();
  error.classList.remove('show');
  image.onload = () => {
    frontimg.src = `${image.src}`;
  };

  image.onerror = () => {
    input.value = '';
    error.classList.add('show');
    return;
  };

  image.src = src;
}

function getCoordinates(ev) {
  const bnds = ev.target.getBoundingClientRect();
  const x = ev.clientX - bnds.left;
  const y = ev.clientY - bnds.top;

  rotateDiv(x, y);
}

function reset() {
  stop = false;
  flipboxinner.style.transform = 'rotateY(0deg)';
}

flipbox.addEventListener('mousemove', getCoordinates);
flipbox.addEventListener('mouseleave', reset);

form.addEventListener('submit', ev => {
  ev.preventDefault();
  const img = input.value;

  if (img.trim() === '') {
    input.value = '';
    return;
  }

  loadImage(img);
});
