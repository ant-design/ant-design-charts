import React from 'react';
import { RCNode } from '../../core/base';
import type { FlowGraphOptions } from './types';

const { TextNode } = RCNode;

export const DEFAULT_OPTIONS: FlowGraphOptions = {
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
    type: 'polyline',
    style: {
      lineWidth: 2,
      endArrow: true,
      radius: 8,
      router: { type: 'orth' },
    },
  },
  layout: {
    type: 'dagre',
    rankdir: 'LR',
    animation: false,
  },
  transforms: ['translate-react-node-origin'],
};

export const getFlowGraphOptions = ({ direction }: Pick<FlowGraphOptions, 'direction'>): FlowGraphOptions => {
  let options: FlowGraphOptions = {};

  if (direction === 'vertical') {
    options = {
      node: {
        style: {
          ports: [{ placement: 'top' }, { placement: 'bottom' }],
        },
      },
      layout: {
        type: 'dagre',
        rankdir: 'TB',
      },
    };
  }

  return options;
};
