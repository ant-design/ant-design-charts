import {
  GraphOptions,
  HierarchicalGraph as HierarchicalGraphComponent,
  OrganizationChartNode,
} from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';

export const OrganizationChart = () => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://assets.antv.antgroup.com/g6/organization-chart.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const options: GraphOptions = {
    data,
    padding: 20,
    autoFit: 'view',
    node: {
      style: {
        component: (d) => {
          const { name, position, status } = d.data || {};
          const isActive = d.states?.includes('active');
          return <OrganizationChartNode name={name} position={position} status={status} isActive={isActive} />;
        },
        size: [240, 80],
      },
    },
    edge: {
      style: {
        radius: 16,
        lineWidth: 2,
        endArrow: true,
      },
    },
    layout: {
      type: 'antv-dagre',
      nodesep: 24,
      ranksep: -20,
    },
  };

  return <HierarchicalGraphComponent {...options} loading={loading} />;
};
