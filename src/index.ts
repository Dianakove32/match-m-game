import './style.scss';
import { App } from './app';
// import {form } from './components/form';
import { form } from './formJS';

import { navigation } from './components/navigation';
import { getRuls } from './components/ruls/ruls';
import { rulsArr } from './constants';

window.onload = () => {
  const appElement = document.getElementById('app');
  const appElement1 = document.getElementById('app1');
  if (!appElement) throw Error('App root element not found');
  if (!appElement1) throw Error('App root element not found');
  // eslint-disable-next-line no-new
  // new App(appElement).start();
  form();
  navigation();
  getRuls(rulsArr)
};

const startBtn = document.querySelector('.btn-start')!;
const pauseBtn = document.querySelector('.pause')!;
const stopBtn = document.querySelector('.btn-stop')!;
const timer = document.getElementById('stopwatch')!;
console.log(startBtn)



let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

function display() {
  let h; let m; let
    s;
  h = hr;
  m = min;
  s = sec;
  if (hr < 10) {
    h = `0${hr}`;
  }
  if (min < 10) {
    m = `0${min}`;
  }
  if (sec < 10) {
    s = `0${sec}`;
  }
  timer.textContent = `${h}:${m}:${s}`;
}
let timeCycle: any;
function startTime() {
  stoptime = false;
  timeCycle = setInterval(() => {
    sec += 1;
    if (sec === 60) {
      min += 1;
      sec = 0;
    }
    if (min === 60) {
      hr += 1;
      min = 0;
      sec = 0;
    }
    display();
  }, 1000);
}

function pauseTimer() {
  stoptime = true;
  clearInterval(timeCycle);
  pauseBtn.textContent = 'continue';
}

function continueTimer() {
  stoptime = false;
  startTime();
  pauseBtn.textContent = 'pause';
}

function resetTime() {
  stoptime = true;
  // eslint-disable-next-line no-multi-assign
  hr = min = sec = 0;
}

function stopTimer() {
  stoptime = true;
  clearInterval(timeCycle);
  resetTime();
  display();
}

startBtn.addEventListener('click', () => {
  startTime();
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  stopBtn.disabled = false;
});

pauseBtn.addEventListener('click', () => {
  if (stoptime) {
    continueTimer();
    stoptime = false;
  } else {
    pauseTimer();
    stoptime = true;
  }
});

stopBtn.addEventListener('click', () => {
  stopTimer();
  stoptime = true;
  pauseBtn.textContent = 'pause';
  pauseBtn.disabled = true;
  stopBtn.disabled = true;
  startBtn.disabled = false;
});
