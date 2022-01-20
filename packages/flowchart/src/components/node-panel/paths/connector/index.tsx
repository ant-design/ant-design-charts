import { NODE_HEIGHT, NODE_WIDTH, NODE_PADDING } from '../../constants';
export const ConnectorNodePath = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT } } = props;

  const { height } = size;
  const availableR = height - 2 * NODE_PADDING;

  return [`M ${NODE_PADDING},${height / 2} a ${availableR / 2} ${availableR / 2} 0 1 1 0 1 z`];
};
