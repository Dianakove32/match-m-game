import { Game } from './components/game/game';
import { ImageCategoryModel } from './components/modals/image-category-modals';
import { getRuls } from './components/ruls/ruls';

export class App {
  private readonly game : Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.game.element.classList.add('cards');
    this.rootElement.appendChild(this.game.element);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}
