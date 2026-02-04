import isArray from './is-array';
import isString from './is-string';

function endsWith(arr: string, e: string): boolean;
function endsWith<T>(arr: T[], e: T): boolean;
function endsWith<T>(arr: string | T[], e: string | T): boolean {
  return isArray(arr) || isString(arr) ? arr[arr.length - 1] === e : false;
}

export default endsWith;
