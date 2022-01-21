import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const NoteLeftNodePath = (props) => {
  const { width, height } = getConfig(props);
  const dx = 6;
  const baseX = width - 2 * NODE_PADDING;
  const path = [
    ['M', baseX, NODE_PADDING], // top-right
    ['C', baseX - dx, NODE_PADDING, baseX - dx, dx],
    ['', baseX - dx, (height - dx) / 2],
    ['L', baseX - 2 * dx, height / 2],
    ['L', baseX - dx, (height + dx) / 2],
    ['L', baseX - dx, height - 2 * NODE_PADDING - dx],
    ['C', baseX - dx, height - 2 * NODE_PADDING, baseX, height - 2 * NODE_PADDING],
    ['', baseX, height - 2 * NODE_PADDING],
  ];

  return [createPath(path)];
};
