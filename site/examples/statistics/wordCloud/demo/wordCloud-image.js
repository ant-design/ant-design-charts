import { WordCloud } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoWordCloud = () => {
  const config = {
    autoFit: false,
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json',
    },
    layout: {
      imageMask: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*LKU4TYEiB-4AAAAAAAAAAAAADmJ7AQ/original',
      fontSize: 10,
    },
    colorField: 'name',
    textField: 'name',
    legend: false,
  };
  return <WordCloud {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoWordCloud />);
