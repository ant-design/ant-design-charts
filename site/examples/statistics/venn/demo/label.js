import { Venn } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoVenn = () => {
  const config = {
    data: [
      { sets: ['A'], size: 12, label: 'A' },
      { sets: ['B'], size: 12, label: 'B' },
      { sets: ['C'], size: 12, label: 'C' },
      { sets: ['A', 'B'], size: 2, label: 'A&B' },
      { sets: ['A', 'C'], size: 2, label: 'A&C' },
      { sets: ['B', 'C'], size: 2, label: 'B&C' },
      { sets: ['A', 'B', 'C'], size: 1 },
    ],
    setsField: 'sets',
    sizeField: 'size',
    style: { fillOpacity: 0.85 },
    label: {
      position: 'inside',
      text: (d) => d.label || '',
      transform: [{ type: 'contrastReverse' }],
    }
  };
  return <Venn {...config} />;
};

ReactDOM.render(<DemoVenn />, document.getElementById('container'));
