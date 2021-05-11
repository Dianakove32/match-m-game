import { BaseComponent } from "../base-components";
import { Card } from "../card/card";
import './cards-field.scss'

export class CardsField extends BaseComponent{
  static element(element: any) {
    throw new Error("Method not implemented.");
  }
  private cards: Card[] = []
  constructor(){
    super ('div', ['cards-field'])
  }
  clear (){
    this.cards = []
    this.element.innerHTML = ''
  }
  addCards(card: Card[]){
    this.cards = card;
    this.cards.forEach((card)=> {
      this.element.appendChild(card.element)
      })
    }
}
