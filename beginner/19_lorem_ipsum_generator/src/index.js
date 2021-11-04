const lorem = document.querySelector('.lorem');
const input = document.querySelector('.generator input');
const generate = document.querySelector('#generate');
const copy = document.querySelector('#copy');

import { LoremIpsum } from 'lorem-ipsum';

const loremIpsum = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

generate.addEventListener('click', () => {
  const parseInput = parseInt(input.value);

  if (parseInput > 0) {
    lorem.textContent = loremIpsum.generateParagraphs(parseInput);
  } else {
    lorem.textContent = loremIpsum.generateParagraphs(1);
  }
});

copy.addEventListener('click', () => {
  const text = lorem.textContent;
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  textArea.select();
  textArea.setSelectionRange(0, 99999); /* For mobile devices */
  textArea.remove();

  copy.textContent = 'Copied!';
  setTimeout(() => {
    copy.textContent = 'Copy';
  }, 2000);
});
