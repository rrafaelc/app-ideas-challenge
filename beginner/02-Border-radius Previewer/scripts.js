const border = document.querySelector('#border');
const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomLeft = document.querySelector('#bottom-left');
const bottomRight = document.querySelector('#bottom-right');
const radius = document.querySelector('#radius');
const result = document.querySelector('#result');

border.style.borderRadius = `${radius.value}px`;

function handleRadiusAllCorners(value) {
  border.style.borderTopLeftRadius = `${value}px`;
  border.style.borderTopRightRadius = `${value}px`;
  border.style.borderBottomLeftRadius = `${value}px`;
  border.style.borderBottomRightRadius = `${value}px`;

  topLeft.value = value;
  topRight.value = value;
  bottomLeft.value = value;
  bottomRight.value = value;
}

function handleResultTextArea(
  isRadius,
  topleft,
  topright,
  bottomleft,
  bottomright,
) {
  const text = `Border css values

border-top-left-radius: ${topleft}px;
border-top-right-radius: ${topright}px;
border-bottom-left-radius: ${bottomleft}px;
border-bottom-right-radius: ${bottomright}px;

Thank you for using!

Visit my github repository
https://github.com/rrafaelc`;

  const textAll = `Border css values

border-radius: ${radius.value}px;

Thank you for using!

Visit my github repository
https://github.com/rrafaelc`;

  result.value = isRadius ? textAll : text;
}

function handleInputValues() {
  handleResultTextArea(
    false,
    topLeft.value,
    topRight.value,
    bottomLeft.value,
    bottomRight.value,
  );
}

topLeft.addEventListener('input', () => {
  border.style.borderTopLeftRadius = `${topLeft.value}px`;
  handleInputValues();
});
topRight.addEventListener('input', () => {
  border.style.borderTopRightRadius = `${topRight.value}px`;
  handleInputValues();
});
bottomLeft.addEventListener('input', () => {
  border.style.borderBottomLeftRadius = `${bottomLeft.value}px`;
  handleInputValues();
});
bottomRight.addEventListener('input', () => {
  border.style.borderBottomRightRadius = `${bottomRight.value}px`;
  handleInputValues();
});

radius.addEventListener('input', () => {
  if (radius.value == '') {
    radius.value = 0;
  }
  handleRadiusAllCorners(radius.value);
  handleResultTextArea(true);
});

handleInputValues();
