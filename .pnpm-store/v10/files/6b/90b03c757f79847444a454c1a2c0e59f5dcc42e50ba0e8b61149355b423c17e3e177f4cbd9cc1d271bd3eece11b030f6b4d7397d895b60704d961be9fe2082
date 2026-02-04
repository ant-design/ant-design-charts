/**
 * 将多个单个参数的函数合成为一个函数，执行顺序为从右到左
 * @param fn 第一个函数
 * @param rest 剩余函数
 * @returns 复合后的函数
 */
export function compose<T>(fn: (x: T) => T, ...rest: ((x: T) => T)[]) {
  return rest.reduce((pre, cur) => (x) => pre(cur(x)), fn);
}
