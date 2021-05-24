/* eslint-disable prefer-const */
import './style.scss';
  import { App } from './app';
// import {form } from './components/form';
import { form } from './components/rout/form/formJS';

import { navigation } from './components/navigation';
// import { getRuls } from './components/ruls/ruls';
// import { rulsArr } from './constants';
import { getImgFromForm } from './components/getImgFromForm/getImgFromForm';
import { locationResolver } from './components/rout/locationResolver';
import { validation } from './components/rout/form/validaion';

// window.onload = () => {
//   navigation();

//   form();
//   const location = window.location.hash;
//   if (location) {
//     locationResolver(location);
//   }
//   let i = document.querySelector('.nav-link');
//   console.log(i);
//   document.querySelectorAll('.nav-item').forEach((x) => x.addEventListener('click', (e) => {
//     const newLocation = e.target?.hash;}));
//   // document.querySelectorAll('.nav-link').forEach((x) => x.addEventListener('click', (e) => {
//   //   const newLocation = e.view.location.hash;
//   //   locationResolver(newLocation);
//   // }));
//   const appElement = document.getElementById('app');
//   if (!appElement) throw Error('App root element not found');
//   // new App(appElement).start();

//   // getRuls(rulsArr);
//   getImgFromForm();
// };
// let btnRegister: HTMLElement;
// // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
// btnRegister = document.getElementById('btn-register')!;
// btnRegister.addEventListener('click', () => {
//   validation();
// });

// window.onload = () => {
//   // navigation()

//   form();
//   const location = window.location.hash;
//   if (location) {
//     locationResolver(location);
//   }

//   document.querySelectorAll('.nav-item').forEach((x) => x.addEventListener('click', (e) => {
//     const newLocation = e.target?.hash;
//     locationResolver(newLocation);
//   }));
//   const appElement = document.getElementById('app');
//   if (!appElement) throw Error('App root element not found');
//   // new App(appElement).start();

//   // getRuls(rulsArr);
//   getImgFromForm();
// };
// let btnRegister: HTMLElement;
// // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
// btnRegister = document.getElementById('btn-register')!;
// btnRegister.addEventListener('click', () => {
//   validation();
// });
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

  if (!appElement) throw Error('App root element not found');
   new App(appElement).start();

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

const btnStart = document.querySelector('btn-start')!;
btnStart.addEventListener('click',()=>{
  new App(appElement).start();
})
