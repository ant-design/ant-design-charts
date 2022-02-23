import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const HexagonNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', 15, NODE_PADDING], // top-left
    ['L', width - 15 * NODE_PADDING, NODE_PADDING], // top-right
    ['L', width * NODE_PADDING, 15], // bottom-right
    ['L', width * NODE_PADDING, height - 15 * NODE_PADDING], // bottom-left
    ['L', width - 15 * NODE_PADDING, height * NODE_PADDING], // bottom-left
    ['L', 15, height * NODE_PADDING], // bottom-left
    ['L', NODE_PADDING, height - 15 * NODE_PADDING], // bottom-left
    ['L', NODE_PADDING, 15],
    ['Z'],
  ];

  return [createPath(path)];
};
