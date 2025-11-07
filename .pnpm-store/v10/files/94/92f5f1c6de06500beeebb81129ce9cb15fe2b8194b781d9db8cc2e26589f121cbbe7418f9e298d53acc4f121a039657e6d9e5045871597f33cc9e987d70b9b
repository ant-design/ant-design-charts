/**
 * 保留x位小数
 */
export function toPrecision(num: number, precision: number) {
  return +num.toPrecision(precision);
}

/**
 * 千分位
 * 100000 -> 10,000
 */
export function toThousands(num: number) {
  return num.toLocaleString();
}

/**
 * 获得数字科学计数
 * 1000000 = 1e6
 */
export function toScientificNotation(num: number) {
  return num.toExponential();
}

/**
 * 用k的方式表达
 * 1234 -> 1K
 * 12345 -> 12K
 */
export function toKNotation(num: number, precision: number = 0) {
  if (Math.abs(num) < 1000) return String(num);
  return `${toPrecision(num / 1000, precision).toLocaleString()}K`;
}

// Condition if x is smaller than zero.
export const ifNegative = <T extends keyof any>(x: any, a: T, b?: T) => (x < 0 && Number.isFinite(x) ? a : b);
// Condition if x is greater than zero.
export const ifPositive = <T extends keyof any>(x: any, a: T, b?: T) => (x > 0 && Number.isFinite(x) ? a : b);
// Calculate the result of  a * b.
export const multi = (a: number, b: number) => a * b;
// Calculate the result of  (a + b) / 2.
export const mid = (a: number, b?: number) => a / 2 + (b || 0) / 2;
