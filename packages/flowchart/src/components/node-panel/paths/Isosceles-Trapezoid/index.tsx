import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const IsoscelesTrapezoidNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', width / 4, NODE_PADDING],
    ['L', width - width / 4, NODE_PADDING],
    ['L', width - 2 * NODE_PADDING, height - 2 * NODE_PADDING],
    ['L', NODE_PADDING, height - 2 * NODE_PADDING],
    ['L', width / 4, NODE_PADDING],
  ];
  return [createPath(path)];
};
