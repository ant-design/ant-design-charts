import { Tiny } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoLine = () => {
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
  ].map((value, index) => ({ value, index }));
  const config = {
    data,
    width: 480,
    height: 80,
    padding: 8,
    xField: 'index',
    yField: 'value',
    annotations: [
      {
        type: 'lineY',
        data: [700],
        style: { arrow: true, stroke: 'red', lineDash: [2, 2] },
        label: {
          text: 'value = 700',
          position: 'right',
          dx: -10,
          style: { textBaseline: 'bottom' },
        },
      },
    ],
  };
  return <Tiny.Column {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
