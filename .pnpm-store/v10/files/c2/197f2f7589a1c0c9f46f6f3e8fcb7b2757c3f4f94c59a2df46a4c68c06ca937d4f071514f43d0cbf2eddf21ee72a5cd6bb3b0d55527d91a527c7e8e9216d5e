/**
 * 计算数组的最大值
 * @param arr 数组
 * @return 最大值
 */
export default function max(arr: number[]): number {
  if (!Array.isArray(arr)) return -Infinity;
  const length = arr.length;
  if (!length) return -Infinity;
  let max = arr[0];
  for (let i = 1; i < length; i++) {
    max = Math.max(max, arr[i]);
  }
  return max;
}
