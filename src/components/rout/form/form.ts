/* eslint-disable @typescript-eslint/no-use-before-define */
import { App } from '../../../app';
import { getImgFromForm } from '../../getImgFromForm/getImgFromForm';
import { validation } from './validaion';

let btnRegister: HTMLElement;
let btnGame: HTMLElement;
let btnStop: HTMLElement;
let liOutput: HTMLElement;
let inputName: HTMLElement;

export function getData():void {
  btnRegister = document.getElementById('btn-register')!;
  btnRegister.style.display = 'none';
  btnGame = document.getElementById('btn-start')!;
  btnGame.style.display = 'block';
  btnStop = document.getElementById('btn-stop')!;
  liOutput = document.querySelector('.li')!;
  // liOutput2 = document.querySelector('#fileDisplayArea')!;
  inputName = document.querySelector('.inputName')!;
  liOutput.innerHTML = inputName.value;
  inputName?.addEventListener('change', (e) => {
    // eslint-disable-next-line no-alert
    console.log('test')
  });
  btnGame?.addEventListener('click', () => {
    const appElement = document.getElementById('app');
    if (!appElement) throw Error('App root element not found');
    new App(appElement).start();
    btnGame.style.display = '';
    btnStop.style.display = 'block';
    const rule = document.querySelector('.rule')!;
    rule.innerHTML = '';
  });
  btnStop?.addEventListener('click', () => {
    btnStop.style.display = '';
    btnGame.style.display = 'block';
  });
}
