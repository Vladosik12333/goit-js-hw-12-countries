import './sass/main.scss';
import msg from './js/message.js';
import deb from 'lodash.debounce';
import apiSearchCountry from './js/api-countries.js';
import countryTemplate from './templates/country.hbs';
import countriesTemplate from './templates/counries.hbs';

const refs = {
  search: document.querySelector('.form-country__input'),
  box: document.querySelector('.box-country'),
};

refs.search.addEventListener('input', deb(onSearch, 500));

function onSearch(e) {
  const value = e.target.value;

  if (value === '') return (refs.box.innerHTML = '');

  apiSearchCountry(value).then(processApi);
}

function processApi(arrayCountries) {
  if (arrayCountries.length > 10) {
    refs.box.innerHTML = '';
    return msg('Вы ввели слишком мало символов. Пожалуйста, введите больше!');
  }

  if (arrayCountries.length === 1) return renderCountry(arrayCountries);

  return renderCountries(arrayCountries);
}

function renderCountry([country]) {
  const templateCountry = countryTemplate(country);
  refs.box.innerHTML = templateCountry;
}

function renderCountries(countries) {
  const templateCountries = countriesTemplate(countries);
  refs.box.innerHTML = templateCountries;
}
