import isFunction from './is-function';
import isMatch from './is-match';
import isArray from './is-array';
import isPlainObject from './is-plain-object';

function find<T>(arr: T[], predicate: Function): T;
function find<T>(arr: T[], predicate: object): T;

function find<T>(arr: T[], predicate: Function | object): T {
  if (!isArray(arr)) return null;

  let _predicate;
  if (isFunction(predicate)) {
    _predicate = predicate;
  }
  if (isPlainObject(predicate)) {
    _predicate = (a) => isMatch(a, predicate);
  }
  if (_predicate) {
    for (let i = 0; i < arr.length; i += 1) {
      if (_predicate(arr[i])) {
        return arr[i];
      }
    }
  }
  return null;
}

export default find;
