import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const DataIONodePath = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT } } = props;
  const { width, height } = size;

  const slope = height / 2; // 用于计算斜率 tan(&) =  slope / height

  const path = [
    ['M', slope - NODE_PADDING, NODE_PADDING], // top-left
    ['L', width - 2 * NODE_PADDING, NODE_PADDING], // top-right
    ['L', width - slope, height - 2 * NODE_PADDING], // bottom-right
    ['L', NODE_PADDING, height - 2 * NODE_PADDING], // bottom-left
    ['Z'],
  ];

  return [createPath(path)];
};