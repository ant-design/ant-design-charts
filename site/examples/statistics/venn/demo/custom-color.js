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
    label: {
      position: 'inside',
      text: (d) => d.label || '',
    },
    tooltip: {
      title: false,
      items: [
        (d) => {
          return { name: d.key, value: d.size };
        },
      ],
    },
    style: {
      fillOpacity: 0.85,
      fill: (datum, index, data) => {
        console.log(data);
        const { size } = datum;
        if (size <= 2) return '#f4bb51';
      },
    },
  };
  return <Venn {...config} />;
};

ReactDOM.render(<DemoVenn />, document.getElementById('container'));
