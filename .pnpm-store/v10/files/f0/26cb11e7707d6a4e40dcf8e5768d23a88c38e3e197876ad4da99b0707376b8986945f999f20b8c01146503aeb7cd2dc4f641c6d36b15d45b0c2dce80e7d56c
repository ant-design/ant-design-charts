/**
 * 返回一个 normalize 函数，该函数将输入的 t 从 [a, b] 线性变换到 [0, 1]
 * @param a 输入 t 的最小值
 * @param b 输入 t 的最大值
 * @returns normalize 函数
 */
export function createNormalize(a: number, b: number) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return b - a ? (t: number) => (t - a) / (b - a) : (_: number) => 0.5;
}
