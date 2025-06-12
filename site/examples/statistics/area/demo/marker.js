import { Area } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoArea = () => {
  const data = [
    { year: '1991', value: 8 },
    { year: '1992', value: 9 },
    { year: '1993', value: 9.1 },
    { year: '1994', value: 9.3 },
    { year: '1995', value: 12 },
    { year: '1996', value: 12.9 },
    { year: '1997', value: 12.9 },
  ];
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      fill: 'linear-gradient(-90deg, white 0%, darkgreen 100%)',
    },
    line: {
      style: {
        stroke: 'darkgreen',
        lineWidth: 2,
      },
    },
    point: {
      sizeField: 4,
      style: {
        stroke: 'darkgreen',
        fill: '#fff',
      },
    },
  };

  return <Area {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoArea />);
