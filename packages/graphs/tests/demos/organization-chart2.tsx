import {
  OrganizationChart as OrganizationChartComponent,
  RCNode,
  type OrganizationChartOptions,
} from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';
import { useGraphOptions } from './hooks/useQueryOptions';

const { OrganizationChartNode } = RCNode;

export const OrganizationChart2 = () => {
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

  const options = useGraphOptions<OrganizationChartOptions>({
    data,
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
    behaviors: (prev) => [...prev, 'hover-activate-neighbors'],
    transforms: (prev) => [
      ...prev.filter((t) => (t as any).type !== 'collapse-expand-react-node'),
      {
        ...(prev.find((t) => (t as any).type === 'collapse-expand-react-node') as any),
        enable: true,
      },
    ],
  });

  return <OrganizationChartComponent {...options} loading={loading} />;
};
