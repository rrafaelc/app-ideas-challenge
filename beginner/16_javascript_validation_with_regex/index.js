const inputUsername = document.getElementById('username');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const messages = document.querySelectorAll('messages');
const submit = document.getElementById('submit');

const msgUsername = document.getElementById('message-username');
const msgPassword = document.getElementById('message-password');
const msgEmail = document.getElementById('message-email');

const successMessage = document.getElementById('success-message');

let capitalLetters = 0;
let symbols = 0;
let hyphens = 0;

let usernameIsValid = false;
let emailIsValid = false;
let passwordIsValid = false;

const addOrRemoveDisabled = () => {
  if (usernameIsValid && emailIsValid && passwordIsValid) {
    submit.classList.remove('disabled');
  } else {
    submit.classList.add('disabled');
  }
};

const checkUsername = () => {
  const regex = /^[a-zA-Z0-9]{3,}$/;
  if (regex.test(inputUsername.value)) {
    inputUsername.classList.remove('error');
    inputUsername.classList.add('success');
    msgUsername.classList.add('success');
    usernameIsValid = true;
    return true;
  } else {
    inputUsername.classList.add('error');
    inputUsername.classList.remove('success');
    msgUsername.classList.remove('success');
    usernameIsValid = false;
    return false;
  }
};

const checkEmail = () => {
  const regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (regex.test(inputEmail.value)) {
    inputEmail.classList.remove('error');
    inputEmail.classList.add('success');
    msgEmail.classList.add('success');
    emailIsValid = true;
    return true;
  } else {
    inputEmail.classList.add('error');
    inputEmail.classList.remove('success');
    msgEmail.classList.remove('success');
    emailIsValid = false;
    return false;
  }
};

const checkPassword = () => {
  const has5CapitalLetters = /^(.*?[A-Z]){5,}.*$/.test(inputPassword.value);
  const has6Symbols = /^(.*?[^\w\d\-]){6,}.*$/.test(inputPassword.value);
  const has2Hyphens = /^(.*?\-){2,}.*$/.test(inputPassword.value);

  if (has5CapitalLetters && has6Symbols && has2Hyphens) {
    inputPassword.classList.remove('error');
    inputPassword.classList.add('success');
    passwordIsValid = true;
    return true;
  } else {
    inputPassword.classList.remove('success');
    inputPassword.classList.add('error');
    passwordIsValid = false;
    return false;
  }
};

const checkInputs = () => {
  if (checkUsername() && checkEmail() && checkPassword()) {
    return true;
  } else {
    return false;
  }
};

const countCapitalLetters = () => {
  const regex = /[A-Z]/g;
  const values =
    inputPassword.value.length - inputPassword.value.replace(regex, '').length;

  if (values <= 5) {
    capitalLetters = values;
  }
};

const countSymbols = () => {
  const regex = /[^\w\d\-]/g;
  const values =
    inputPassword.value.length - inputPassword.value.replace(regex, '').length;

  if (values <= 6) {
    symbols = values;
  }
};

const countHyphens = () => {
  const regex = /\-/g;
  const value =
    inputPassword.value.length - inputPassword.value.replace(regex, '').length;

  if (value <= 2) {
    hyphens = value;
  }
};

inputUsername.addEventListener('input', () => {
  checkUsername();
  addOrRemoveDisabled();
});

inputEmail.addEventListener('input', () => {
  checkEmail();
  addOrRemoveDisabled();
});

inputPassword.addEventListener('input', () => {
  countCapitalLetters();
  countSymbols();
  countHyphens();

  if (capitalLetters >= 5 && symbols >= 6 && hyphens >= 2) {
    msgPassword.classList.add('success');
  } else {
    msgPassword.classList.remove('success');
  }

  msgPassword.innerHTML = `${capitalLetters}/5 Capital Letters - ${symbols}/6 Symbols - ${hyphens}/2 hyphens(-)`;

  checkPassword();
  addOrRemoveDisabled();
});

submit.addEventListener('click', e => {
  e.preventDefault();

  const inputs = checkInputs();

  if (inputs) {
    inputUsername.blur();
    inputEmail.blur();
    inputPassword.blur();

    successMessage.classList.add('show');
  } else {
    successMessage.classList.remove('show');
  }
});
