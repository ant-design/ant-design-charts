import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const LeftTriangleNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', width * NODE_PADDING, NODE_PADDING],
    ['L', NODE_PADDING, (height / 2) * NODE_PADDING], // 上
    ['L', width * NODE_PADDING, height * NODE_PADDING], // 下
    ['Z'],
  ];

  return [createPath(path)];
};
