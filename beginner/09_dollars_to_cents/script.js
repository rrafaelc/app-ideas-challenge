const input = document.querySelector('#inputConvert');
const btn = document.querySelector('#convertButton');
const result = document.querySelector('#result');

const cents = document.querySelector('.totalCents');
const quartes = document.querySelector('#quartes');
const dimes = document.querySelector('#dimes');
const nickels = document.querySelector('#nickels');
const pennies = document.querySelector('#pennies');

const formatDollarsToCents = (value) => {
  value = (value + '').replace(/[^\d.-]/g, '');

  if (value && value.includes('.')) {
    value = value.substring(0, value.indexOf('.') + 3);
  }

  return value ? Math.round(parseFloat(value) * 100) : 0;
};

input.addEventListener('input', () => {
  if (input.value.length > 16) {
    input.value = input.value.substring(0, 16);
  }
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    btn.click();
  }
});

btn.addEventListener('click', () => {
  result.classList.add('active');
  let balance = 0;

  const calc = formatDollarsToCents(input.value);
  cents.innerHTML = 'Total cents: ' + calc;

  quartes.innerHTML = Math.floor(calc / 25);
  balance = calc % 25;
  dimes.innerHTML = Math.floor(balance / 10);
  balance = balance % 10;
  nickels.innerHTML = Math.floor(balance / 5);
  balance = balance % 5;
  pennies.innerHTML = Math.floor(balance / 1);
});
