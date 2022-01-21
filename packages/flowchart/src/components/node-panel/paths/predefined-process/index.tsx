import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const PredefinedProcessNodePath = (props) => {
  const { width, height } = getConfig(props);
  const struckOffset = width / 8;
  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['L', width - 2 * NODE_PADDING, NODE_PADDING], // top-right
    ['L', width - 2 * NODE_PADDING, height - 2 * NODE_PADDING], // bottom-right
    ['L', NODE_PADDING, height - 2 * NODE_PADDING], // bottom-left
    ['Z'],
  ];
  const path1 = [
    ['M', struckOffset, NODE_PADDING],
    ['L', struckOffset, height - 2 * NODE_PADDING],
  ];
  const path2 = [
    ['M', width - struckOffset, NODE_PADDING], // left-center
    ['L', width - struckOffset, height - 2 * NODE_PADDING], // right-center
  ];

  return [createPath(path), createPath(path1), createPath(path2)];
};
