import { WordCloud } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoWordCloud = () => {
  const config = {
    paddingTop: 40,
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/philosophy-word.json',
    },
    layout: { spiral: 'rectangular' },
    colorField: 'text',
  };
  return <WordCloud {...config} />;
};

ReactDOM.render(<DemoWordCloud />, document.getElementById('container'));
