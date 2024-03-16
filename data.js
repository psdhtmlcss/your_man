
const EXECUTORS_COUNT = 5;
const DEBOUNCE_INTERVAL_IN_MS = 200;
const names = [
  [
    'Денис',
    'Андрей',
    'Михаил',
    'Александр',
    'Илья',
  ],
  [
    'Сергей',
    'Антон',
    'Игорь',
    'Арсен',
    'Виктор'
  ],
  [
    'Hops',
    'Андрей',
    'Станислав',
    'Сергей',
    'Владимир'
  ],
  [
    'Денис',
    'Михаил',
    'Михаил',
    'Александр',
    'Владимир',
  ],
  [
    'Андрей',
    'Владислав',
    'Станислав',
    'Александр',
    'Никита'
  ],
  [
    'Сергей',
    'Дмитрий',
    'Иван',
    'Олег',
    'Виктор'
  ],
  [
    'Сергей',
    'Владислав',
    'Наталья',
    'Кристина',
    'Илья'
  ],

];
const images = [
  [
    'images/a01.jpg',
    'images/a02.jpg',
    'images/a03.jpg',
    'images/a04.jpg',
    'images/a05.jpg',
  ],
  [
    'images/a06.jpg',
    'images/a07.jpg',
    'images/a08.jpg',
    'images/a09.jpg',
    'images/a10.jpg',
  ],
  [
    'images/a11.jpg',
    'images/a12.jpg',
    'images/a13.jpg',
    'images/a14.jpg',
    'images/a15.jpg',
  ],
  [
    'images/01.jpg',
    'images/a16.jpg',
    'images/02.jpg',
    'images/03.jpg',
    'images/04.jpg'
  ],
  [
    'images/05.jpg',
    'images/06.jpg',
    'images/08.jpg',
    'images/18.jpg',
    'images/17.jpg'
  ],
  [
    'images/07.jpg',
    'images/16.jpg',
    'images/15.jpg',
    'images/14.jpg',
    'images/12.jpg'
  ],
  [
    'images/11.jpg',
    'images/10.jpg',
    'images/09.jpg',
    'images/a17.jpg',
    'images/a18.jpg',
  ],
];

const specializations = [
  'Эксперт в телефонах',
  'Самый быстрый курьер',
  'Представитель вашей фирмы',
  'Автоэксперт',
  'Частный детектив'
];

const cityNames = ['#moscow', '#spb', '#krasnodar', '#irkutsk', '#tomsk', '#cheboksary', '#ivanovo'];
const cities = document.querySelector('.js-cities');
const executorsWrapper = document.querySelector('.js-executors');
const loader = document.querySelector('.js-loader-wrapper');
const url = new URL(window.location.href);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const returnDeclination = (num, nominative, genitiveSingular, genitivePlural) => {
  if (num > 10 && (Math.round((num % 100) / 10)) === 1) {
    return `<strong>${num}</strong> ${genitivePlural}`;
  } else {
    switch (num % 10) {
      case 1: return `<strong>${num}</strong> ${nominative}`;
      case 2:
      case 3:
      case 4: return `<strong>${num}</strong> ${genitiveSingular}`;
    }
    return `<strong>${num}</strong> ${genitivePlural}`;
  }
};

const debounce = (cb) => {
  let lastTimeout = null;

  return () => {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      cb();
    }, DEBOUNCE_INTERVAL_IN_MS);
  };
};

const setActiveClass = (btn) => {
  const activeButton = cities.querySelector('.active');
  if (activeButton) {
    activeButton.classList.remove('active');
  }
  btn.classList.add('active');
};



switch(url.hash) {
  case cityNames[0]:
    setActiveClass(document.querySelector('button[data-id="0"]'));
    renderExecutors('0');
    break;
  case cityNames[1]:
    setActiveClass(document.querySelector('button[data-id="1"]'));
    renderExecutors('1');
    break;
  case cityNames[2]:
    setActiveClass(document.querySelector('button[data-id="2"]'));
    renderExecutors('2');
    break;
  case cityNames[3]:
    setActiveClass(document.querySelector('button[data-id="3"]'));
    renderExecutors('3');
    break;
  case cityNames[4]:
    setActiveClass(document.querySelector('button[data-id="4"]'));
    renderExecutors('4');
    break;
  case cityNames[5]:
    setActiveClass(document.querySelector('button[data-id="5"]'));
    renderExecutors('5');
    break;
  case cityNames[6]:
    setActiveClass(document.querySelector('button[data-id="6"]'));
    renderExecutors('6');
    break;
};

const onCitiesClick = (evt) => {
  if (!evt.target.classList.contains('btn')) {
    return;
  }
  executorsWrapper.innerHTML = '';
  setActiveClass(evt.target);
  loader.classList.remove('d-none');
  let bindRenderExecutors = renderExecutors.bind(null, evt.target.dataset.id);
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve(bindRenderExecutors), DEBOUNCE_INTERVAL_IN_MS);
  });
  promise
    .then(result => result())
    .finally(() => loader.classList.add('d-none'));
};

cities.addEventListener('click', onCitiesClick);
