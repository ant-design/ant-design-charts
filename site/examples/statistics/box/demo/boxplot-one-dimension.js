import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@ant-design/plots';

const DemoBox = () => {
  const config = {
    height: 120,
    autoFit: false,
    inset: 6,
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/morley.json',
      transform: [{ type: 'filter', callback: (d) => d.Expt === 1 }],
    },
    boxType: 'boxplot',
    yField: 'Speed',
    coordinate: { transform: [{ type: 'transpose' }] },
    style: { boxFill: '#aaa', pointStroke: '#000' },
  };
  return <Box {...config} />;
};

ReactDOM.render(<DemoBox />, document.getElementById('container'));
