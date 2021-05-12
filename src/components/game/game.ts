import { delay } from "../../shared/delay";
import { BaseComponent } from "../base-components";
import { Card } from "../card/card";
import { CardsField } from "../cards-field/cards-field";
const FLIP_DELAY = 3000
export class Game extends BaseComponent{
  private readonly cardsField : CardsField;
private activeCard?: Card;
private isAnamation= false;
constructor(){
  super();
  this.cardsField = new CardsField();
  this.element.appendChild(this.cardsField.element)
}

  newGame(images: string[]){
    //timer, score
this.cardsField.clear();
    const cards = images.concat(images).map((url)=> new Card(url)).sort(()=>Math.random() - .5)
   cards.forEach((card)=> card.element.addEventListener('click', ()=> this.cardHandler(card)))

    this.cardsField.addCards(cards)
  }

  private async cardHandler(card: Card){
    if(this.isAnamation) return;
if(!card.isFlipped)return
   this.isAnamation = true //2:24????????????
   await card.flipToFront()

if (!this.activeCard) {
  this.activeCard = card;
 this.isAnamation=false
 return
}

  if (this.activeCard.image !=card.image){
 //   this.activeCard. сделать ошибку красную карточку
 await delay(FLIP_DELAY)
    this.activeCard.flipToBack();
    await Promise.all([this.activeCard.flipToBack(),card.flipToBack()]) ;
  }
  this.activeCard=undefined
  this.isAnamation=false
//     сделать   зеленую карточку

  }
}
