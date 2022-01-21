import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const DisplayNodePath = (props) => {
  const { width, height } = getConfig(props);
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
