import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const IsoscelesTrapezoidNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', NODE_PADDING * 15, NODE_PADDING], // top-left
    ['L', width - 15 * NODE_PADDING, NODE_PADDING], // top-right
    ['L', width - 2 * NODE_PADDING, height - 2 * NODE_PADDING], // bottom-right
    ['L', NODE_PADDING, height - 2 * NODE_PADDING], // bottom-left
    ['Z'],
  ];

  return [createPath(path)];
};
