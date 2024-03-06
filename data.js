
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
    'Сергей',
    'Антон',
    'Игорь',
    'Арсен',
    'Виктор'
  ],
  [
    'Сергей',
    'Антон',
    'Игорь',
    'Арсен',
    'Виктор'
  ],

];
const images = [
  [
    'https://10.img.avito.st/image/1/1.f7GP47a401i5VFFV_YIZ34ZB0V4xQlFOuU_RWj9K21I5.N7B0cvEDq67mx3tbSjL-yW7CPYNuC8cbeDEDyneXWG4',
    'https://20.img.avito.st/image/1/1.YV6ypra4zbeEDw-y_NtderkEz7EMB0-_xALPtQIPxb0E.MvBb8T1Y6iyiv4RydPdMbZkbMts6oP2Q_k7hwW2_W_Y',
    'https://70.img.avito.st/image/1/1.6jRZJba4Rt1vjITYAUbOf2yHRNvnhMTVL4FE3-mMTtfv.JXh-ZysEvu4KszD9Yx-vpd_kMlBrXN8EytpzLKZ5aac',
    'https://20.img.avito.st/image/1/1.h3WGYLa4K5ywyemZhAruV4_CKZo4wamU8MQpnjbJI5Yw.cYax9SVXsVC0S4wATeRHa-bdc0C7pTBQf9GRQHhs3Tc',
    'https://50.img.avito.st/image/1/1.WMN6Sba49CpM4DYvRlAm7WXr9izE6HYiDO32KMrg_CDM.snvokNDgfqVsypvXL_mWo0V_C4-9jXUFLLFg-IbdCBs',
  ],
  [
    'https://00.img.avito.st/image/1/1.7QtOrra4QeJ4B4PnGImHX2cMQ-TwD8PqOApD4P4HSej4.uK5osvirCY0kbK8WRF3spJ_ui48dg7wtHPsXUbcB304',
    'https://40.img.avito.st/image/1/1.SOd9yba45A5LYCYLYdBumXJr5gjDaGYGC23mDM1g7ATL.9Jje-ox3VPztE-FRZZE_ftyJNQzAU1R5Bmv85g1reFw',
    'https://20.img.avito.st/image/1/1.3tGoqba4cjieALA9mJbolYELcD4WCPAw3g1wOhgAejIe.cJo1EMuMZMBWU2IWGIQSBiDPC6SABuywJgd8kgM-PSE',
    'https://20.img.avito.st/image/1/1.LCXunba4gMzYNELJupFXeuU_gspQPALEmDmCzl40iMZY.OyKrZgrSqU5YfSa-DTkpZ2OGoGya0A4sja5JIrfTl5E',
    'https://50.img.avito.st/image/1/1.dUbWvLa42a_gFRuqsOVyOMIe26loHVunoBjbrWYV0aVg.fObwSTLQSd7Xm8_3QJ1Gz6tqGF3JEA297_syHvU-BLc',
  ],
  [
    'https://00.img.avito.st/image/1/1.Pg7SUra4kufk-1DiokJ-fOTwkOFs8xDvpPaQ5WL7mu1k.Ai-CcCmzSfKNs5x7nFBFPVR5_nLFJ7oBBUQR3pbkJFk',
    'https://60.img.avito.st/image/1/1.TAwWXLa54OUg9SLgAilkV9v_5u-if-gnp__i4ar16uc.7nSkC_ISCUJkIvzVoF7vYzCnt3023KZ_uqK6QjxFYTk',
    'https://10.img.avito.st/image/1/1.eCs7y7a41MINYhbHR5IyLDFp1sSFalbKTW_WwIti3MiN.nYQMg8jO0f_5KSr5w-mpINKZf-ZDDbKUVPm4ggZgzWo',
    'https://70.img.avito.st/image/1/1.jzFGuLa4I9hwEeHdVI6DS00aId74GaHQMBwh2vYRK9Lw.WAZmbXeTXXJ-L5o_z3CYOkY1BN62oCMoyYzOn48-_dQ',
    'https://10.img.avito.st/image/1/1.BgIrVLa4qusd_WjuK1wOPzz2qO2V9SjjXfCo6Zv9ouGd.wt0QBs7bc0TYmHPjyoFUCLpifwojs8bP8Cb6x2WHDl8',
  ],
  [
    'images/01.jpg',
    'images/no-photo.jpg',
    'images/no-photo.jpg',
    'images/no-photo.jpg',
    'images/no-photo.jpg'
  ],
  [
    'images/no-photo.jpg',
    'images/no-photo.jpg',
    'images/no-photo.jpg',
    'images/no-photo.jpg',
    'images/no-photo.jpg'
  ],
  [
    'images/no-photo.jpg',
    'images/no-photo.jpg',
    'images/no-photo.jpg',
    'images/no-photo.jpg',
    'images/no-photo.jpg'
  ],
  [
    'images/no-photo.jpg',
    'images/no-photo.jpg',
    'images/no-photo.jpg',
    'images/no-photo.jpg',
    'images/no-photo.jpg'
  ],

];
const cities = document.querySelector('.js-cities');
const executorsWrapper = document.querySelector('.js-executors');
const loader = document.querySelector('.js-loader-wrapper');

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
