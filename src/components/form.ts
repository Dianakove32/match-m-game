import { App } from '../app';

const btnRegister: HTMLElement | null = document.getElementById('btn-register');
const btnGame: HTMLElement | null = document.getElementById('btn-start');
export function getData() {
  const input = document.querySelector('.inputName');
  btnRegister.style.display = 'none';
  btnGame.style.display = 'block';
  btnGame?.addEventListener('click', ()=>{
    const appElement = document.getElementById('app');
    if (!appElement) throw Error('App root element not found');
    new App(appElement).start();
  })
  console.log(input.value);
}
