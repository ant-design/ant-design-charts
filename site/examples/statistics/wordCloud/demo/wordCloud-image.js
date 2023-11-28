import { WordCloud } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoWordCloud = () => {
  const config = {
    width: 1000,
    height: 400,
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

ReactDOM.render(<DemoWordCloud />, document.getElementById('container'));
