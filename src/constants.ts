export const rulsArr: string[] = ['Register new player in game',
  'Configure your game settings',
  'Start you new game! Remember card positions and match it before times up.'];

export function getValueSelect() {
  const select = document.querySelector('.card-type')!;
  // eslint-disable-next-line no-return-assign
  const { value } = select;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return value;
}
export function getDifficaltiesSelect() {
  const selectLength = document.querySelector('.game-type')!;
  // eslint-disable-next-line no-return-assign
  const { value } = selectLength;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return value;
}
