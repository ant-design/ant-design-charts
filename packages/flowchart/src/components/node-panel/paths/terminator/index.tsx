import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const TerminalNodePath = (props) => {
  const { width, height } = getConfig(props);
  const rx = Math.min(height, width) / 2;
  const path = [
    ['M', rx, NODE_PADDING], // top-left
    ['L', width - rx, NODE_PADDING], // top-right
    ['C', width - 2 * NODE_PADDING, NODE_PADDING, width - 2 * NODE_PADDING, height / 2],
    ['', width - 2 * NODE_PADDING, height / 2],
    ['C', width - 2 * NODE_PADDING, height / 2, width - 2 * NODE_PADDING, height - 2 * NODE_PADDING],
    ['', width - rx, height - 2 * NODE_PADDING], // bottom-right
    ['L', rx, height - 2 * NODE_PADDING], // bottom-left
    ['C', NODE_PADDING, height - 2 * NODE_PADDING, NODE_PADDING, height / 2],
    ['', NODE_PADDING, height / 2],
    ['C', NODE_PADDING, height / 2, NODE_PADDING, NODE_PADDING],
    ['', rx, NODE_PADDING],
  ];

  return [createPath(path)];
};
