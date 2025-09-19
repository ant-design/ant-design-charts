import { OrganizationChart, RCNode } from '@ant-design/graphs';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const { OrganizationChartNode } = RCNode;

const DemoOrganizationChart = () => {
  const [data, setData] = React.useState();

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/organization-chart.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options = {
    padding: [40, 0, 0, 120],
    autoFit: 'view',
    data,
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
    },
    transforms: (prev) => [
      ...prev.filter((transform) => transform.type !== 'collapse-expand-react-node'),
      {
        ...prev.find((transform) => transform.type === 'collapse-expand-react-node'),
        enable: true,
        iconOffsetY: 24,
      },
    ],
  };
  return <OrganizationChart {...options} />;
};

createRoot(document.getElementById('container')).render(<DemoOrganizationChart />);
