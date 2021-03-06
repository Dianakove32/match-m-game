import { BaseComponent } from '../base-components';
import './card.scss';

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  isFlipped = false;

  constructor(readonly image: string) {
    super('div', ['card-container']);
    this.element.innerHTML = `
  <div class="card">
    <div class="card__front" style= "background-image: url('./assets/${image}')">front</div>
    <div class="card__back">back</div>
  </div>
  `;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  flipToBack() {
    this.isFlipped = true;
    return this.flip(true);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  flipToFront() {
    this.isFlipped = false;
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}
