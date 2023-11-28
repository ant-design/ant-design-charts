import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@ant-design/plots';

const DemoBox = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/morley.json',
    },
    boxType: 'boxplot',
    xField: 'Expt',
    yField: 'Speed',
  };
  return <Box {...config} />;
};

ReactDOM.render(<DemoBox />, document.getElementById('container'));
