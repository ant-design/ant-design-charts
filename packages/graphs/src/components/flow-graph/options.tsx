import React from 'react';
import { RCNode } from '../../core/base';
import type { GraphOptions } from '../../types';

const { TextNode } = RCNode;

export const DEFAULT_OPTIONS: GraphOptions = {
  node: {
    type: 'react',
    style: {
      component: (data) => <TextNode type="filled" text={data.id} />,
      size: [80, 40],
      ports: [{ placement: 'left' }, { placement: 'right' }],
    },
    state: {
      active: {
        halo: false,
      },
      selected: {
        halo: false,
      },
    },
  },
  edge: {
    type: 'cubic-horizontal',
    style: {
      strokeOpacity: 0.5,
    },
    state: {
      active: {
        strokeOpacity: 1,
      },
    },
  },
  layout: {
    type: 'antv-dagre',
    rankdir: 'LR',
  },
  transforms: ['translate-react-node-origin'],
};
