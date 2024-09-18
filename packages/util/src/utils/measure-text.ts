import { isString, memoize, values } from 'lodash';
import { getCanvasContext } from './context';

/**
 * 计算文本在画布中的相关信息（例如它的宽度）
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/measureText
 */
export const measureText = memoize(
  (text: string, font: any = {}): TextMetrics => {
    const { fontSize, fontFamily = 'sans-serif', fontWeight, fontStyle, fontVariant } = font;
    const ctx = getCanvasContext();
    // @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/font
    ctx.font = [fontStyle, fontWeight, fontVariant, `${fontSize}px`, fontFamily].join(' ');
    return ctx.measureText(isString(text) ? text : '');
  },
  (text: string, font = {}) => [text, ...values(font)].join(''),
);

/**
 * 计算文本在画布中的宽度
 * @param text 文本
 * @param font 字体
 */
export const measureTextWidth = (text: string, font: any = {}): number => measureText(text, font).width;

/**
 * 计算文本在画布中的实际高度
 * @param text 文本
 * @param font 字体
 */
export const measureTextHeight = (text: string, font: any = {}): number => {
  const metrics = measureText(text, font);
  return metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
};
