import { memoize } from 'lodash';
import { measureTextSize } from './measure-text';

export const getLinearTextNodeStyle = memoize(
  (text: string, minWidth: number, maxWidth: number, depth: number = 0) => {
    const font = {
      fontWeight: depth === 0 ? 600 : 400,
      fontSize: depth === 0 ? 24 : 16,
    };
    const offset = depth === 0 ? [64, 30] : [12, 12];
    const size = measureTextSize(text, offset, font, minWidth, maxWidth);
    return { font, size };
  },
);

export const getBoxedTextNodeStyle = memoize(
  (text: string, minWidth: number, maxWidth: number, depth: number = 0) => {
    const font = {
      fontWeight: depth === 0 || depth === 1 ? 600 : 400,
      fontSize: depth === 0 ? 24 : 16,
    };
    const offset = depth === 0 ? [64, 30] : [36, 24];
    const size = measureTextSize(text, offset, font, minWidth, maxWidth);
    return { font, size };
  },
);
