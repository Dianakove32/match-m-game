import './getImgFromForm.scss';

export function getImgFromForm():void {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const fileInput = document.getElementById('fileInput')!;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const fileDisplayArea = document.getElementById('fileDisplayArea')!;

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const imageType = /image.*/;

    if (file.type.match(imageType)) {
      const reader = new FileReader();

      // eslint-disable-next-line func-names
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
function type<T>(type: any, arg1: string, listener: any, arg3: (this: HTMLElement, ev: Event) => any, arg4: any) {
  throw new Error('Function not implemented.');
}

function listener<T>(type: <T>(type: any, arg1: string, listener: any, arg3: (this: HTMLElement, ev: Event) => any, arg4: any) => void, arg1: string, listener: any, arg3: (this: HTMLElement, ev: Event) => any, arg4: any) {
  throw new Error('Function not implemented.');
}

