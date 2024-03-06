
const EXECUTORS_COUNT = 5;
const DEBOUNCE_INTERVAL_IN_MS = 300;
const names = [
  [
    'Денис',
    'Андрей',
    'Михаил',
    'Александр',
    'Данимар',
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
  'Наблюдатель',
  'Агент под прикрытием'
];
const cities = document.querySelector('.js-cities');
const executorsWrapper = document.querySelector('.js-executors');
const loader = document.querySelector('.js-loader-wrapper');

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

const createExecutorTemplate = (cityId, i) => (
  `<div class="col-md-3">
    <div class="card mb-4">
      <div class="card-img"><img src="${images[Number(cityId)][i]}" class="card-img-top" alt="..."></div>
      <div class="card-body text-center">
        <h5 class="card-title">${names[Number(cityId)][i]}</h5>
        <div class="mb-3">${returnDeclination(getRandomInt(100, 500), 'завершенная сделка', 'завершенные сделки', 'завершенных сделок')}</div>
        <div class="mb-3"><small class="bg-success-subtle px-2 rounded">${specializations[getRandomInt(0, returnDeclination.length - 1)]}</small></div>
        <div class="verify d-flex align-items-center justify-content-center gap-1 mb-3">
          <small>Паспорт проверен</small>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-fill-check" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/>
          </svg>
        </div>
        <div class="price fw-bold mb-3">от 1000 рублей</div>
        <a href="tel:89165371848" class="btn btn-primary d-block w-100">Позвонить</a>
      </div>
    </div>
  </div>`
);

const renderExecutors = (cityId) => {
  for (let i = 0; i < EXECUTORS_COUNT; i++) {
    executorsWrapper.insertAdjacentHTML('beforeend', createExecutorTemplate(cityId, i));
  }
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
