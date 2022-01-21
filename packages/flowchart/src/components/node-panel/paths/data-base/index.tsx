import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const DatabaseNodePath = (props) => {
  const { width, height } = getConfig(props);
  const bezierX = width / 4;
  const bezierY = Math.min(height / 10, 12);

  const path = [
    ['M', NODE_PADDING, NODE_PADDING + bezierY], // top-left
    ['C', NODE_PADDING + bezierX, NODE_PADDING, NODE_PADDING + width - bezierX, NODE_PADDING], // 控制点，开口向下
    ['', width - 2 * NODE_PADDING, NODE_PADDING + bezierY], // top-right
    ['L', width - 2 * NODE_PADDING, height - 2 * NODE_PADDING - bezierY], // bottom-right
    [
      'C',
      width - 2 * NODE_PADDING - bezierX,
      height - 2 * NODE_PADDING,
      NODE_PADDING + bezierX,
      height - 2 * NODE_PADDING,
    ], // 控制点，开口向上
    ['', NODE_PADDING, height - 2 * NODE_PADDING - bezierY], // bottom-left
    ['Z'],
  ];

  // 多 path 解决填充问题
  const path1 = [
    ['M', NODE_PADDING, NODE_PADDING + bezierY],
    [
      'C',
      NODE_PADDING + bezierX,
      NODE_PADDING + 2 * bezierY,
      NODE_PADDING + width - bezierX,
      NODE_PADDING + 2 * bezierY,
    ], // 控制点，开口向上
    ['', width - 2 * NODE_PADDING, NODE_PADDING + bezierY], // top-right
  ];

  return [createPath(path), createPath(path1)];
};
