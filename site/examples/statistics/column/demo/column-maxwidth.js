import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

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

createRoot(document.getElementById('container')).render(<DemoColumn />);
