// import { App } from '../../../app';

// let btnRegister: HTMLElement;
// let btnGame: HTMLElement;
// let btnStop: HTMLElement;
// let liOutput: HTMLElement;
// let inputName: HTMLElement;
// let rule: Element;

// export function getData():void {
//   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//   btnRegister = document.getElementById('btn-register')!;
//   btnRegister.style.display = 'none';
//   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//   btnGame = document.getElementById('btn-start')!;
//   btnGame.style.display = 'block';
//   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//   btnStop = document.getElementById('btn-stop')!;
//   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//   liOutput = document.querySelector('.li')!;
//   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//   inputName = document.querySelector('.inputName')!;
//   liOutput.innerHTML = inputName.value;
//   // inputName?.addEventListener('change', (e) => {
//   // });
//   btnGame?.addEventListener('click', () => {
//     const appElement = document.getElementById('app');
//     if (!appElement) throw Error('App root element not found');
//     new App(appElement).start();
//     btnGame.style.display = '';
//     btnStop.style.display = 'block';
//     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//     rule = document.querySelector('.rule')!;
//     rule.innerHTML = '';
//   });
//   btnStop?.addEventListener('click', () => {
//     btnStop.style.display = '';
//     btnGame.style.display = 'block';
//   });
// }
