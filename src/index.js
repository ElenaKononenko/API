import './styles.css';
// import libs from './js/libs';
import fetchObject from './js/fetch';
import refs from './js/refs';

const { form, sbtn, gallery } = refs;

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target.elements.query.value);
  const inputValue = e.target.elements.query.value;
  fetchObject.getFetch(inputValue, gallery);
});
