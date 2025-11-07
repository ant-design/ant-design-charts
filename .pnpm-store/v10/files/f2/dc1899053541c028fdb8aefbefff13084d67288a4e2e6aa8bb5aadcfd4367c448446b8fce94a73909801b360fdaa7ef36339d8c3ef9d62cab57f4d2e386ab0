import each from './each';
import isPlainObject from './is-plain-object';

const hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Creates an object composed of the picked `object` properties.
 *
 * @param {Object} object The source object.
 * @param {...(string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 * pick(object, ['a', 'c']);  // => { 'a': 1, 'c': 3 }
 */

export interface ObjectType<T> {
  [key: string]: T;
}

export default <T>(object: ObjectType<T>, keys: string[]): ObjectType<T> => {
  if (object === null || !isPlainObject(object)) {
    return {};
  }
  const result: ObjectType<T> = {};
  each(keys, key => {
    if (hasOwnProperty.call(object, key)) {
      result[key] = object[key];
    }
  });
  return result;
};
