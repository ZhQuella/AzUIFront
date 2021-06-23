export const getElType = (arg: any): string => {
  return Object.prototype.toString.call(arg).slice(8,-1);
}
