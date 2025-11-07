/**
 * 将数值从 0-255 转换成 16 进制字符串
 * @param value
 * @returns
 */
export function toHex(value: number): string {
  const x16Value = Math.round(value).toString(16);

  return x16Value.length === 1 ? `0${x16Value}` : x16Value;
}

/**
 * 数组转换成颜色
 * @param arr
 * @returns
 */
export function arr2rgb(arr: number[]): string {
  return `#${toHex(arr[0])}${toHex(arr[1])}${toHex(arr[2])}`;
}
