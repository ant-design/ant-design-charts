import React from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = () => {
  const config = {
    data: [{ letter: 'A', frequency: 120 }],
    xField: 'letter',
    yField: 'frequency',
    scale: {
      x: { padding: 0.5 },
    },
    style: {
      maxWidth: 200,
    },
  };
  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
