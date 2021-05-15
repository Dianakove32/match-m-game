import { rulsArr } from '../constants';
import { getRuls } from './ruls/ruls';

const aboutBtn: Element | null = document.querySelector('.about');

export function navigation():void {
  aboutBtn?.addEventListener('click', () => {

    getRuls(rulsArr);
  });
}
