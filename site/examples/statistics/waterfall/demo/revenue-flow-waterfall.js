import { Waterfall } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoWaterfall = () => {
  const config = {
    data: [
      { x: 'Start', value: 23000000 },
      { x: 'Jan', value: 2200000 },
      { x: 'Feb', value: -4600000 },
      { x: 'Mar', value: -9100000 },
      { x: 'Apr', value: 3700000 },
      { x: 'May', value: -2100000 },
      { x: 'Jun', value: 5300000 },
      { x: 'Jul', value: 3100000 },
      { x: 'Aug', value: -1500000 },
      { x: 'Sep', value: 4200000 },
      { x: 'Oct', value: 5300000 },
      { x: 'Nov', value: -1500000 },
      { x: 'Dec', value: 5100000 },
      { x: 'End', isTotal: true, value: 33100000 },
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
  };
  return <Waterfall {...config} />;
};

ReactDOM.render(<DemoWaterfall />, document.getElementById('container'));
