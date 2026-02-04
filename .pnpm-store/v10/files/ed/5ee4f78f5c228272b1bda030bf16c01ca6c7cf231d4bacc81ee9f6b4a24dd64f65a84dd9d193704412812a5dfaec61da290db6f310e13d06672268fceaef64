/**
 * 返回一个 clamp 函数，将输入限定在指定范围之内
 * @param a 范围的第一个端点
 * @param b 范围的第二个端点
 * @returns clamp 函数
 */
export function createClamp(a: number, b: number) {
  const lo = b < a ? b : a;
  const hi = a > b ? a : b;
  return (x: number) => Math.min(Math.max(lo, x), hi);
}
