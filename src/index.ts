import './style.scss';
// import { App } from './app';
// import {form } from './components/form';
import { form } from './formJS';

import { navigation } from './components/navigation';
// import { getRuls } from './components/ruls/ruls';
// import { rulsArr } from './constants';
import { getImgFromForm } from './components/getImgFromForm/getImgFromForm';
import { locationResolver } from './components/rout/locationResolver';

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
