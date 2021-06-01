export const getElType = (arg) => {
  return Object.prototype.toString.call(arg).slice(8,-1);
}
