import { OrganizationChart, RCNode, type OrganizationChartOptions } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';

const { OrganizationChartNode } = RCNode;

const CustomNode = ({ text }: { text: string }) => {
  return (
    <div
      style={{
        height: 'inherit',
        width: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '16px',
        backgroundColor: '#FFF6E3',
        color: '#8B5DFF',
        boxShadow: '0 0 0 2px #8B5DFF',
        fontFamily: 'Futura',
      }}
    >
      💡 {text}
    </div>
  );
};

export default () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/organization-chart.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options: OrganizationChartOptions = {
    autoFit: 'view',
    data,
    node: {
      style: {
        component: (d) => {
          const { name, position, status } = d.data || {};
          return <OrganizationChartNode name={name} position={position} status={status} />;
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
  };

  const options2: OrganizationChartOptions = {
    autoFit: 'view',
    data,
    node: {
      style: {
        component: (d) => <CustomNode text={d.data.name} />,
        size: [120, 40],
      },
    },
    edge: {
      style: {
        stroke: '#8B5DFF',
        radius: 8,
        lineWidth: 2,
        endArrow: true,
      },
    },
  };

  return (
    <>
      <OrganizationChart {...options} />
      <OrganizationChart {...options2} />
    </>
  );
};
