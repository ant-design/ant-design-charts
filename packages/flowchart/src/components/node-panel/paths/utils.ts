import { NODE_WIDTH, NODE_HEIGHT } from '../constants';
export const getConfig = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT } } = props;
  const { width, height } = size;
  return { width, height };
};
