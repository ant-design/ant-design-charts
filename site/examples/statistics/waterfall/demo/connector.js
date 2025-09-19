import { Waterfall } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoWaterfall = () => {
  const config = {
    data: [
      { x: 'Net Sales', value: 5085000 },
      { x: 'Cost of Sales', value: -1250450 },
      { x: 'Operating Expenses', value: -2350050 },
      { x: 'Other Income', value: 750000 },
      { x: 'Extraordinary Gain', value: -230050 },
      { x: 'Interest Expense', value: -500000 },
      { x: 'Taxes', value: 490000 },
      { x: 'Net Income', isTotal: true, value: 1994450 },
    ],
    xField: 'x',
    yField: 'value',
    linkStyle: {
      lineDash: [4, 2],
      stroke: '#ccc',
    },
    style: {
      maxWidth: 25,
      stroke: '#ccc',
      fill: (d, idx) => {
        return idx === 0 || d.isTotal ? '#96a6a6' : d.value > 0 ? '#64b5f6' : '#ef6c00';
      },
    },
    label: {
      text: 'value',
      formatter: '~s',
      position: (d) => (d.value > 0 ? 'top' : 'bottom'),
      textBaseline: (d) => (d.value > 0 ? 'bottom' : 'top'),
      fontSize: 10,
      dy: (d) => (d.value > 0 ? -4 : 4),
    },
    connector: {
      label: {
        text: (d) => `${d.y2 - d.y1}`,
        formatter: '~s',
        fontSize: 14,
        dy: 2,
      },
      style: { stroke: '#697474', offset: 16 },
    },
  };
  return <Waterfall {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoWaterfall />);
