import { Violin } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoViolin = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/species.json',
    },
    xField: 'x',
    yField: 'y',
    coordinateType: 'polar',
    box: true,
    seriesField: 'species',
  };
  return <Violin {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoViolin />);
