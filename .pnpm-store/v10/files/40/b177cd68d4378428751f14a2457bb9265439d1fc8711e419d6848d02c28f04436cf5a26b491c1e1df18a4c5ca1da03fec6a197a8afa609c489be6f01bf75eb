/**
 * 在一个升序的序列指定范围内 array[lo, hi) 二分查找一个值 x，返回最右边一个匹配的值后面的索引 i
 * https://github.com/d3/d3-array/blob/master/src/bisector.js
 * @param array 升序的目标数组
 * @param x 查找的值
 * @param lo 开始的索引
 * @param hi 结束的索引
 * @returns 最右边一个匹配的值后一个的索引
 */
export function bisect(array: any[], x: number, lo?: number, hi?: number, getter?: (any) => any): number {
  let i = lo || 0;
  let j = hi || array.length;
  const get = getter || ((x) => x);
  while (i < j) {
    const mid = Math.floor((i + j) / 2);
    if (get(array[mid]) > x) {
      j = mid;
    } else {
      i = mid + 1;
    }
  }
  return i;
}
