import each from './each';

export default (obj1: any, obj2: any): boolean => {
  if (obj1.length !== obj2.length) {
    return false;
  }
  let result = true;
  each(obj1, (item, i) => {
    if (item !== obj2[i]) {
      result = false;
      return false;
    }
  });
  return result;
};
