import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const OrNodePath = (props) => {
  const { height } = getConfig(props);

  const path1 = [
    ['M', height / 2, NODE_PADDING], // top-center
    ['L', height / 2, height - 2 * NODE_PADDING], // bottom-center
  ];
  const path2 = [
    ['M', NODE_PADDING, height / 2], // left-center
    ['L', height - 2 * NODE_PADDING, height / 2], // right-center
  ];

  const availableR = height - 2 * NODE_PADDING;

  return [
    `M ${NODE_PADDING},${height / 2} a ${availableR / 2} ${availableR / 2} 0 1 1 0 1 z`,
    createPath(path1),
    createPath(path2),
  ];
};
