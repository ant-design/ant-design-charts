import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const CalloutNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', NODE_PADDING, NODE_PADDING],
    ['L', width - 2 * NODE_PADDING, NODE_PADDING],
    ['L', width - 2 * NODE_PADDING, height - 10 * NODE_PADDING],
    ['L', 25, height - 10 * NODE_PADDING],
    ['L', 15, height * NODE_PADDING],
    ['L', 18, height - 10 * NODE_PADDING],
    ['L', NODE_PADDING, height - 10 * NODE_PADDING],
    ['Z'],
  ];

  return [createPath(path)];
};
