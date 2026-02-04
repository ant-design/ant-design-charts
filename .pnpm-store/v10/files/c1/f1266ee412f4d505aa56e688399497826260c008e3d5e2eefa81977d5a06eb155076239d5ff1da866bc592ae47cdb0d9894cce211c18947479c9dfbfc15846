import isFunction from './is-function';

/**
 * _.memoize(calColor);
 * _.memoize(calColor, (...args) => args[0]);
 * @param f
 * @param resolver
 */
export default (f: Function, resolver?: (...args: any[]) => string) => {
  if (!isFunction(f)) {
    throw new TypeError('Expected a function')
  }

  const memoized = function(...args) {
    // 使用方法构造 key，如果不存在 resolver，则直接取第一个参数作为 key
    const key = resolver ? resolver.apply(this, args) : args[0];
    const cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = f.apply(this, args);
    // 缓存起来
    cache.set(key, result);
    return result
  };

  memoized.cache = new Map();

  return memoized
}
