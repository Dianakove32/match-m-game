// import { getData } from './form';
// import { getImgFromForm } from '../../getImgFromForm/getImgFromForm';
// import './form.scss';
// import { validation } from './validaion';

// const myModal = document.getElementById('btn-register');

// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// export function form() {
//   myModal.addEventListener('click', () => {
//     const modalDialog = document.querySelector('.modal-dialog');
//     const parent = document.createElement('div');
//     parent.classList.add('modal-content');
//     const title = document.createElement('h3');
//     title.innerHTML = 'Register new Player';
//     title.classList.add('title-form');
//     // eslint-disable-next-line @typescript-eslint/no-shadow
//     const form = document.createElement('form');
//     form.setAttribute('method', 'post');
//     form.setAttribute('action', 'submit');
//     form.classList.add('form');
//     const getImg = document.createElement('input');
//     getImg.setAttribute('type', 'file');
//     getImg.id = 'fileInput';
//     // getImg.setAttribute('placeholder', 'cho');
//     getImg.classList.add('fileInput');
//     getImg.classList.add('form-control');
//     // getImg.classList.add('inputName');
//     const input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     input.setAttribute('name', 'username');
//     input.setAttribute('placeholder', 'userName');
//     input.setAttribute('required', '');

//     input.classList.add('form-control');
//     input.classList.add('inputName');

//     const input2 = document.createElement('input');
//     input2.setAttribute('type', 'text');
//     input2.setAttribute('name', 'userSername');
//     input2.setAttribute('placeholder', 'userSername');
//     input2.classList.add('form-control');
//     input2.setAttribute('required', '');
//     const input3 = document.createElement('input');
//     input3.setAttribute('type', 'email');
//     input3.setAttribute('name', 'username');
//     input3.setAttribute('placeholder', 'email');
//     input3.classList.add('form-control');
//     input3.setAttribute('required', '');
//     const s = document.createElement('input'); // input element, Submit button
//     s.setAttribute('type', 'submit');
//     s.setAttribute('value', 'Submit');
//     const div = document.createElement('div');
//     div.classList.add('btn-container');
//     const btnClose = document.createElement('button');
//     btnClose.setAttribute('data-bs-dismiss', 'modal');
//     btnClose.classList.add('btn');
//     btnClose.classList.add('btn-secondary');
//     btnClose.innerHTML = 'cancel';
//     const btnAdd = document.createElement('button');
//     btnAdd.classList.add('btn');
//     btnAdd.classList.add('btn-primary');
//     btnAdd.classList.add('add-user');
//     btnAdd.innerHTML = 'add user';

//     // modal.appendChild(modalDialog);
//     modalDialog.appendChild(parent);
//     parent.appendChild(title);
//     div.appendChild(btnClose);
//     div.appendChild(btnAdd);
//     parent.appendChild(getImg);
//     form.appendChild(input);

//     form.appendChild(input2);
//     form.appendChild(input3);
//     parent.appendChild(form);
//     parent.appendChild(div);
//     input.focus();

//     btnAdd.addEventListener('click', () => {
//       validation();
//       getData();
//       getImgFromForm();
//     });
//   });
// }
