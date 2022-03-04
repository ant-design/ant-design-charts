import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const MessageNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', NODE_PADDING, NODE_PADDING],
    ['L', width - 2 * NODE_PADDING, NODE_PADDING],
    ['L', width - 2 * NODE_PADDING, height - 2 * NODE_PADDING],
    ['L', NODE_PADDING, height - 2 * NODE_PADDING],
    ['L', NODE_PADDING, NODE_PADDING],
    ['L', (width / 2) * NODE_PADDING, (height / 2) * NODE_PADDING],
    ['L', width - 2 * NODE_PADDING, 1],
    ['Z'],
  ];
  return [createPath(path)];
};
