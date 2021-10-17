const user = {
  id: 'rrafaelc',
  password: '123456',
};

const root = document.documentElement;

const loginbtn = document.querySelector('#login-btn');
const cancelbtn = document.querySelector('#cancel-btn');

const inputs = document.querySelectorAll('input');

const userid = document.querySelector('#userid');
const password = document.querySelector('#password');

const success = document.querySelector('.success');
const error = document.querySelector('.error');
const empty = document.querySelector('.empty');

const changeValue = (id, str) => root.style.setProperty(id, str);
const isEmpty = (str) => !str.trim();

const login = (id, pw) => {
  if (id === user.id && pw === user.password) {
    return true;
  }

  return false;
};

loginbtn.addEventListener('click', (e) => {
  e.preventDefault();

  const id = userid.value;
  const pw = password.value;

  isEmpty(id) && changeValue('--input-id-bg-color', 'yellow');
  isEmpty(pw) && changeValue('--input-pw-bg-color', 'yellow');

  if (!isEmpty(id) && !isEmpty(pw)) {
    empty.classList.remove('active');

    if (login(id, pw)) {
      success.classList.add('active');
      error.classList.remove('active');

      changeValue('--input-border-color', 'green');
      changeValue('--input-font-style', 'normal');
      changeValue('--input-color', 'green');
    } else {
      error.classList.add('active');
      success.classList.remove('active');

      changeValue('--input-border-color', 'red');
      changeValue('--input-font-style', 'italic');
      changeValue('--input-color', 'red');
    }
  } else {
    error.classList.remove('active');
    success.classList.remove('active');
    empty.classList.add('active');
  }
});

cancelbtn.addEventListener('click', (e) => {
  e.preventDefault();

  userid.value = '';
  password.value = '';

  error.classList.remove('active');
  success.classList.remove('active');
  empty.classList.remove('active');

  changeValue('--input-id-bg-color', '#fff');
  changeValue('--input-pw-bg-color', '#fff');
  changeValue('--input-border-color', '#6b6b6b');
  changeValue('--input-font-style', 'normal');
  changeValue('--input-color', '#000');
});

// If the user enter again, reset input colors
inputs.forEach((input) => {
  input.addEventListener('input', () => {
    changeValue('--input-id-bg-color', '#fff');
    changeValue('--input-pw-bg-color', '#fff');

    changeValue('--input-border-color', '#6b6b6b');
    changeValue('--input-font-style', 'normal');
    changeValue('--input-color', '#000');
  });
});
