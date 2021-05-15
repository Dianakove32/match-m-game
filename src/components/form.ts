import { App } from '../app';

let btnRegister: HTMLElement;
let btnGame: HTMLElement;
let btnStop: HTMLElement;
export function getData():void {
  // const input = document.querySelector('.inputName');
  btnRegister = document.getElementById('btn-register')!;
  btnRegister.style.display = 'none';
  btnGame = document.getElementById('btn-start')!;
  btnGame.style.display = 'block';
  btnStop = document.getElementById('btn-stop')!;
  let timerId;
  btnGame?.addEventListener('click', () => {
    const appElement = document.getElementById('app');
    if (!appElement) throw Error('App root element not found');
    const rule = document.querySelector('.rule')!;
    rule.innerHTML = '';
    new App(appElement).start();
    btnGame.style.display = '';
    btnStop.style.display = 'block';
    // let i = 0;

    // timerId = setInterval(() => {
    //   console.log(i++);
    // }, 1000);
  });
  btnStop?.addEventListener('click', () => {
    btnStop.style.display = '';
    btnGame.style.display = 'block';

    //clearInterval(timerId);
  });

  // console.log(input.value);
}
