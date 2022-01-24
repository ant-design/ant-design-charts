import { createPath, createRoundedPath } from '../../util';
import { NODE_PADDING, ROUNDEDRADIUS } from '../../constants';
import { getConfig } from '../utils';

export const ProcessNodePath = (props, rounded) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['L', width - 2 * NODE_PADDING, NODE_PADDING], // top-right
    ['L', width - 2 * NODE_PADDING, height - 2 * NODE_PADDING], // bottom-right
    ['L', NODE_PADDING, height - 2 * NODE_PADDING], // bottom-left
    ['Z'],
  ];

  const RoundedPath = [
    ['M', ROUNDEDRADIUS, NODE_PADDING], // top-left
    ['L', width - ROUNDEDRADIUS, NODE_PADDING], // top-right
    ['A', ROUNDEDRADIUS, ROUNDEDRADIUS, 0, 0, 1, width - 2 * NODE_PADDING, ROUNDEDRADIUS],
    ['L', width - 2 * NODE_PADDING, ROUNDEDRADIUS], // top-right
    ['L', width - 2 * NODE_PADDING, height - ROUNDEDRADIUS], // bottom-right
    ['A', ROUNDEDRADIUS, ROUNDEDRADIUS, 0, 0, 1, width - ROUNDEDRADIUS, height - NODE_PADDING],
    ['L', width - ROUNDEDRADIUS, height - NODE_PADDING], //bottom-right
    ['L', ROUNDEDRADIUS, height - NODE_PADDING], //bottom-left
    ['A', ROUNDEDRADIUS, ROUNDEDRADIUS, 0, 0, 1, NODE_PADDING, height - ROUNDEDRADIUS],
    ['L', NODE_PADDING, height - ROUNDEDRADIUS], // bottom-left
    ['L', NODE_PADDING, ROUNDEDRADIUS], //top-left
    ['A', ROUNDEDRADIUS, ROUNDEDRADIUS, 0, 0, 1, ROUNDEDRADIUS, NODE_PADDING],
  ];

  return rounded ? [createRoundedPath(RoundedPath)] : [createPath(path)];
};
