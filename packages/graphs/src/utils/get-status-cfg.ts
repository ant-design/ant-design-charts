import { CardNodeCfg } from '../interface';
import { getSize } from './get-size';
import { defaultStatusBarWidth } from '../constants';
import { isNumber } from '@antv/util';

export const getStatusCfg = (cfg: CardNodeCfg['badge'], cardSize: [number, number]) => {
  const { size = [], position = 'left' } = cfg ?? {};
  const [width, height] = getSize(size);
  const [cardWidth, cardHeight] = cardSize;
  let x = 0;
  let y = 0;
  let w = 0;
  let h = 0;
  switch (position) {
    case 'top':
      x = 0;
      y = 0;
      w = width ?? cardWidth;
      h = height ?? defaultStatusBarWidth;
      break;
    case 'left':
      x = 0;
      y = 0;
      w = width ?? defaultStatusBarWidth;
      h = height ?? cardHeight;
      break;
    case 'right':
      x = cardWidth - (isNumber(width) ? width : defaultStatusBarWidth);
      y = 0;
      w = width ?? defaultStatusBarWidth;
      h = height ?? cardHeight;
      break;
    case 'bottom':
      x = 0;
      y = cardHeight - (isNumber(height) ? height : defaultStatusBarWidth);
      w = width ?? cardWidth;
      h = height ?? defaultStatusBarWidth;
      break;
  }

  return {
    x,
    y,
    width: w,
    height: h,
  };
};
