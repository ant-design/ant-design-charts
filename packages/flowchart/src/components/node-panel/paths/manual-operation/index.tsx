import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const ManualOperationNodePath = (props) => {
  const { width, height } = getConfig(props);
  const rx = Math.min(Math.tan(Math.PI / 6) * height, width / 2);
  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['L', width - 2 * NODE_PADDING, NODE_PADDING], // top-right
    ['L', width - rx, height - 2 * NODE_PADDING], // bottom-right
    ['L', rx, height - 2 * NODE_PADDING], // bottom-left
    ['Z'],
  ];

  return [createPath(path)];
};
