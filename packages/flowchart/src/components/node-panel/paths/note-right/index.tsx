import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const NoteRightNodePath = (props) => {
  const { height } = getConfig(props);
  const dx = 6;
  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['C', dx, NODE_PADDING, dx, dx],
    ['', dx, (height - dx) / 2],
    ['L', 2 * dx, height / 2],
    ['L', dx, (height + dx) / 2],
    ['L', dx, height - 2 * NODE_PADDING - dx],
    ['C', dx, height - 2 * NODE_PADDING, NODE_PADDING, height - 2 * NODE_PADDING],
    ['', NODE_PADDING, height - 2 * NODE_PADDING],
  ];

  return [createPath(path)];
};
