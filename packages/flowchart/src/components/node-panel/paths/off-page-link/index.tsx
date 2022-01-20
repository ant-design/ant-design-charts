import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const OffPageLinkNodePath = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT } } = props;
  const { width, height } = size;
  const dx = Math.min(Math.tan(Math.PI / 6) * (width / 2), height / 4);
  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['L', width - 2 * NODE_PADDING, NODE_PADDING], // top-right
    ['L', width - 2 * NODE_PADDING, height - dx],
    ['L', width / 2, height - 2 * NODE_PADDING], // bottom-right
    ['L', NODE_PADDING, height - dx],
    ['Z'],
  ];

  return [createPath(path)];
};
