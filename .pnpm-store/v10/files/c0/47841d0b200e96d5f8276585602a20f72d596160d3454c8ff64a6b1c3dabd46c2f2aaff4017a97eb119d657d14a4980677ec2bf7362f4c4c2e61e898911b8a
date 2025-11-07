import mix from './mix';
import isFunction from './is-function';
import toArray from './to-array';

const augment = function (...args: any[]) {
  const c = args[0];
  for (let i = 1; i < args.length; i++) {
    let obj = args[i];
    if (isFunction(obj)) {
      obj = obj.prototype;
    }
    mix(c.prototype, obj);
  }
};

export default augment;
