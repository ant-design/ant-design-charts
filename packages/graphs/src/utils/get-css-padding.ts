/**
 * padding | margin 按 CSS 规则转换
 */
export const getCssPadding = (padding: number | number[]) => {
  if (typeof padding === 'number') {
    return [padding, padding, padding, padding];
  }
  let result: number[] = [];
  switch (padding.length) {
    case 1:
      result = [padding[0], padding[0], padding[0], padding[0]];
      break;
    case 2:
      result = [padding[0], padding[1], padding[0], padding[1]];
      break;
    case 3:
      result = [padding[0], padding[1], padding[2], padding[1]];
      break;
    case 4:
      result = padding;
      break;
    default:
      break;
  }
  return result;
};
