import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';
export const ConnectorNodePath = (props) => {
  const { height } = getConfig(props);
  const availableR = height - 2 * NODE_PADDING;

  return [`M ${NODE_PADDING},${height / 2} a ${availableR / 2} ${availableR / 2} 0 1 1 0 1 z`];
};
