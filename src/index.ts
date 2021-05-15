import './style.scss';
import { App } from './app';
// import {form } from './components/form';
import { form } from './formJS';

window.onload = () => {
  const appElement = document.getElementById('app');
  const appElement1 = document.getElementById('app1');
  if (!appElement) throw Error('App root element not found');
  if (!appElement1) throw Error('App root element not found');
  // eslint-disable-next-line no-new
  // new App(appElement).start();
  form();

};
