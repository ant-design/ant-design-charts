import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const InternalStorageNodePath = (props) => {
  const { width, height } = getConfig(props);
  const availableWidth = width - 2 * NODE_PADDING;
  const availableHieght = height - 2 * NODE_PADDING;
  const rx = 6;
  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['L', availableWidth - rx, NODE_PADDING], // top-right
    ['C', availableWidth, NODE_PADDING, availableWidth, rx],
    ['', availableWidth, height / 2],
    ['L', availableWidth, availableHieght - rx],
    ['C', availableWidth, availableHieght, availableWidth - rx, availableHieght],
    ['', availableWidth - rx, availableHieght], // bottom-right
    ['L', rx, availableHieght], // bottom-left
    ['C', NODE_PADDING, availableHieght, NODE_PADDING, availableHieght - rx],
    ['', NODE_PADDING, availableHieght - rx],
    ['Z'],
  ];

  return [
    createPath(path),
    `M ${NODE_PADDING},${rx} L ${availableWidth - 1} ${rx} `,
    `M ${rx},${NODE_PADDING} L ${rx} ${availableHieght} `,
  ];
};
