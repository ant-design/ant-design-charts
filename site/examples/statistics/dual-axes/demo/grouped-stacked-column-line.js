import { DualAxes } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoDualAxes = () => {
  const uvBillData = [
    { time: '2025-03', value: 350, group: 'uv', type: 'a' },
    { time: '2025-04', value: 900, group: 'uv', type: 'a' },
    { time: '2025-05', value: 300, group: 'uv', type: 'a' },
    { time: '2025-06', value: 450, group: 'uv', type: 'a' },
    { time: '2025-07', value: 470, group: 'uv', type: 'a' },

    { time: '2025-03', value: 350, group: 'uv', type: 'b' },
    { time: '2025-04', value: 900, group: 'uv', type: 'b' },
    { time: '2025-05', value: 300, group: 'uv', type: 'b' },
    { time: '2025-06', value: 450, group: 'uv', type: 'b' },
    { time: '2025-07', value: 470, group: 'uv', type: 'b' },

    { time: '2025-03', value: 220, group: 'bill', type: 'c' },
    { time: '2025-04', value: 300, group: 'bill', type: 'c' },
    { time: '2025-05', value: 250, group: 'bill', type: 'c' },
    { time: '2025-06', value: 220, group: 'bill', type: 'c' },
    { time: '2025-07', value: 362, group: 'bill', type: 'c' },
  ];

  const transformData = [
    { time: '2025-03', count: 800 },
    { time: '2025-04', count: 600 },
    { time: '2025-05', count: 400 },
    { time: '2025-06', count: 380 },
    { time: '2025-07', count: 220 },
  ];

  const config = {
    xField: 'time',
    legend: {
      color: {
        itemMarker: (datum) => {
          if (datum === 'count') {
            return 'dash';
          } else {
            return 'square';
          }
        },
      },
    },
    children: [
      {
        data: uvBillData,
        type: 'interval',
        yField: 'value',
        colorField: 'type',
        seriesField: 'group',
        stack: {
          groupBy: ['x', 'series'],
        },
        group: true,
        tooltip: {
          items: [
            (datum) => {
              return {
                name: `${datum.group}_${datum.type}`,
                value: datum.value,
              };
            },
          ],
        },
      },
      {
        data: transformData,
        type: 'line',
        yField: 'count',
        style: { lineWidth: 2 },
        axis: { y: { position: 'right' } },
      },
    ],
  };
  return <DualAxes {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoDualAxes />);
