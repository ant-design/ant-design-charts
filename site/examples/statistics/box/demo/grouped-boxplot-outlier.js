import { Box } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

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
    transpose: true, // 开启坐标转置
  };
  return <Box {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoBox />);
