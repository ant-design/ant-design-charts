import { isObject, isString, clone } from '@antv/util';

export const cloneBesidesImg = (obj: any) => {
  const clonedObj = {};
  Object.keys(obj).forEach((key1) => {
    const obj2 = obj[key1];
    if (isObject(obj2)) {
      const clonedObj2 = {};
      Object.keys(obj2).forEach((key2) => {
        const v = obj2[key2];
        if (key2 === 'img' && !isString(v)) return;
        clonedObj2[key2] = clone(v);
      });
      clonedObj[key1] = clonedObj2;
    } else {
      clonedObj[key1] = clone(obj2);
    }
  });
  return clonedObj;
};
