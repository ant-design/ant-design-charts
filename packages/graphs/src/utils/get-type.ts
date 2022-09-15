export const getType = (n: Object) => {
  return Object.prototype.toString.call(n).slice(8, -1);
};
