import { App } from '../../app';
import { getRuls } from '../ruls/ruls';

let app: HTMLElement | null;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function locationResolver(location: string) {
  app = document.getElementById('app')!;
  console.log(location);
  // eslint-disable-next-line default-case
  switch (location) {
    case '#/ruls/': {
      app.innerHTML = `
      <div>${getRuls()}</div>
      `;
    break;
    }
    case '#/score/': {
      app.innerHTML = `
<h3>${location}</h3>
<p>score</p>
`;
      break;
    }
    case '#/settings/': {
      app.innerHTML = `
<h3>${location}</h3>
<p>settings </p>
`;
      break;
    }
    case '#/game/': {
      const appElement = document.getElementById('app');
      if (!appElement) throw Error('App root element not found');
      new App(appElement).start();
      app.innerHTML = `
<h1>${location}</h1>
<p>game</p>
`;
      break;
    }
  }
}

// window.addEventListener('load', () => {
//   const location = window.location.hash
//   if(location){
//     locationResolver(location)
//   }
// })
