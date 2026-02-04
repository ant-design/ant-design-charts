import isArray from './is-array';
import isObject from './is-object';

function each(elements: any[] | object, func: (v: any, k: any) => any): void {
  if (!elements) {
    return;
  }
  let rst;
  if (isArray(elements)) {
    for (let i = 0, len = elements.length; i < len; i++) {
      rst = func(elements[i], i);
      if (rst === false) {
        break;
      }
    }
  } else if (isObject(elements)) {
    for (const k in elements) {
      if (elements.hasOwnProperty(k)) {
        rst = func(elements[k], k);
        if (rst === false) {
          break;
        }
      }
    }
  }
}

export default each;
