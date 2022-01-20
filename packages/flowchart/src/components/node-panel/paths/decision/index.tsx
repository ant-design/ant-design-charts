import { createPath } from '../../util';
import { NODE_HEIGHT, NODE_PADDING, NODE_WIDTH } from '../../constants';

export const DecisionNodePath = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT } } = props;
  const { width, height } = size;

  const path = [
    ['M', width / 2, NODE_PADDING], // top
    ['L', width - 2 * NODE_PADDING, height / 2], // right
    ['L', width / 2, height - 2 * NODE_PADDING], // bottom
    ['L', NODE_PADDING, height / 2], // left
    ['Z'],
  ];

  return [createPath(path)];
};
