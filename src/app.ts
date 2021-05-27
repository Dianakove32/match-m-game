/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
import { Game } from './components/game/game';
import { ImageCategoryModel } from './components/modals/image-category-modals';
import { getDifficaltiesSelect, getValueSelect } from './constants';

export class App {
  private readonly game : Game;

  private readonly cardsField : CardsField;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.game.element.classList.add('cards');
    this.rootElement.appendChild(this.game.element);
  }

  async start(): Promise<void> {
    const val = getValueSelect();
    const lengthSel = getDifficaltiesSelect();
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    console.log(categories);

    const cat: ImageCategoryModel | undefined = categories.find((el) => el.category === val);
    const st: string[] | undefined = cat!.images;
    // eslint-disable-next-line no-alert
    if (!cat) alert('Select game cards type');
    // const cat = getValueSelect();
    // const cat = categories[1] ;
    if (lengthSel === 'easy') {
      // const st: string[] | undefined = cat?.images;
      st.length = 2;
      // const images: string[] | undefined = cat?.images.map((name) => `${cat.category}/${name}`);
      // this.game.newGame(images);
    }
    if (lengthSel === 'middle') {
      st.length = 3;
      // const images = cat?.images.map((name) => `${cat.category}/${name}`);
      // this.game.newGame(images);
    }
    if (lengthSel === 'hard') {
      st.length = 6;
      // const images = cat?.images.map((name) => `${cat.category}/${name}`);
      // this.game.newGame(images);
    }
    const images: string[] | undefined = cat?.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images!);
  }
}
