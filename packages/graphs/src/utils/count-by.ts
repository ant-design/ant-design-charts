import { reduce } from '@antv/util';
/**
 * From lodash
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the number of times the key was returned by `iteratee`. The
 * iteratee is invoked with one argument: (value).
 *
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'betty', 'active': true },
 *   { 'user': 'fred', 'active': false }
 * ]
 *
 * countBy(users, value => value.active);
 * // => { 'true': 2, 'false': 1 }
 */
export const countBy = (collection: Array<any>, iteratee?: Function) => {
  return reduce(
    collection,
    (result, value, key) => {
      key = iteratee ? iteratee(value) : value;
      if (result.hasOwnProperty(key)) {
        ++result[key];
      } else {
        result[key] = 1;
      }
      return result;
    },
    {},
  );
};
