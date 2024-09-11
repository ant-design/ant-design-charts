import type { NodeData } from '@antv/g6';
import { idOf } from '@antv/g6';
import React, { useMemo } from 'react';
import type { GraphOptions, GraphType } from '../../types';
import { PlainNode } from '../nodes';
import { inferCollapsibleStyle, isCollapsible, isReactNode, parseCollapsible, upsertChildrenData } from '../utils/node';
import { mergeOptions } from '../utils/options';

const COMMON_OPTIONS: GraphOptions = {
  collapsible: true,
  node: {
    type: 'react',
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
  transforms: ['infer-react-style'],
};

const hierarchicalGraphOptions: GraphOptions = {
  node: {
    style: {
      component: (data: NodeData) => <PlainNode text={idOf(data)} isActive={data.states?.includes('active')} />,
      size: [80, 40],
      ports: [{ placement: 'top' }, { placement: 'bottom' }],
    },
  },
  edge: {
    type: 'polyline',
    style: {
      router: {
        type: 'orth',
      },
    },
  },
  layout: {
    type: 'antv-dagre',
    rankdir: 'TB',
  },
  animation: false,
};

const TEMPLATE_OPTIONS_MAP: Record<GraphType, GraphOptions> = {
  'hierarchical-graph': hierarchicalGraphOptions,
};

export const useOptions = (type: GraphType, propOptions: GraphOptions) => {
  return useMemo(() => {
    const defaultOptions = mergeOptions(TEMPLATE_OPTIONS_MAP[type] || {}, COMMON_OPTIONS);
    const options = mergeOptions(propOptions, defaultOptions);

    if (isCollapsible(options)) {
      const { direction } = parseCollapsible(options.collapsible);
      options.data = upsertChildrenData(options.data, direction!);

      if (isReactNode(options)) inferCollapsibleStyle(options);
    }

    return options;
  }, [type, propOptions]);
};
