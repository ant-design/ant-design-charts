import React from 'react';
import ReactDOM from 'react-dom';
import { Violin } from '@ant-design/plots';

const DemoViolin = () => {
  const config = {
    violinType: 'polar',
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/species.json',
    },
    xField: 'x',
    yField: 'y',
    seriesField: 'species'
  };
  return <Violin {...config} />;
};

ReactDOM.render(<DemoViolin />, document.getElementById('container'));
