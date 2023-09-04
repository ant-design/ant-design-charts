import { Tiny } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';
const data = [
  264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
];
const DemoLine = () => {
  const config = {
    data,
    width: 480,
    height: 120,
    shapeField: 'smooth',
    xField: (_, idx) => idx,
    yField: (d) => d,
    animate: { enter: { type: 'fadeIn' } },
    interaction: { tooltip: { render: (e, { title, items }) => items[0].value } },
    annotations: [
      {
        type: 'lineY',
        data: [data.reduce((acc, cur) => acc + cur, 0) / data.length],
        label: {
          text: '平均值',
          position: 'left',
          dx: -10,
          style: { textBaseline: 'bottom' },
        },
        style: { stroke: 'rgba(0, 0, 0)' },
      },
      {
        type: 'lineY',
        data: [800],
        label: {
          text: '目标值',
          position: 'left',
          dx: -10,
          style: { textBaseline: 'bottom' },
        },
        style: { stroke: 'rgba(0, 0, 0)' },
      },
    ],
  };
  return <Tiny.Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
