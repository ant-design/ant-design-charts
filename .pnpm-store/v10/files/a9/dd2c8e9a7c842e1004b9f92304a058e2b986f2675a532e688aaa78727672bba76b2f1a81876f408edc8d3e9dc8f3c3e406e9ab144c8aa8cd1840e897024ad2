/**
 * 缓存函数的计算结果，避免重复计算
 * @example
 * _.memoize(calColor);
 * _.memoize(calColor, (...args) => args[0]);
 * @param fn 缓存的函数
 * @param resolver 生成缓存 key 的函数
 * @param maxSize lru 缓存的大小
 */
export default function memoize<T extends Function>(fn: T, resolver?: (...args: any[]) => string, maxSize?: number): T;
