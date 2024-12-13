import React from 'react';
import { RCNode } from '../../core/base';
import { formatLabel } from '../../core/utils/label';
import type { FlowGraphOptions } from './types';

const { TextNode } = RCNode;

export const DEFAULT_OPTIONS: FlowGraphOptions = {
  node: {
    type: 'react',
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
      router: {
        type: 'orth',
      },
    },
  },
  layout: {
    type: 'dagre',
    animation: false,
  },
  transforms: ['translate-react-node-origin'],
};

export const getFlowGraphOptions = ({
  direction,
  labelField,
}: Pick<FlowGraphOptions, 'direction' | 'labelField'>): FlowGraphOptions => {
  const options: FlowGraphOptions = {
    node: {
      style: {
        component: (data) => {
          const label = formatLabel(data, labelField);
          return <TextNode type="filled" text={label} />;
        },
        size: [100, 40],
        ports:
          direction === 'vertical'
            ? [{ placement: 'top' }, { placement: 'bottom' }]
            : [{ placement: 'left' }, { placement: 'right' }],
      },
    },
    layout: {
      type: 'dagre',
      rankdir: direction === 'vertical' ? 'TB' : 'LR',
    },
  };

  return options;
};
