import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@ant-design/plots';

const DemoBox = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/penguins.json',
    },
    boxType: 'boxplot',
    xField: 'species',
    yField: 'flipper_length_mm',
    colorField: 'sex',
    seriesField: 'sex',
    coordinate: { transform: [{ type: 'transpose' }] },
  };
  return <Box {...config} />;
};

ReactDOM.render(<DemoBox />, document.getElementById('container'));
