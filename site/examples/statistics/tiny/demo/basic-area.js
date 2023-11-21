import { Tiny } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoArea = () => {
  const config = {
    data: [
      264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
    ],
    width: 480,
    height: 80,
    padding: 8,
    shapeField: 'smooth',
    xField: (_, idx) => idx,
    yField: (d) => d,
    scale: {
      y: { zero: true },
    },
    style: {
      fill: 'linear-gradient(-90deg, white 0%, darkgreen 100%)',
      fillOpacity: 0.6,
    },
    animate: { enter: { type: 'fadeIn' } },
    interaction: { tooltip: { render: (e, { title, items }) => items[0].value } },
  };
  return <Tiny.Area {...config} />;
};

ReactDOM.render(<DemoArea />, document.getElementById('container'));
