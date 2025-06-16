import { WordCloud } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoWordCloud = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/philosophy-word.json',
    },
    layout: { spiral: 'rectangular' },
    colorField: 'text',
  };
  return <WordCloud {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoWordCloud />);
