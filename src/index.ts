/* eslint-disable prefer-const */
import './style.scss';
// import { App } from './app';
// import {form } from './components/form';
import { form } from './components/rout/form/formJS';

import { navigation } from './components/navigation';
// import { getRuls } from './components/ruls/ruls';
// import { rulsArr } from './constants';
import { getImgFromForm } from './components/getImgFromForm/getImgFromForm';
import { locationResolver } from './components/rout/locationResolver';
import { validation } from './components/rout/form/validaion';

window.onload = () => {
  const location = window.location.hash;
  if (location) {
    locationResolver(location);
  }

  document.querySelectorAll('.nav-item').forEach((x) => x.addEventListener('click', (e) => {
    const newLocation = e.target?.hash;
    locationResolver(newLocation);
  }));
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('App root element not found');
  // new App(appElement).start();

  form();
  navigation();
  // getRuls(rulsArr);
  getImgFromForm();
};
let btnRegister: HTMLElement;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
btnRegister = document.getElementById('btn-register')!;
btnRegister.addEventListener('click', () => {
  console.log('inputName');
  validation();
});
