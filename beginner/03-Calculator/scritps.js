const calculator = document.querySelector('#calculator');

const displayOperator = calculator.querySelector('#displayOperator');
const displayNumber = calculator.querySelector('#displayNumber');
const numbers = calculator.querySelectorAll('.numbers');
const operators = calculator.querySelectorAll('.operators');

let current = 0;
let memory = 0;
let lastOperator = null;
let firstInput = true;
let dot = false;

displayNumber.innerHTML = memory;

function handleDisplayOperator() {
  switch (lastOperator) {
    case 'plus':
      displayOperator.innerHTML = '&plus;';
      break;
    case 'minus':
      displayOperator.innerHTML = '&minus;';
      break;
    case 'times':
      displayOperator.innerHTML = '&times;';
      break;
    case 'divide':
      displayOperator.innerHTML = '&divide;';
      break;
    default:
      displayOperator.innerHTML = '';
      break;
  }
}

function displayNumFromMemory() {
  current = '';
  displayNumber.innerHTML = memory;
}

function calculate(currentOper) {
  if (lastOperator === null) {
    lastOperator = currentOper;
  }

  handleDisplayOperator();
  const curr = parseFloat(current);

  if (firstInput) {
    memory = curr;
    firstInput = false;
    displayNumFromMemory();
    return;
  }

  const save = memory;

  switch (lastOperator) {
    case 'plus':
      memory += curr;
      break;
    case 'minus':
      memory -= curr;
      break;
    case 'times':
      memory *= curr;
      break;
    case 'divide':
      memory /= curr;
      break;
    default:
      break;
  }

  // If the user press operator multiple times
  if (isNaN(memory)) {
    memory = save;
  }

  lastOperator = currentOper;

  handleDisplayOperator();
  displayNumFromMemory();
}

function clearAll() {
  current = 0;
  memory = 0;
  lastOperator = null;
  firstInput = true;
  dot = false;

  handleDisplayOperator();
  displayNumber.innerHTML = memory;
}

function addNum(num) {
  if (current.toString().length >= 8) {
    return;
  }

  // I couldn't find a better way to fix the float dot bug
  if ((current <= 0 && dot === true) || current <= 0) {
    current = `${num}`;
    displayNumber.innerHTML = current;

    if (dot) {
      current = `0.${num}`;
      dot = false;
      displayNumber.innerHTML = current;
      return;
    }

    return;
  }

  if (dot && current > 0) {
    current = `${current}.${num}`;
    dot = false;
    displayNumber.innerHTML = current;
    return;
  }

  current += `${num}`;

  displayNumber.innerHTML = current;
}

function clear() {
  current = current.toString().slice(0, -1);

  if (current === '') {
    current = 0;
  }

  displayNumber.innerHTML = current;
}

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    const num = number.textContext || number.innerText;

    addNum(num);
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    if (operator.id === 'dot') {
      dot = true;
      return;
    }

    if (operator.id === 'equal') {
      calculate(lastOperator);
      return;
    }

    if (operator.id === 'clear') {
      clear();
      return;
    }
    if (operator.id === 'clear-all') {
      clearAll();
      return;
    }

    calculate(operator.id);
  });
});
