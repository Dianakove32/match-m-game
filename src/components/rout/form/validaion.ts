let inputName: HTMLElement;

export function validation():void {
  inputName = document.querySelector('.inputName')!;
  inputName?.addEventListener('change', ( ) => {
    // eslint-disable-next-line no-alert

  });
}
