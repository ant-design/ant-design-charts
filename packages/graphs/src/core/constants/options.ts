import type { GraphOptions } from '../../types';

export const COMMON_OPTIONS: GraphOptions = {
  node: {
    style: {},
    state: {
      active: {
        halo: false,
      },
      selected: {
        halo: false,
      },
    },
  },
  behaviors: ['drag-canvas', 'zoom-canvas'],
};
