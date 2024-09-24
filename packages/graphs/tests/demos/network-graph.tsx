import type { GraphOptions } from '@ant-design/graphs';
import { NetworkGraph as NetworkGraphComponent } from '@ant-design/graphs';
import { labelPropagation } from '@antv/algorithm';
import React from 'react';
import data from '../datasets/language-tree.json';

export const NetworkGraph = () => {
  const options: GraphOptions = {
    autoFit: 'view',
    data: {
      ...data,
      nodes: labelPropagation(data).clusters.flatMap((cluster) => cluster.nodes),
    },
    node: {
      style: {
        labelText: (d) => d.id,
        labelBackground: true,
        iconSrc: 'https://gw.alipayobjects.com/zos/basement_prod/012bcf4f-423b-4922-8c24-32a89f8c41ce.svg',
      },
      state: {
        active: {
          halo: false,
        },
      },
      palette: {
        field: (d) => d.clusterId as string,
      },
    },
    edge: {
      state: {
        active: {
          halo: false,
        },
      },
    },
    behaviors: (prev) => [
      ...prev,
      {
        key: 'hover-activate',
        type: 'hover-activate',
        degree: 1,
        inactiveState: 'inactive',
      },
    ],
  };

  return <NetworkGraphComponent {...options} />;
};
