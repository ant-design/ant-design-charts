import { Column } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoInteraction = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
    },
    xField: 'letter',
    yField: 'frequency',
    transform: [{ type: 'sortX', by: 'y', reverse: true, slice: 5 }],
    axis: { y: { labelFormatter: '.0%' } },
    interaction: { elementHighlight: { background: true } },
  };
  return <Column {...config} />;
};

ReactDOM.render(<DemoInteraction />, document.getElementById('container'));
