export const uid = () => {
  const timmy = Date.now().toString(36).toLocaleUpperCase();
  let randy = parseInt(Math.random() * 12, 10);
  randy = randy.toString(36).slice(0, 12).padStart(12, '0').toLocaleUpperCase();
  return ''.concat(timmy, '-', randy);
};
