/* eslint-disable func-names */
import './getImgFromForm.scss';

export function getImgFromForm():void {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const fileInput: HTMLElement = document.getElementById('fileInput')!;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const fileDisplayArea: HTMLElement = document.getElementById('fileDisplayArea')!;
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const imageType = /image.*/;
    if (file.type.match(imageType)) {
      const reader = new FileReader();
      reader.onload = function ():void {
        fileDisplayArea.innerHTML = '';
        const img: HTMLImageElement = new Image();
        img.src = reader.result;
        fileDisplayArea.appendChild(img);
      };
      reader.readAsDataURL(file);
    } else {
      fileDisplayArea.innerHTML = 'File not supported!';
    }
  });
}
