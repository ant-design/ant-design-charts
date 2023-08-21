import { Tiny } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoLine = () => {
  const config = {
    data: [
      264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
    ],
    width: 480,
    height: 120,
    shape: 'smooth',
    xField: (_, idx) => idx,
    yField: (d) => d,
    animate: { enter: { type: 'fadeIn' } },
    interaction: { tooltip: { render: (e, { title, items }) => items[0].value } },
    annotations: [
      {
        type: 'lineY',
        transform: [{ type: 'groupX', y: 'mean' }],
        labels: [
          {
            text: '平均值',
            position: 'left',
            dx: -10,
            style: { textBaseline: 'bottom' },
          },
        ],
        style: { stroke: 'rgba(0, 0, 0)' },
      },
      {
        type: 'lineY',
        data: [800],
        labels: [
          {
            text: '目标值',
            position: 'left',
            dx: -10,
            style: { textBaseline: 'bottom' },
          },
        ],
        style: { stroke: 'rgba(0, 0, 0)' },
      },
    ],
  };
  return <Tiny.Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
