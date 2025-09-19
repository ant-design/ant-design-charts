import { DualAxes } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoDualAxes = () => {
  const data = [
    { year: '1991', value: null, count: 3 },
    { year: '1992', value: null, count: 3 },
    { year: '1993', value: null, count: 5 },
    { year: '1994', value: 5, count: 5 },
    { year: '1995', value: 6, count: null },
    { year: '1996', value: 8, count: null },
    { year: '1997', value: 7, count: null },
    { year: '1998', value: 9, count: null },
  ];

  const config = {
    data,
    xField: 'year',
    scale: {
      y: {
        independent: false,
        key: 'sameKey',
        domain: [0, 10],
      },
    },
    tooltip: {
      items: [
        (item) => ({
          name: '销售额',
          value: item.value | item.count,
        }),
      ],
    },
    children: [
      {
        type: 'line',
        yField: 'count',
      },
      {
        type: 'line',
        yField: 'value',
        style: {
          lineDash: [2, 4],
          stroke: 'red',
        },
      },
    ],
  };
  return <DualAxes {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoDualAxes />);
