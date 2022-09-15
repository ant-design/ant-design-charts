import { isNumber } from '@antv/util';
/** 超出省略 */
export const setEllipsis = (text: string, fontSize: string | number = 12, contentWidth: number = 120) => {
  const size = isNumber(fontSize) ? fontSize : Number(fontSize.replace('px', ''));
  const maxWords = Math.floor(contentWidth / size);
  if (text.length <= maxWords) {
    return text;
  }
  return text.slice(0, maxWords - 1) + '...';
};
