import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const MultiDocumentNodePath = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT } } = props;
  const multipleWidth = 6;
  const padding = NODE_PADDING;
  const multiPadding = multipleWidth / 2;

  let { width, height } = size;
  width += multipleWidth;
  height += multipleWidth;
  const bezierX = width / 8;
  const bezierY = height / 8;
  const path = [
    ['M', padding + multiPadding, padding], // top-left
    ['L', width - 2 * padding, padding], // top-right
    ['L', width - 2 * padding, height - 2 * padding - bezierY], // bottom-left
    [
      'C',
      width - 2 * padding - bezierX,
      height - 2 * padding - 2 * bezierY,
      width / 2 + bezierX,
      height - 2 * padding - 2 * bezierY,
    ], // 控制点，开口向下
    ['', width / 2, height - 2 * padding - bezierY], // bottom-right
    ['S', width / 4, height - 2 * padding, padding + multiPadding, height - 2 * padding - 2 * bezierY],
    ['L', padding + multiPadding, padding], // top-left
  ];

  return [createPath(path), createPath(path, -multipleWidth / 2, multipleWidth / 2)];
};
