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
    label: {
      selector: 'last',
      text: (d) => d,
      textAlign: 'right',
      textBaseline: 'bottom',
      dx: -10,
      dy: -10,
      connector: true,
      style: { fontSize: 10 },
    },
    animate: { enter: { type: 'fadeIn' } },
    interaction: { tooltip: { render: (e, { title, items }) => items[0].value } },
  };
  return <Tiny.Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
