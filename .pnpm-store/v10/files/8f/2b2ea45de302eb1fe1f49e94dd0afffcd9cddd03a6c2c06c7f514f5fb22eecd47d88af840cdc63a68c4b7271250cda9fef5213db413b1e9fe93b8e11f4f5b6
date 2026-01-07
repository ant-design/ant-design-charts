import isArray from './is-array';
import isFunction from './is-function';

const hasOwnProperty = Object.prototype.hasOwnProperty;

export interface ObjectType<T> {
  [key: string]: T[];
}

function groupBy<T>(data: T[], condition: (item: T) => string): ObjectType<T>;
function groupBy<T>(data: T[], condition: string): ObjectType<T>;
function groupBy<T>(data: T[], condition: ((item: T) => string) | string): ObjectType<T> {
  if (!condition || !isArray(data)) {
    return {};
  }
  const result: ObjectType<T> = {};

  // 兼容方法和 字符串的写法
  const predicate = isFunction(condition) ? condition : (item) => item[condition];

  let key: string;
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    key = predicate(item);
    if (hasOwnProperty.call(result, key)) {
      result[key].push(item);
    } else {
      result[key] = [item];
    }
  }

  return result;
}

export default groupBy;
