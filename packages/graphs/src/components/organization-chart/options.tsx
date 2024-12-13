import React from 'react';
import { RCNode } from '../../core/base';
import { formatLabel } from '../../core/utils/label';
import type { GraphOptions } from '../../types';
import { OrganizationChartOptions } from './types';

const { TextNode } = RCNode;

export const DEFAULT_OPTIONS: GraphOptions = {
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

export function getOrganizationChartOptions({
  direction,
  labelField,
}: Pick<OrganizationChartOptions, 'direction' | 'labelField'>): GraphOptions {
  const options: GraphOptions = {
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
    transforms: (prev) => [
      ...prev,
      {
        type: 'collapse-expand-react-node',
        key: 'collapse-expand-react-node',
        iconPlacement: direction === 'vertical' ? 'bottom' : 'right',
        enable: false,
        refreshLayout: true,
      },
    ],
    layout: {
      type: 'dagre',
      rankdir: direction === 'vertical' ? 'TB' : 'LR',
    },
  };

  return options;
}
