import { BaseComponent } from "../base-components";
import { Card } from "../card/card";
import { CardsField } from "../cards-field/cards-field";

export class Game extends BaseComponent{
  private readonly cardsField : CardsField;

constructor(){
  super();
  this.cardsField = new CardsField();
  this.element.appendChild(this.cardsField.element)
}

  newGame(images: string[]){
this.cardsField.clear();

    const cards = images.concat(images).map((url)=> new Card(url)).sort(()=>Math.random() - .5)
    this.cardsField.addCards(cards)
  }
}
