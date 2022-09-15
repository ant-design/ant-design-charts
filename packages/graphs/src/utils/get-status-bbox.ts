import { CardNodeCfg } from '../interface';
import { getSize } from './get-size';
import { defaultStatusBarWidth } from '../constants';

/**
 * card status 对布局的影响，直接加到 padding 中
 */
export const getStatusBBox = (cfg: CardNodeCfg['badge'] | undefined) => {
  if (!cfg) {
    return [0, 0, 0, 0];
  }
  const { size = [], position = 'left' } = cfg;
  const [width, height] = getSize(size);
  const appendPadding: number[] = [];
  switch (position) {
    case 'top':
      appendPadding.push(height ?? defaultStatusBarWidth, 0, 0, 0);
      break;
    case 'right':
      appendPadding.push(0, width ?? defaultStatusBarWidth, 0, 0);
      break;
    case 'bottom':
      appendPadding.push(0, 0, height ?? defaultStatusBarWidth, 0);
      break;
    case 'left':
      appendPadding.push(0, 0, 0, width ?? defaultStatusBarWidth);
      break;
  }
  return appendPadding;
};
