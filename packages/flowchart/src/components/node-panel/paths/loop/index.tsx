import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const LoopNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', width - (width / 4) * NODE_PADDING, NODE_PADDING],
    ['L', (width / 4) * NODE_PADDING, NODE_PADDING],
    ['L', NODE_PADDING, (height / 4) * NODE_PADDING],
    ['L', NODE_PADDING, height * NODE_PADDING],
    ['L', width * NODE_PADDING, height * NODE_PADDING],
    ['L', width * NODE_PADDING, (height / 4) * NODE_PADDING],
    ['Z'],
  ];

  return [createPath(path)];
};
