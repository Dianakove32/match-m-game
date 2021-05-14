import { BaseComponent } from '../base-components';
import { Card } from '../card/card';
import './cards-field.scss';

const SHOW_TIME = 5;
export class CardsField extends BaseComponent {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static element() {
    throw new Error('Method not implemented.');
  }

  private cards: Card[] = [];

  constructor() {
    super('div', ['cards-field']);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  addCards(card: Card[]) {
    this.cards = card;
    // eslint-disable-next-line @typescript-eslint/no-shadow
    this.cards.forEach((card) => {
      this.element.appendChild(card.element);
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        this.cards.forEach((card) => card.flipToBack());
      }, SHOW_TIME * 1000);
    });
  }
}
