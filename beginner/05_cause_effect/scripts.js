// The fetch need to be loaded from a server
// Otherwise will be blocked by cors local assets
// In this case, I'm using live Server extension for vscode
// In a real server, use the directly path './data.json'
// Or an external path like 'https://www.example.com/data.json'
const data = './data.json';

let personId = '';
let personsData;

const addColorScheme = () => {
  const elements = document.querySelectorAll(
    '*:not(script, head, head > *, html)',
  );
  const darkLightButton = document.querySelector('#darkLight');

  if (darkLightButton) {
    darkLightButton.addEventListener('click', () => {
      const storage = localStorage.getItem(
        'rrafaelc@app-ideas-challenge-05-CauseEffect',
      );

      if (storage) {
        const savedStorage = JSON.parse(storage);

        if (savedStorage.colorScheme === 'dark') {
          elements.forEach((el) => {
            el.setAttribute('data-color-mode', 'light');
          });

          const newColorScheme = {
            ...savedStorage,
            colorScheme: 'light',
          };

          localStorage.setItem(
            'rrafaelc@app-ideas-challenge-05-CauseEffect',
            JSON.stringify(newColorScheme),
          );

          darkLightButton.classList.add('active');
        } else {
          elements.forEach((el) => {
            el.setAttribute('data-color-mode', 'dark');
          });

          const newColorScheme = {
            ...savedStorage,
            colorScheme: 'dark',
          };

          localStorage.setItem(
            'rrafaelc@app-ideas-challenge-05-CauseEffect',
            JSON.stringify(newColorScheme),
          );

          darkLightButton.classList.remove('active');
        }
      }
    });
  }

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      const colorScheme = e.matches ? 'dark' : 'light';

      colorScheme === 'light'
        ? darkLightButton.classList.add('active')
        : darkLightButton.classList.remove('active');

      elements.forEach((el) => {
        el.setAttribute('data-color-mode', colorScheme);
      });

      const storage = {
        colorScheme: colorScheme,
      };

      localStorage.setItem(
        'rrafaelc@app-ideas-challenge-05-CauseEffect',
        JSON.stringify(storage),
      );
    });

  if (window.matchMedia) {
    const storage = localStorage.getItem(
      'rrafaelc@app-ideas-challenge-05-CauseEffect',
    );

    if (storage) {
      const { colorScheme } = JSON.parse(storage);

      elements.forEach((el) => {
        el.setAttribute('data-color-mode', colorScheme);
      });

      colorScheme === 'light'
        ? darkLightButton.classList.add('active')
        : darkLightButton.classList.remove('active');
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        const storage = {
          colorScheme: 'dark',
        };

        localStorage.setItem(
          'rrafaelc@app-ideas-challenge-05-CauseEffect',
          JSON.stringify(storage),
        );

        elements.forEach((el) => {
          el.setAttribute('data-color-mode', 'dark');
        });

        darkLightButton.classList.remove('active');
      } else {
        const storage = {
          colorScheme: 'light',
        };

        localStorage.setItem(
          'rrafaelc@app-ideas-challenge-05-CauseEffect',
          JSON.stringify(storage),
        );

        elements.forEach((el) => {
          el.setAttribute('data-color-mode', 'light');
        });

        darkLightButton.classList.add('active');
      }
    }
  }
};

const selectPerson = (p) => {
  const info = document.querySelector('#info');

  if (personId) {
    const lastPersonId = document.querySelector(`#${personId}`);

    lastPersonId.classList.remove('active');
  }

  personId = p.id;
  p.classList.add('active');

  info.scrollIntoView();
};

const formatDate = (date) => {
  let formatedDate = '';

  const [day, month, year] = date.split('/');

  switch (month) {
    case '01':
      formatedDate = `${parseInt(day)} Jan, ${year}`;
      break;
    case '02':
      formatedDate = `${parseInt(day)} Feb, ${year}`;
      break;
    case '03':
      formatedDate = `${parseInt(day)} Mar, ${year}`;
      break;
    case '04':
      formatedDate = `${parseInt(day)} Apr, ${year}`;
      break;
    case '05':
      formatedDate = `${parseInt(day)} May, ${year}`;
      break;
    case '06':
      formatedDate = `${parseInt(day)} June, ${year}`;
      break;
    case '07':
      formatedDate = `${parseInt(day)} July, ${year}`;
      break;
    case '08':
      formatedDate = `${parseInt(day)} Aug, ${year}`;
      break;
    case '09':
      formatedDate = `${parseInt(day)} Sept, ${year}`;
      break;
    case '10':
      formatedDate = `${parseInt(day)} Oct, ${year}`;
      break;
    case '11':
      formatedDate = `${parseInt(day)} Nov, ${year}`;
      break;
    case '12':
      formatedDate = `${parseInt(day)} Dec, ${year}`;
      break;
  }

  return formatedDate;
};

const renderPerson = (id) => {
  const name = document.querySelector('#infoName');
  const address1 = document.querySelector('#infoAddress1');
  const address2 = document.querySelector('#infoAddress2');
  const state = document.querySelector('#infoState');
  const country = document.querySelector('#infoCountry');
  const telephone = document.querySelector('#infoTelephone');
  const birthday = document.querySelector('#infoBirthday');

  const person = personsData.find((person) => person.id === id);

  name.innerHTML = person.name;
  address1.innerHTML = `${person.address}, ${person.number}`;
  address2.innerHTML = `${person.district}, ${person.city}`;
  state.innerHTML = person.state;
  country.innerHTML = person.country;
  telephone.innerHTML = person.telephone;
  birthday.innerHTML = formatDate(person.birthday);
};

const addClassesAndListeners = () => {
  const persons = document.querySelectorAll('.persons');

  persons.forEach((person) => {
    person.addEventListener('click', () => {
      selectPerson(person);
      renderPerson(personId);
    });
  });
};

const createList = (data) => {
  const ul = document.querySelector('ul');

  data.forEach((d) => {
    const li = document.createElement('li');
    li.classList.add('persons');
    li.innerHTML = d.name;
    li.id = d.id;

    ul.appendChild(li);
  });
};

const getData = () =>
  fetch(data)
    .then((response) => response.json())
    .then((data) => {
      personsData = data;
      return data;
    })
    .catch((err) => console.log(err));

async function load() {
  const data = await getData();

  if (data) {
    createList(data);
  } else {
    document.querySelector('#info').innerHTML =
      'This page need to be loaded from a server to load a json file';
  }

  addColorScheme();
  addClassesAndListeners();
}
