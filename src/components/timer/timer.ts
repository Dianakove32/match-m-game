// const startBtn = document.querySelector('.btn-start')!;
// // const pauseBtn = document.querySelector('.pause')!;
// const stopBtn = document.querySelector('.btn-stop')!;
// const timer = document.getElementById('stopwatch')!;

// let hr = 0;
// let min = 0;
// let sec = 0;
// let stoptime = true;

// function display() {
//   let h; let m; let
//     s;
//   h = hr;
//   m = min;
//   s = sec;
//   if (hr < 10) {
//     h = `0${hr}`;
//   }
//   if (min < 10) {
//     m = `0${min}`;
//   }
//   if (sec < 10) {
//     s = `0${sec}`;
//   }
//   timer.textContent = `${h}:${m}:${s}`;
// }
// let timeCycle: unknown;
// function startTime() {
//   stoptime = false;
//   timeCycle = setInterval(() => {
//     sec += 1;
//     if (sec === 60) {
//       min += 1;
//       sec = 0;
//     }
//     if (min === 60) {
//       hr += 1;
//       min = 0;
//       sec = 0;
//     }
//     display();
//   }, 1000);
// }

// function pauseTimer() {
//   stoptime = true;
//   clearInterval(timeCycle);
//   pauseBtn.textContent = 'continue';
// }

// function continueTimer() {
//   stoptime = false;
//   startTime();
//   pauseBtn.textContent = 'pause';
// }

// function resetTime() {
//   stoptime = true;
//   // eslint-disable-next-line no-multi-assign
//   hr = min = sec = 0;
// }

// function stopTimer() {
//   stoptime = true;
//   clearInterval(timeCycle);
//   resetTime();
//   display();
// }

// startBtn.addEventListener('click', () => {
//   startTime();
//   startBtn.disabled = true;
//   // pauseBtn.disabled = false;
//   stopBtn.disabled = false;
// });

// // pauseBtn.addEventListener('click', () => {
// //   if (stoptime) {
// //     continueTimer();
// //     stoptime = false;
// //   } else {
// //     pauseTimer();
// //     stoptime = true;
// //   }
// // });

// stopBtn.addEventListener('click', () => {
//   stopTimer();
//   stoptime = true;
//   // pauseBtn.textContent = 'pause';
//   // pauseBtn.disabled = true;
//   stopBtn.disabled = true;
//   startBtn.disabled = false;
// });

// // export class timer(){
// //   constructor() {
// //   super('div', ['timer']);

// //   const minutesSection = new Component('div', ['section-minutes']);
// //   this.minutes = new Component('span', ['minutes']);
// //   minutesSection.element.append(this.minutes.element);

// //   const secondsSection = new Component('div', ['section-seconds']);
// //   this.seconds = new Component('span', ['seconds']);
// //   secondsSection.element.append(this.seconds.element);

// //   const semicolon = document.createElement('div');
// //   semicolon.append(':');

// //   this.element.append(
// //     minutesSection.element,
// //     semicolon,
// //     secondsSection.element,
// //   );
// // }
// // }
