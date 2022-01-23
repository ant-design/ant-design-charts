import { createPath } from '../../util';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const ProcessNodePath = (props) => {
  const { width, height } = getConfig(props);
  const ROUNDED = 10;

  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['L', width - 2 * NODE_PADDING, NODE_PADDING], // top-right
    ['L', width - 2 * NODE_PADDING, height - 2 * NODE_PADDING], // bottom-right
    ['L', NODE_PADDING, height - 2 * NODE_PADDING], // bottom-left
    ['Z'],
  ];

  const RoundedPath = [
    ['M', ROUNDED + NODE_PADDING, NODE_PADDING], // top-left
    ['L', width - ROUNDED, NODE_PADDING], // top-right
    ['L', width - 2 * NODE_PADDING, ROUNDED], // top-right
    ['L', width - 2 * NODE_PADDING, height - ROUNDED], // bottom-right
    ['L', width - ROUNDED, height - NODE_PADDING], //bottom-right
    ['L', ROUNDED + NODE_PADDING, height - NODE_PADDING], //bottom-left
    ['L', NODE_PADDING, height - ROUNDED], // bottom-left
    ['L', NODE_PADDING, ROUNDED], //top-left
    ['Z'],
  ];

  return [createPath(RoundedPath)];
};
