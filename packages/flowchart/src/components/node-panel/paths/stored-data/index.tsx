import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const StroedDataNodePath = (props) => {
  const { width, height } = getConfig(props);
  const bezierX = Math.min(width / 10, height / 4);
  const bezierY = Math.min(height / 4, width / 4);

  const path = [
    ['M', NODE_PADDING + bezierX, NODE_PADDING], // top-left
    ['L', width - 2 * NODE_PADDING - bezierX, NODE_PADDING], // top-right
    [
      'C',
      width - 2 * NODE_PADDING - 2 * bezierX,
      NODE_PADDING + bezierY,
      width - 2 * NODE_PADDING - 2 * bezierX,
      height - 2 * NODE_PADDING - bezierY,
    ], // 控制点，开口左
    ['', width - 2 * NODE_PADDING - bezierX, height - 2 * NODE_PADDING], // bottom-right
    ['L', NODE_PADDING + bezierX, height - 2 * NODE_PADDING], // bottom-left
    ['C', NODE_PADDING, height - 2 * NODE_PADDING - bezierY, NODE_PADDING, NODE_PADDING + bezierY], // 控制点，开口左
    ['', NODE_PADDING + bezierX, NODE_PADDING], // top-left
  ];

  return [createPath(path)];
};
