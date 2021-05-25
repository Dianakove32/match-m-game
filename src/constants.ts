/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function getValueSelect():string {
  const select: Element = document.querySelector('.card-type')!;
  const { value } = select;
  return value;
}
export function getDifficaltiesSelect():string {
  const selectLength: Element = document.querySelector('.game-type')!;
  const { value } = selectLength;
  return value;
}
