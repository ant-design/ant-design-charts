function flru(max: number) {
  let num, curr, prev;
  const limit = max || 1;

  function keep(key, value) {
    if (++num > limit) {
      prev = curr;
      reset(1);
      ++num;
    }
    curr[key] = value;
  }

  function reset(isPartial?: number) {
    num = 0;
    curr = Object.create(null);
    isPartial || (prev = Object.create(null));
  }

  reset();

  return {
    clear: reset,
    has: function (key) {
      return curr[key] !== void 0 || prev[key] !== void 0;
    },
    get: function (key) {
      var val = curr[key];
      if (val !== void 0) return val;
      if ((val = prev[key]) !== void 0) {
        keep(key, val);
        return val;
      }
    },
    set: function (key, value) {
      if (curr[key] !== void 0) {
        curr[key] = value;
      } else {
        keep(key, value);
      }
    },
  };
}

const CacheMap = new Map<Function, ReturnType<typeof flru>>();

/**
 * 缓存函数的计算结果，避免重复计算
 * @example
 * _.memoize(calColor);
 * _.memoize(calColor, (...args) => args[0]);
 * @param fn 缓存的函数
 * @param resolver 生成缓存 key 的函数
 * @param maxSize lru 缓存的大小
 */
export default function memoize<T extends Function>(fn: T, resolver?: (...args: any[]) => string, maxSize = 128) {
  const memoized = function (...args) {
    // 使用方法构造 key，如果不存在 resolver，则直接取第一个参数作为 key
    const key = resolver ? resolver.apply(this, args) : args[0];
    if (!CacheMap.has(fn)) CacheMap.set(fn, flru(maxSize));
    const cache = CacheMap.get(fn);

    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };

  return memoized as unknown as T;
}
