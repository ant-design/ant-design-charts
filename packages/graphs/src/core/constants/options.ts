import type { GraphOptions } from '../../types';

export const COMMON_OPTIONS: GraphOptions = {
  behaviors: [
    {
      key: 'zoom-canvas',
      type: 'zoom-canvas',
    },
    {
      key: 'drag-canvas',
      type: 'drag-canvas',
    },
  ],
};
