import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';
export const EllipseNodePath = (props) => {
  const { height } = getConfig(props);
  const availableR = height - 10 * NODE_PADDING;

  return [`M ${NODE_PADDING * 60},${height / 2} a ${availableR} ${availableR / 2} 1 1 0 0 1 z`];
};
