import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const DiagonalSnipRectangleNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', width / 8, NODE_PADDING],
    ['L', width - 2, NODE_PADDING],
    ['L', width - 2, height - height / 8],
    ['L', width - width / 8, height],
    ['L', NODE_PADDING, height],
    ['L', NODE_PADDING, height / 8],
    ['Z'],
  ];

  return [createPath(path)];
};
