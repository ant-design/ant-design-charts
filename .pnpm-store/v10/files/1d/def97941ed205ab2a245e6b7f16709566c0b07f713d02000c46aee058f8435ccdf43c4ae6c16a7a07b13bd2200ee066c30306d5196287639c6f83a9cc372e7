import isArray from './is-array';
import isString from './is-string';
import isFunction from './is-function';

export interface ObjectType<T> {
  [key: string]: T;
}

function sortBy<T> (arr: ObjectType<T>[], key: Function): ObjectType<T>[];
function sortBy<T> (arr: ObjectType<T>[], key: string): ObjectType<T>[];
function sortBy<T> (arr: ObjectType<T>[], key: string[]): ObjectType<T>[];

function sortBy<T> (arr: ObjectType<T>[], key: Function | string | string[]): ObjectType<T>[] {
  let comparer;
  if (isFunction(key)) {
    comparer = (a, b) => key(a) - key(b);
  } else {
    let keys = [];
    if (isString(key)) {
      keys.push(key);
    } else if (isArray(key)) {
      keys = key;
    }
    comparer = (a, b) => {
      for (let i = 0; i < keys.length; i += 1) {
        const prop = keys[i];
        if (a[prop] > b[prop]) {
          return 1;
        }
        if (a[prop] < b[prop]) {
          return -1;
        }
      }
      return 0;
    };
  }

  arr.sort(comparer);
  return arr;
}

export default sortBy;
