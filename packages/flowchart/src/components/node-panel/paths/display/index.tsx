import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const DisplayNodePath = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT } } = props;
  const { width, height } = size;
  const sx = Math.min(height, width) / 3;
  const dx = Math.min(Math.tan(Math.PI / 6) * (height / 2), width / 3);
  const path = [
    ['M', dx, NODE_PADDING], // top-left
    ['L', width - sx, NODE_PADDING], // top-right
    ['C', width - 2 * NODE_PADDING, NODE_PADDING, width - 2 * NODE_PADDING, height / 2],
    ['', width - 2 * NODE_PADDING, height / 2],
    ['C', width - 2 * NODE_PADDING, height / 2, width - 2 * NODE_PADDING, height - 2 * NODE_PADDING],
    ['', width - sx, height - 2 * NODE_PADDING], // bottom-right
    ['L', dx, height - 2 * NODE_PADDING], // bottom-left
    ['L', NODE_PADDING, height / 2],
    ['Z'],
  ];

  return [createPath(path)];
};
