import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const CollateNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', NODE_PADDING, NODE_PADDING],
    ['L', width - 2 * NODE_PADDING, NODE_PADDING],
    ['L', NODE_PADDING, height * NODE_PADDING],
    ['L', width * NODE_PADDING, height * NODE_PADDING],
    ['Z'],
  ];

  return [createPath(path)];
};
