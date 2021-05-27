/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function getValueSelect():string {
  const select: Element = document.querySelector('.card-type')!;
  const settingsOutput: Element = document.querySelector('.settings-output')!;
  const { value } = select;

  select.addEventListener('change', () => {
    settingsOutput.innerHTML = 'Start game';
  });

  return value;
}
export function getDifficaltiesSelect():string {
  const selectLength: Element = document.querySelector('.game-type')!;
  const { value } = selectLength;
  return value;
}
export function changeValue():string {
  const select: Element | null = document.querySelector('.card-type');
  const settingsOutput: Element | null = document.querySelector('.settings-output');
  select?.addEventListener('change', () => {
    settingsOutput?.innerHTML = 'Start game';
    settingsOutput?.classList.add('settings-output-green');
    if (select.value == 'Open this select menu') {
      settingsOutput?.innerHTML = 'Select game settings';
      settingsOutput?.classList.remove('settings-output-green');
      settingsOutput?.classList.add('settings-output');
    }
  });
}
