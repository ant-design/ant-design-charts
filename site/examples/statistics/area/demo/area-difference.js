import React from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';

const DemoArea = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/temperature-compare.json',
      transform: [
        {
          type: 'fold',
          fields: ['New York', 'San Francisco'],
          key: 'city',
          value: 'temperature',
        },
      ],
    },
    xField: (d) => new Date(d.date),
    yField: 'temperature',
    colorField: 'city',
    shapeField: 'hvh',
    diff: true,
    scale: {
      color: { range: ['#67a9cf', '#ef8a62'] },
    },
    line: {
      yField: 'San Francisco',
      style: {
        stroke: '#000',
      },
    },
  };
  return <Area {...config} />;
};

ReactDOM.render(<DemoArea />, document.getElementById('container'));
