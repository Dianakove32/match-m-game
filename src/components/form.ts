import { App } from '../app';

let btnRegister: HTMLElement;
let btnGame: HTMLElement;
let btnStop: HTMLElement;
let liOutput: HTMLElement;
let inputName: HTMLElement;
export function getData():void {
  // const input = document.querySelector('.inputName');
  btnRegister = document.getElementById('btn-register')!;
  btnRegister.style.display = 'none';
  btnGame = document.getElementById('btn-start')!;
  btnGame.style.display = 'block';
  btnStop = document.getElementById('btn-stop')!;
  liOutput = document.querySelector('.li')!;
  inputName = document.querySelector('.inputName')!;
  liOutput.innerHTML = inputName.value;
  btnGame?.addEventListener('click', () => {
    const appElement = document.getElementById('app');
    if (!appElement) throw Error('App root element not found');
    const rule = document.querySelector('.rule')!;
    rule.innerHTML = '';
    new App(appElement).start();
    btnGame.style.display = '';
    btnStop.style.display = 'block';
  });
  btnStop?.addEventListener('click', () => {
    btnStop.style.display = '';
    btnGame.style.display = 'block';
  });
}
