import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const OffPageLinkNodePath = (props) => {
  const { width, height } = getConfig(props);
  const dx = Math.min(Math.tan(Math.PI / 6) * (width / 2), height / 4);
  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['L', width - 2 * NODE_PADDING, NODE_PADDING], // top-right
    ['L', width - 2 * NODE_PADDING, height - dx],
    ['L', width / 2, height - 2 * NODE_PADDING], // bottom-right
    ['L', NODE_PADDING, height - dx],
    ['Z'],
  ];

  return [createPath(path)];
};
