import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/temperatures1.json',
    },
    xField: (d) => new Date(d.date),
    yField: 'value',
    colorField: 'condition',
    seriesField: () => 'a',
    shape: 'hvh',
    style: {
      gradient: 'x',
      lineWidth: 2,
    },
    meta: {
      y: { nice: true },
      color: {
        domain: ['CLR', 'FEW', 'SCT', 'BKN', 'OVC', 'VV '],
        range: ['deepskyblue', 'lightskyblue', 'lightblue', '#aaaaaa', '#666666', '#666666'],
      },
    },
  };
  return <Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
