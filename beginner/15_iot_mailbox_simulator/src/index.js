import IOTMailbox from './iotMailbox';

const hornSound = document.getElementById('horn');
const intervalId = document.getElementById('interval');
const toggle = document.querySelector('.toggle');
const executionDetails = document.querySelector('.executionDetails .logs');
const notifications = document.querySelector('.notifications .logs');
const reset = document.querySelector('.resetButton');

const logs = signal => {
  const p = document.createElement('p');
  const elms = executionDetails.querySelectorAll('p').length;

  if (elms >= 30) {
    executionDetails.removeChild(executionDetails.firstChild);
  }

  p.innerHTML = `Mailbox state changed - lightLevel: <span class='signal'>${signal}</span>`;
  executionDetails.appendChild(p);
  p.scrollIntoView();
};

const showNotifications = (msg, color) => {
  const p = document.createElement('p');
  const elms = notifications.querySelectorAll('p').length;

  if (elms >= 15) {
    notifications.removeChild(notifications.firstChild);
  }

  if (color === 'green') {
    p.classList.add('green');
  } else if (color === 'yellow') {
    p.classList.add('yellow');
  } else if (color === 'red') {
    p.classList.add('red');
  }

  p.innerHTML = `${msg}`;
  notifications.appendChild(p);
  p.scrollIntoView();
};

const lightLevel = signal => {
  logs(signal);

  if (signal >= 0.85) {
    showNotifications(`The door is opened - Light level is ${signal}`, 'green');
    hornSound.play();
  } else if (signal >= 0.5) {
    showNotifications(
      `The door is half-opened - Light level is ${signal}`,
      'yellow'
    );
  } else if (signal >= 0.2) {
    showNotifications(
      `The door is half-closed - Light level is ${signal}`,
      'yellow'
    );
  } else {
    showNotifications(`The door is closed - Light level is ${signal}`, 'red');
  }
};

const sendSignal = (signal, cb) => {
  cb(signal);
};

const sendNotification = (msg, cb) => {
  cb(msg, 'green');
};

let start = false;
let mailbox;

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  start = !start;

  if (start) {
    mailbox = new IOTMailbox(
      intervalId.value,
      signal => sendSignal(signal, lightLevel),
      msg => sendNotification(msg, showNotifications)
    );

    mailbox.startMonitoring();
  } else {
    mailbox.stopMonitoring();
  }
});

reset.addEventListener('click', () => {
  executionDetails.innerHTML = '';
  notifications.innerHTML = '';
  mailbox.reset();
  toggle.classList.remove('active');
  start = false;
});
