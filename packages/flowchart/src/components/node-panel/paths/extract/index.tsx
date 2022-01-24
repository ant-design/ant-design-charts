import { createPath, createRoundedPath } from '../../util';
import { NODE_PADDING, ROUNDEDRADIUS } from '../../constants';
import { getConfig } from '../utils';

export const ExtractNodePath = (props, rounded) => {
  const { width, height } = getConfig(props);
  const path = [
    ['M', width / 2, NODE_PADDING], // top-left
    ['L', width - 2 * NODE_PADDING, height - 2 * NODE_PADDING], // bottom-right
    ['L', NODE_PADDING, height - 2 * NODE_PADDING], // bottom-left
    ['Z'],
  ];

  const roundedPath = [
    ['M', width / 2 - Math.sin(Math.PI / 6) * ROUNDEDRADIUS, Math.cos(Math.PI / 6) * ROUNDEDRADIUS], // top-left
    [
      'A',
      ROUNDEDRADIUS,
      ROUNDEDRADIUS,
      0,
      0,
      1,
      width / 2 + Math.sin(Math.PI / 6) * ROUNDEDRADIUS,
      Math.cos(Math.PI / 6) * ROUNDEDRADIUS,
    ],
    ['L', width / 2 + Math.sin(Math.PI / 6) * ROUNDEDRADIUS, Math.cos(Math.PI / 6) * ROUNDEDRADIUS], // top-left
    ['L', width - Math.sin(Math.PI / 6) * ROUNDEDRADIUS, height - Math.cos(Math.PI / 6) * ROUNDEDRADIUS], // bottom-right
    ['A', ROUNDEDRADIUS, ROUNDEDRADIUS, 0, 0, 1, width - ROUNDEDRADIUS, height],
    ['L', width - ROUNDEDRADIUS, height], // bottom-right
    ['L', ROUNDEDRADIUS, height], // bottom-left
    [
      'A',
      ROUNDEDRADIUS,
      ROUNDEDRADIUS,
      0,
      0,
      1,
      Math.sin(Math.PI / 6) * ROUNDEDRADIUS,
      height - Math.cos(Math.PI / 6) * ROUNDEDRADIUS,
    ],
    ['L', Math.sin(Math.PI / 6) * ROUNDEDRADIUS, height - Math.cos(Math.PI / 6) * ROUNDEDRADIUS], // bottom-left
    ['Z'],
  ];

  return rounded ? [createRoundedPath(roundedPath)] : [createPath(path)];
};
