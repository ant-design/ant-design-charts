import isString from './is-string';
import toString from './to-string';
import { Font, default as measureTextWidth } from './measure-text-width';

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
export default (text: string | number, maxWidth: number, font?: Font, str: string = '...') => {
  const STEP = 16; // 每次 16，调参工程师
  const PLACEHOLDER_WIDTH = measureTextWidth(str, font);
  let leftText = !isString(text) ? toString(text) : text;

  let leftWidth = maxWidth;

  const r = []; // 最终的分段字符串
  let currentText;
  let currentWidth;

  if (measureTextWidth(text, font) <= maxWidth) {
    return text;
  }

  // 首先通过 step 计算，找出最大的未超出长度的
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // 更新字符串
    currentText = leftText.substr(0, STEP);
    // 计算宽度
    currentWidth = measureTextWidth(currentText, font);
    // 超出剩余宽度，则停止
    if (currentWidth + PLACEHOLDER_WIDTH > leftWidth) {
      if (currentWidth > leftWidth) {
        break;
      }
    }

    r.push(currentText);
    // 没有超出，则计算剩余宽度
    leftWidth -= currentWidth;
    leftText = leftText.substr(STEP);
    // 字符串整体没有超出
    if (!leftText) {
      return r.join('');
    }
  }

  // 最下的最后一个 STEP，使用 1 递增（用二分效果更高）
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // 更新字符串
    currentText = leftText.substr(0, 1);
    // 计算宽度
    currentWidth = measureTextWidth(currentText, font);
    // 超出剩余宽度，则停止
    if (currentWidth + PLACEHOLDER_WIDTH > leftWidth) {
      break;
    }
    r.push(currentText);
    // 没有超出，则计算剩余宽度
    leftWidth -= currentWidth;
    leftText = leftText.substr(1);

    if (!leftText) {
      return r.join('');
    }
  }
  return `${r.join('')}${str}`;
};
