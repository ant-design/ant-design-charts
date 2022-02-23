import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const RightTrapezoidNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', width / 2, NODE_PADDING], // top-left
    ['L', NODE_PADDING, NODE_PADDING], // top-right
    ['L', NODE_PADDING, height * NODE_PADDING], // bottom-right
    ['L', width, height - 2 * NODE_PADDING], // bottom-left
    ['Z'],
  ];

  return [createPath(path)];
};
