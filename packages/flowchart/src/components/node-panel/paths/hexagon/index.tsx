import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const HexagonNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', width / 4, NODE_PADDING],
    ['L', width - width / 4, NODE_PADDING],
    ['L', width - 2, height / 4],
    ['L', width - 2, height - height / 4],
    ['L', width - width / 4, height],
    ['L', width / 4, height],
    ['L', NODE_PADDING, height - height / 4],
    ['L', NODE_PADDING, height / 4],
    ['Z'],
  ];

  return [createPath(path)];
};
