import { memoize } from 'lodash';
import { measureTextSize } from './measure-text';

export const getLinearTextNodeStyle = memoize(
  (text: string, minWidth: number, maxWidth: number, depth: number = 0) => {
    const font = {
      fontWeight: 'bold',
      fontSize: depth === 0 ? 20 : 16,
      fontFamily: 'PingFang SC',
    };
    const offset = depth === 0 ? [24, 36] : [12, 12];
    const size = measureTextSize(text, offset, font, minWidth, maxWidth);
    return { font, size };
  },
);

export const getBoxedTextNodeStyle = memoize(
  (text: string, minWidth: number, maxWidth: number, depth: number = 0) => {
    const font = {
      fontWeight: 'bold',
      fontSize: depth === 0 ? 20 : depth === 1 ? 18 : 16,
      fontFamily: 'PingFang SC',
    };
    const offset = depth === 0 ? [24, 36] : [12, 24];
    const size = measureTextSize(text, offset, font, minWidth, maxWidth);
    return { font, size };
  },
);
