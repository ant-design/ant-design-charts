import { Waterfall } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoWaterfall = () => {
  const data = [
    { quarter: '第一季度', value: 6200000 },
    { quarter: '第二季度', value: -2600000 },
    { quarter: '第三季度', value: 4100000 },
    { quarter: '第四季度', value: 3700000 },
    { quarter: '总计', value: 11400000, isTotal: true },
  ];
  const config = {
    data,
    xField: 'quarter',
    yField: 'value',
    linkStyle: {
      lineDash: [4, 2],
      stroke: '#ccc',
    },
    style: {
      maxWidth: 60,
      stroke: '#ccc',
      fill: (d) => {
        return d.isTotal ? '#96a6a6' : d.value > 0 ? '#F56E53' : '#3CC27F';
      },
    },
    labels: [
      {
        text: (arg) => {
          return `${arg.__end__ / 1000000} 亿`;
        },
        position: (d) => (d.value > 0 ? 'top' : 'bottom'),
        textBaseline: (d) => (d.value > 0 ? 'bottom' : 'top'),
        fontSize: 10,
        dy: (d) => (d.value > 0 ? -4 : 4),
      },
      {
        text: (arg) => {
          return `${arg.value / 1000000} 亿`;
        },
        position: 'inside',
        fontSize: 10,
      },
    ],
    tooltip: {
      items: [
        {
          name: 'start',
          channel: 'y',
          valueFormatter: '~s'
        },
        {
          name: 'end',
          channel: 'y1',
          valueFormatter: '~s'
        }
      ]
    }
  };
  return <Waterfall {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoWaterfall />);
