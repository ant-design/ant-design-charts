import { Stock } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoStock = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/aapl2.json',
      transform: [
        {
          type: 'map',
          callback: (d) => ({
            ...d,
            date: new Date(d.Date).toLocaleDateString(),
          }),
        },
      ],
    },
    axis: {
      x: {
        labelAutoRotate: false,
        transform: [
          {
            type: 'hide',
            keepHeader: true,
            keepTail: true,
          },
        ],
      },
    },
    xField: 'date',
    yField: ['Open', 'Close', 'Low', 'High'],
    colorField: (d) => {
      // return '#4daf4a'
      const trend = Math.sign(d.Close - d.Open);
      return trend > 0 ? '下跌' : trend === 0 ? '不变' : '上涨';
    },
    lineStyle: {
      stroke: 'black',
    },
    scale: {
      color: {
        domain: ['下跌', '不变', '上涨'],
        range: ['#4daf4a', '#999999', '#e41a1c'],
      },
    },
    tooltip: {
      title: (d) => d.Date,
      items: [
        { field: 'Open', name: 'open' },
        { field: 'Close', name: 'close' },
        { field: 'Low', name: 'low' },
        { field: 'High', name: 'high' },
      ],
    },
  };

  return <Stock {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoStock />);
