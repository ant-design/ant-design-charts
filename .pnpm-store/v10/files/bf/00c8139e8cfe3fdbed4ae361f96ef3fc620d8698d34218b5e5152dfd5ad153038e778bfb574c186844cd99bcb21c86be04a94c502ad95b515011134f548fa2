import each from './each';
import isFunction from './is-function';

// @ts-ignore
const values = Object.values ? obj => Object.values(obj) : obj => {
  const result = [];
  each(obj, (value, key) => {
    if (!(isFunction(obj) && key === 'prototype')) {
      result.push(value);
    }
  });
  return result;
};

export default values;
