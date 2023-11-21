import { Line } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoLine = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/temperatures2.json',
    },
    xField: (d) => new Date(d.date),
    yField: 'value',
    shapeField: 'hvh',
    colorField: 'value',
    axis: {
      x: { title: 'date' },
    },
    style: {
      gradient: 'y',
      lineWidth: 1.5,
      lineJoin: 'round',
    },
    scale: {
      x: { utc: true },
      y: { nice: true },
      color: { type: 'threshold', domain: [55], range: ['black', 'red'] },
    },
  };
  return <Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
