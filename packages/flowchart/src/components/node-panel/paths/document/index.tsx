import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const DocumentNodePath = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT } } = props;
  const { width, height } = size;
  const bezierX = width / 8;
  const bezierY = height / 8;

  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['L', width - 2 * NODE_PADDING, NODE_PADDING], // top-right
    ['L', width - 2 * NODE_PADDING, height - 2 * NODE_PADDING - bezierY], // bottom-left
    [
      'C',
      width - 2 * NODE_PADDING - bezierX,
      height - 2 * NODE_PADDING - 2 * bezierY,
      width / 2 + bezierX,
      height - 2 * NODE_PADDING - 2 * bezierY,
    ], // 控制点，开口向下
    ['', width / 2, height - 2 * NODE_PADDING - bezierY], // bottom-right
    ['S', width / 4, height - 2 * NODE_PADDING, NODE_PADDING, height - 2 * NODE_PADDING - 2 * bezierY],
    ['L', NODE_PADDING, NODE_PADDING], // top-left
  ];

  return [createPath(path)];
};
