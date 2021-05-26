/* eslint-disable prefer-const */
import './style.scss';
import { App } from './app';
import { form } from './components/rout/form/formJS';
import { navigation } from './components/navigation';
import { getImgFromForm } from './components/getImgFromForm/getImgFromForm';
import { locationResolver } from './components/rout/locationResolver';
import { validation } from './components/rout/form/validaion';
import { getValueSelect, getDifficaltiesSelect } from './constants';

const appElement = document.getElementById('app');
window.onload = () => {
  const location = window.location.hash;
  if (location) {
    locationResolver(location);
  }

  document.querySelectorAll('.nav-item').forEach((x) => x.addEventListener('click', (e) => {
    const newLocation = e.target?.hash;
    locationResolver(newLocation);
  }));

  // if (!appElement) throw Error('App root element not found');
  // new App(appElement).start();

  form();
  navigation();
  getImgFromForm();
};
let btnRegister: HTMLElement;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
btnRegister = document.getElementById('btn-register')!;
btnRegister.addEventListener('click', () => {
  validation();
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const btnStart: Element = document.querySelector('btn-start')!;
  btnStart.addEventListener('click', () => {
    if (appElement) new App(appElement).start();
  });

