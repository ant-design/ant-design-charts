import React from 'react';
import ReactDOM from 'react-dom';
import { Violin } from '@ant-design/plots';

const DemoViolin = () => {
  const config = {
    violinType: 'density',
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/species.json',
    },
  };
  return <Violin {...config} />;
};

ReactDOM.render(<DemoViolin />, document.getElementById('container'));