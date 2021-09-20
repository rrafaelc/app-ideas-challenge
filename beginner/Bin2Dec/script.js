const binary = document.querySelector('#binary');
const decimal = document.querySelector('#decimal');
const btn = document.querySelector('#convert');

binary.addEventListener('input', (e) => {
  const input = e.target.value;
  const current = input[input.length - 1];

  if (current !== '0' && current !== '1' && current !== undefined) {
    const newValue = input.slice(0, input.length - 1);

    e.target.value = newValue;
  }
});

function convert() {
  binary.value = binary.value.trim();
  const arrayNum = binary.value.split('').reverse();

  if (arrayNum[0] === undefined) {
    // If nothing is typed or undefined, then do nothing
    binary.value = '';
    decimal.value = '';
    return;
  }

  function checkNumbers(num) {
    if (num !== '0' && num !== '1') {
      return true;
    }
  }
  /* 
    If the user paste a value, 
    this function make sure that's 
    only binary will be allowed
    https://www.w3schools.com/jsref/jsref_some.asp
  */
  if (arrayNum.some(checkNumbers)) {
    alert('Only binary numbers!');
    binary.value = '';
    decimal.value = '';
    return;
  }

  const converted = arrayNum.reduce(function (accumulator, current, index) {
    const exp = 2 ** index;
    const res = current * exp;

    return (accumulator += res);
  }, 0);

  decimal.value = converted;
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  convert();
});
