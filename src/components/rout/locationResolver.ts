import { changeValue } from '../../constants';
import '../../style.scss';

let app: HTMLElement | null;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function locationResolver(location: string) {
  app = document.getElementById('app')!;
  // eslint-disable-next-line default-case
  switch (location) {
    case '#/ruls/': {
      app.innerHTML = `
      <div class="container  ">
      <h2  class="h2-cl">How to play?</h2>
        <div class="card text-dark bg-light w-100  mb-3 justify-content-center" >
        <div class="card-header">1</div>
        <div class="card-body">
          <p class="card-text">Register new player in game </p>
        </div>
      </div>
        <div class="card text-dark w-100 bg-light mb-3">
        <div class="card-header">2</div>
        <div class="card-body">
          <p class="card-text"> Configure your game settings
          </p>
        </div>
      </div>
        <div class="card text-dark w-100 bg-light mb-3"  >
        <div class="card-header">3</div>
        <div class="card-body">
          <p class="card-text">  Start you new game! Remember card positions and match it before times up.
          </p>
        </div>
      </div>
      </div>
          `;
      break;
    }
    case '#/score/': {
      app.innerHTML = `

      <div class="container">
      <h2>Best players</h2>
      <ol class="list-group list-group-numbered">
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto div">
          <div class="fw-bold">Anna Kivachova</div>
          anna@mail.ru
        </div>
        <span class="badge bg-primary rounded-pill">Score:290</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">Andrey Curbatov</div>
          zgzdg123@gmail.com
        </div>
        <span class="badge bg-primary rounded-pill">Score:305</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">Lora Daineco</div>
          12anna@mail.ru
        </div>
        <span class="badge bg-primary rounded-pill">Score:12</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">Alex Daineco</div>
          ass-na@mail.ru
        </div>
        <span class="badge bg-primary rounded-pill">Score:183</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">Nikolai Antipov</div>
          Lab_125@gmail.com
        </div>
        <span class="badge bg-primary rounded-pill">Score:400</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">Natalia Lapkina</div>
          ja@-45666@mail.ru
        </div>
        <span class="badge bg-primary rounded-pill">Score:250</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">Tatiana Petrova</div>
          sasha85@mail.ru
        </div>
        <span class="badge bg-primary rounded-pill">Score:230</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">Daniil Lapitcky</div>
          125-K@mail.ru
        </div>
        <span class="badge bg-primary rounded-pill">Score:523</span>
      </li>

    </ol>


      `;
      break;
    }
    case '#/settings/': {
      app.innerHTML = `
      <div class="container ">
      <p class="settings-output">Select game settings</p>
      <p>Select game cards type</p>
      <select class="form-select card-type" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="unsorted">Animal</option>
        <option value="Cars">Cars</option>
       </select>

      <p>Select game type</p>
      <select class="form-select game-type" aria-label="Default select example">
        <option selected>Choose difficulties</option>
        <option value="easy">easy</option>
        <option value="middle">middle</option>
        <option value="hard">hard</option>
       </select>
        </div>
`;
      break;
    }
  }
changeValue()
}
