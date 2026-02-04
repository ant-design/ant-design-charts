import values from './values';
import memoize from './memoize';
import isString from './is-string';
import type { Properties } from 'csstype';

export type Font = Pick<Properties, 'fontFamily' | 'fontWeight' | 'fontStyle' | 'fontVariant'> & {
  fontSize?: number;
};

let ctx: CanvasRenderingContext2D;

/**
 * 计算文本的宽度
 */
export default memoize(
  (text: any, font: Font = {}): number => {
    const { fontSize, fontFamily, fontWeight, fontStyle, fontVariant } = font;
    if (!ctx) {
      ctx = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D;
    }
    ctx!.font = [fontStyle, fontVariant, fontWeight, `${fontSize}px`, fontFamily].join(' ');
    return ctx!.measureText(isString(text) ? text : '').width;
  },
  (text: any, font: Font = {}) => [text, ...values(font)].join('')
);
