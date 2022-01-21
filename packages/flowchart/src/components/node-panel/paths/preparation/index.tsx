import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const PreparationNodePath = (props) => {
  const { width, height } = getConfig(props);
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
