/* eslint-disable no-console */
import { Game } from './components/game/game';
import { ImageCategoryModel } from './components/modals/image-category-modals';
import { getRuls } from './components/ruls/ruls';
import { getDifficaltiesSelect, getValueSelect } from './constants';

export class App {
  private readonly game : Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.game.element.classList.add('cards');
    this.rootElement.appendChild(this.game.element);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async start() {
    const val = getValueSelect();
    const lengthSel = getDifficaltiesSelect();
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    console.log(categories);

    const cat = categories.find((el) => el.category === val);
    if (!cat ) alert('Select game cards type');
    // const cat = getValueSelect();
    // const cat = categories[1] ;
    if (lengthSel === 'easy') {
      cat?.images.length = 2;
      console.log(cat);
      const images = cat.images.map((name) => `${cat.category}/${name}`);
      this.game.newGame(images);
    }
    if (lengthSel === 'middle') {
      cat?.images.length = 3;
      console.log(cat);
      const images = cat.images.map((name) => `${cat.category}/${name}`);
      this.game.newGame(images);
    }
    if (lengthSel === 'hard') {
      cat?.images.length = 6;
      console.log(cat);
      const images = cat.images.map((name) => `${cat.category}/${name}`);
      this.game.newGame(images);
    }
  }
}
