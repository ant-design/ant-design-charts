import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/cb99c4ab-e0a3-4c76-9586-fe7fa2ff1a8c.csv',
    },
    xField: (d) => new Date(d.date).getFullYear(),
    yField: 'price',
    colorField: 'symbol',
    label: {
      text: 'price',
      transform: [{ type: 'overlapDodgeY' }],
      style: {
        fontSize: 10,
      },
    },
    group: { y: 'mean' },
  };
  return <Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
