import React from 'react';
import { RCNode } from '../../core/base';
import { OrganizationChartOptions } from './types';

const { TextNode } = RCNode;

export const DEFAULT_OPTIONS: OrganizationChartOptions = {
  padding: [20, 0, 0, 50],
  node: {
    type: 'react',
    style: {
      component: (data) => <TextNode type="filled" text={data.id} />,
      size: [100, 40],
      ports: [{ placement: 'top' }, { placement: 'bottom' }],
    },
    state: {
      active: {
        halo: false,
      },
      selected: {
        halo: false,
      },
    },
    animation: false,
  },
  edge: {
    type: 'polyline',
    style: {
      lineWidth: 2,
      router: {
        type: 'orth',
      },
    },
    animation: false,
  },
  layout: {
    type: 'antv-dagre',
  },
  transforms: ['translate-react-node-origin'],
};

export function getOrganizationChartOptions({
  direction,
}: Pick<OrganizationChartOptions, 'direction'>): OrganizationChartOptions {
  let options = {};

  if (direction === 'vertical') {
    options = {
      node: {
        style: {
          ports: [{ placement: 'top' }, { placement: 'bottom' }],
        },
      },
      transforms: (prev) => [
        ...prev,
        {
          type: 'collapse-expand-react-node',
          key: 'collapse-expand-react-node',
          enable: false,
          refreshLayout: true,
        },
      ],
      layout: {
        rankdir: 'TB',
      },
    };
  } else {
    options = {
      node: {
        style: {
          ports: [{ placement: 'left' }, { placement: 'right' }],
        },
      },
      transforms: (prev) => [
        ...prev,
        {
          type: 'collapse-expand-react-node',
          key: 'collapse-expand-react-node',
          iconPlacement: 'right',
          enable: false,
          refreshLayout: true,
        },
      ],
      layout: {
        rankdir: 'LR',
      },
    };
  }

  return options;
}
