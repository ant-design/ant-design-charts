import each from './each';
import isFunction from './is-function';

const keys = Object.keys
  ? (obj) => Object.keys(obj)
  : (obj) => {
      const result = [];
      each(obj, (value, key) => {
        if (!(isFunction(obj) && key === 'prototype')) {
          result.push(key);
        }
      });
      return result;
    };

export default keys;
