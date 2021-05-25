import { locationResolver } from './rout/locationResolver';

const app: HTMLElement | null = document.getElementById('main')!;

export function navigation():void {
  app.innerHTML = `
  <nav class="navbar navbar-dark navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MATCH MG</a>
    <div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link about active"
          aria-current="page"
          href="#/ruls/"
          >about game</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"
          href="#/score/"
          >best score</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"
          href="#/settings/"
          >game settings</a>
        </li>
        <button id='btn-register' data-toggle='modal' data-bs-toggle="modal"
          data-bs-target="#exampleModal" class="btn btn-light">register new
          player</button>
        <button href="#/game/"
         id='btn-start' class="btn btn-light start btn-start">Start game</button>
        <button id='btn-stop' class="btn btn-light stop btn-stop">stop game</button>
        <button   class="btn btn-light pause ">pouse game</button>
    <li  class="li"></li>
        <div id="fileDisplayArea"></div>
      </div>
      </ul>

    <button id="registr-btn" type="button"
     class="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop"">Register new player</button>
    <div >
    <ul >
<li class="  d-flex justify-content-between align-items-start">
  <div class="ms-4 me-auto div">
  <div id="fileDisplayArea"></div>
    <div class="fw-bold outputForm"></div>
  </div>
  </li>
  </ul>
    </div>
    <div class="modal fade"
    id="staticBackdrop"
     data-bs-backdrop="static"
     data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Registr new Player</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">


        <form class="row g-3">
         <div class="mb-3">
 <label for="fileInput" class="form-label">Add avatar</label>
 <input type="file" id="fileInput" class="form-control form-control-sm">
</div>
<div>
        <div class="col-md-12 mb-3">

          <input type="text" class="form-control  name-input" placeHolder='Name' id="validationServer01"   required>
          <div class="invalid-feedback">
          Invalid name!
          </div>

          <div  id="validationServerUsernameFeedback"">
            enter name!
          </div>
        </div>
        <div class="col-md-12">
          <input type="text"
          class="form-control lastName-input" placeHolder='Last name' id="validationServer02"   required>
          <div class="invalid-feedback">
          Invalid name!
          </div>
        </div>
        <div class="col-md-12">
            <div class="input-group has-validation">
            <input type="email" class="form-control "
            placeHolder='Email' id="validationServerUsername"
            aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
                 <div class="col-12">
          <button class="btn btn-primary submit" type="submit" disabled>Submit form</button>
        </div>
      </form>


        </div>

      </div>
    </div>
  </div>
</div>
</nav>
`;
  // const location = window.location.hash;
  // console.log(location);
  // if (location) {
  //   locationResolver(location);
  // }

  document.querySelectorAll('.nav-link')?.forEach((x) => x.addEventListener('click', (e) => {
    const newLocation = e.view.location.hash;
    locationResolver(newLocation);
  }));
}
