import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const FiveSidesNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', width / 2, NODE_PADDING],
    ['L', NODE_PADDING, 17],
    ['L', 12, height * NODE_PADDING],
    ['L', width - 12, height * NODE_PADDING],
    ['L', width * NODE_PADDING, 17],
    ['Z'],
  ];

  return [createPath(path)];
};
