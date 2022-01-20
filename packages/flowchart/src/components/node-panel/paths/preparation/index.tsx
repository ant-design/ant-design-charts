import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const PreparationNodePath = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT } } = props;
  const { width, height } = size;
  const rx = Math.tan(Math.PI / 6) * (height / 2);
  const path = [
    ['M', rx, NODE_PADDING], // top-left
    ['L', width - rx, NODE_PADDING], // top-right
    ['L', width - 2 * NODE_PADDING, height / 2],
    ['L', width - rx, height - 2 * NODE_PADDING], // bottom-right
    ['L', rx, height - 2 * NODE_PADDING], // bottom-left
    ['L', NODE_PADDING, height / 2],
    ['Z'],
  ];

  return [createPath(path)];
};
