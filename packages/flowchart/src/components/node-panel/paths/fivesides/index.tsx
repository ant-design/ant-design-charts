import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const FiveSidesNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', width / 2, NODE_PADDING],
    ['L', NODE_PADDING, (height / 3) * NODE_PADDING],
    ['L', width / 6, height * NODE_PADDING],
    ['L', width - width / 6, height * NODE_PADDING],
    ['L', width * NODE_PADDING, (height / 3) * NODE_PADDING],
    ['Z'],
  ];

  return [createPath(path)];
};
