/* eslint-disable prefer-const */
import './style.scss';
import { App } from './app';
import { form } from './components/rout/form/formJS';
import { navigation } from './components/navigation';
import { getImgFromForm } from './components/getImgFromForm/getImgFromForm';
import { locationResolver } from './components/rout/locationResolver';
import { validation } from './components/rout/form/validaion';

window.onload = () => {
  navigation();
  form();
  getImgFromForm();
  const location = window.location.hash;
  if (location) {
    locationResolver(location);
  }
  document.querySelectorAll('.nav-item').forEach((x) => x.addEventListener('click', (e) => {
    const newLocation = e.target?.hash;
    locationResolver(newLocation);
  }));
  const appElement = document.getElementById('app');
  const btnStart = document.getElementById('btn-start')!;
  btnStart.addEventListener('click', () => {
    if (appElement) {
      new App(appElement).start();
    }
  });
};
// let btnRegister: HTMLElement;
// btnRegister = document.getElementById('btn-register')!;
// btnRegister.addEventListener('click', () => {
//   validation();
// });
