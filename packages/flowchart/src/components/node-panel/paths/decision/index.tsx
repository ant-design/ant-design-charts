import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const DecisionNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', width / 2, NODE_PADDING], // top
    ['L', width - 2 * NODE_PADDING, height / 2], // right
    ['L', width / 2, height - 2 * NODE_PADDING], // bottom
    ['L', NODE_PADDING, height / 2], // left
    ['Z'],
  ];

  return [createPath(path)];
};
