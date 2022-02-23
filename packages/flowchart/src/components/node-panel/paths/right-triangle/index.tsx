import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const RightTriangleNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', 0, NODE_PADDING], // 上
    ['L', width - 2 * NODE_PADDING, (height / 2) * NODE_PADDING], // 下
    ['L', 0, height * NODE_PADDING], // 左
    ['Z'],
  ];

  return [createPath(path)];
};
