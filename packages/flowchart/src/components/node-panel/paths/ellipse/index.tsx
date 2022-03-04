import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';
export const EllipseNodePath = (props) => {
  const { height } = getConfig(props);
  const availableR = height;

  return [
    `M ${NODE_PADDING},${height / 2} a ${availableR - availableR / 3.75} ${availableR - availableR / 2} 0 1 1 0 1 z`,
  ];
};
