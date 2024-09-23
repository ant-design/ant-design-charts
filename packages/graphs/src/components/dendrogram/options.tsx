import { isEmpty } from 'lodash';
import type { DendrogramOptions } from './types';

export const DEFAULT_OPTIONS: DendrogramOptions = {
  node: {
    type: 'circle',
    style: {
      labelText: (d) => d.id,
    },
  },
};

export const getDendrogramOptions = ({
  direction,
  compact,
}: Pick<DendrogramOptions, 'direction' | 'compact'>): DendrogramOptions => {
  const isLeafNode = (d) => isEmpty(d.children);

  const layoutType = compact ? 'compact-box' : 'dendrogram';
  if (direction === 'vertical') {
    return {
      node: {
        style: {
          labelBackground: true,
          labelPlacement: 'right',
          labelTransform: (d) => (isLeafNode(d) ? 'rotate(90deg) translate(18px)' : 'translate(18px)'),
          ports: [{ placement: 'top' }, { placement: 'bottom' }],
        },
      },
      edge: { type: 'cubic-vertical' },
      layout: { type: layoutType, direction: 'TB', nodeSep: 40, rankSep: 140, getVGap: () => 80, getHGap: () => 20 },
    };
  } else if (direction === 'horizontal') {
    return {
      node: {
        style: {
          labelBackground: true,
          labelPlacement: (d) => (isLeafNode(d) ? 'right' : 'left'),
          ports: [{ placement: 'left' }, { placement: 'right' }],
        },
      },
      edge: { type: 'cubic-horizontal' },
      layout: { type: layoutType, direction: 'LR', nodeSep: 40, rankSep: 200, getVGap: () => 5, getHGap: () => 100 },
    };
  } else {
    return {
      node: { style: { labelBackground: true } },
      edge: { type: 'cubic-radial' },
      layout: {
        type: layoutType,
        direction: 'RL',
        radial: true,
        nodeSep: 40,
        rankSep: 200,
        getVGap: () => 30,
        getHGap: () => 60,
      },
      transforms: (prev) => [...prev, 'place-radial-labels'],
    };
  }
};
