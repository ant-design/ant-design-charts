import React from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';

const DemoArea = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/f38a8ad0-6e1f-4bb3-894c-7db50781fdec.json',
    },
    xField: (d) => new Date(d.year),
    yField: 'revenue',
    seriesField: 'format',
    colorField: 'group',
    shapeField: 'smooth',
    stack: {
      orderBy: 'maxIndex',
      reverse: true,
    },
    axis: {
      y: { labelFormatter: '~s' },
    },
    tooltip: { channel: 'y', valueFormatter: '.2f' },
    line: {
      stack: {
        orderBy: 'maxIndex',
        reverse: true,
        y: 'y1',
      },
      style: {
        stroke: 'white',
      },
    },
  };
  return <Area {...config} />;
};

ReactDOM.render(<DemoArea />, document.getElementById('container'));
