import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-components';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';

const FLIP_DELAY = 3000;
export class Game extends BaseComponent {
  private readonly cardsField : CardsField;

  private activeCard?: Card;

  private isAnamation = false;

  constructor() {
    super();
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  newGame(images: string[]) {
  // timer, score
    this.cardsField.clear();
    const cards = images.concat(images).map((url) => new Card(url)).sort(() => Math.random() - 0.5);
    cards.forEach((card) => card.element.addEventListener('click', () => this.cardHandler(card)));
    this.cardsField.addCards(cards);
    // const everyC=cards.every(el=> el.element.contains('green'))
  }

  private async cardHandler(card: Card) {
    if (this.isAnamation) return;
    if (!card.isFlipped) return;
    this.isAnamation = true; // 2:24????????????
    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnamation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      const activC = this.activeCard.element;
      activC.classList.add('red');
      card.element.classList.add('red');
      await delay(FLIP_DELAY);
      this.activeCard.flipToBack();
      activC.classList.remove('red');
      card.element.classList.remove('red');
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    } if (this.activeCard.image === card.image) {
      const activC = this.activeCard.element;
      activC.classList.add('green');
      card.element.classList.add('green');
    } this.activeCard = undefined;
    this.isAnamation = false;

    // const activC = card.element;
    // activC.classList.add('green');
    // card.classList.add('green');
    //     сделать   зеленую карточку
    // const arr=document.querySelectorAll('.card-container')
    // if( arr.every(el=>el.includes('green')) ){
    //   console.log('yeeeee')
    // }
  }
}
