import { BaseComponent } from '../base-components'
import './card.scss'

const FLIP_CLASS = 'flipped'

export  class Card extends BaseComponent {
constructor( readonly image: string){
  super('div', ['card-container'])
  this.element.innerHTML = `
  <div class="card">
    <div class="card__front" style= "background-image: url('./assets/${image}')">front</div>
    <div class="card__back">back</div>
  </div>
  `
}
flipToBack(){
this.element.classList.add(FLIP_CLASS )
}

flipToFront(){
  this.element.classList.remove(FLIP_CLASS )
  }
}
