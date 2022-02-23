import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const DiagonalSnipRectangleNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', 10, NODE_PADDING],
    ['L', width - 2 * NODE_PADDING, NODE_PADDING],
    ['L', width - 2 * NODE_PADDING, height - 10 * NODE_PADDING],
    ['L', width - 10 * NODE_PADDING, height * NODE_PADDING],
    ['L', NODE_PADDING, height * NODE_PADDING],
    ['L', NODE_PADDING, 10],
    ['Z'],
  ];

  return [createPath(path)];
};
