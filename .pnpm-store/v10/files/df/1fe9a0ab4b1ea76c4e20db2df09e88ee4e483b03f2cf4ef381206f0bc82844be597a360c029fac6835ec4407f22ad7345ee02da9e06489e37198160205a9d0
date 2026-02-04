import { Font } from './measure-text-width';
declare const _default: (text: string | number, maxWidth: number, font?: Font, str?: string) => string | number;
/**
 * 获取文本的 ... 文本。
 * 算法（减少每次 measureText 的长度，measureText 的性能跟字符串时间相关）：
 * 1. 先通过 STEP 逐步计算，找到最后一个小于 maxWidth 的字符串
 * 2. 然后对最后这个字符串二分计算
 * @param text 需要计算的文本, 由于历史原因 除了支持string，还支持空值,number和数组等
 * @param maxWidth 最大宽度
 * @param font 字体
 * @param str 要替换的文本
 */
export default _default;
