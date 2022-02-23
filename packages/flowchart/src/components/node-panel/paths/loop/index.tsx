import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const LoopNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', 15, NODE_PADDING],
    ['L', width - 15 * NODE_PADDING, NODE_PADDING],
    ['L', width * NODE_PADDING, 15],
    ['L', width * NODE_PADDING, height * NODE_PADDING],
    ['L', NODE_PADDING, height * NODE_PADDING],
    ['L', NODE_PADDING, 15],
    ['Z'],
  ];

  return [createPath(path)];
};
