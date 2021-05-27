import './form.scss';

export function validation():string {

  let inputName: HTMLElement;
  const input: HTMLElement = document.querySelector('.name-input')!;
  const LastNameInput: HTMLElement = document.querySelector('.lastName-input')!;
  const inputBtn: HTMLElement = document.querySelector('.submit')!;
  const outputForm: HTMLElement = document.querySelector('.outputForm')!;
  const btnCancel: HTMLElement = document.querySelector('.cancel')!;
  const emailInput: HTMLElement = document.querySelector('.email')!;
  const fileDisplayArea: HTMLElement = document.querySelector('#fileDisplayArea')!;
  const fileInput: HTMLElement = document.querySelector('#fileInput')!;
  let isCorrectLastName: boolean;
  let isCorrectName: boolean;

  if (inputBtn) {
    inputBtn.addEventListener('click', (e) => {
      // e.preventDefoult();
     const  val = input.value;
      outputForm.innerHTML = val;

    });
  }
  if (inputBtn) {
    input.addEventListener('input', (e) => {
      let valInp = input.value;

      const { value } = e.target;

      const regName = new RegExp('^[a-z A-Z]*$');
      const resName = regName.test(value);
      if (!resName) {
        isCorrectName = false;

        input.classList.add('is-invalid');
      } else {
        isCorrectName = true;

        input.classList.remove('is-invalid');

        input.classList.add('is-valid');
      }
      if (!isCorrectName || !isCorrectLastName) {
        inputBtn.disabled = true;
      } else {
        inputBtn.disabled = false;
      }
    });
    LastNameInput.addEventListener('input', (e) => {
      const { value } = e.target;
      const regLastName = new RegExp('^[a-z A-Z]*$');
      const resLastName = regLastName.test(value);
      if (!resLastName) {
        isCorrectLastName = false;
        LastNameInput.classList.add('is-invalid');
      } else {
        isCorrectLastName = true;
        LastNameInput.classList.remove('is-invalid');
        LastNameInput.classList.add('is-valid');
      }
      if (!isCorrectName || !isCorrectLastName) {
        inputBtn.disabled = true;
      } else {
        inputBtn.disabled = false;
      }
    });
  }
  btnCancel.addEventListener('click', ()=>{
    input.value = '';
    LastNameInput.value = '';
    emailInput.value = '';
    LastNameInput.classList.add('is-invalid');
    input.classList.add('is-invalid');
    inputBtn.disabled = true;
    fileDisplayArea.innerHTML='';
    fileInput.value='';
  })

}
