import { Tiny } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoArea = () => {
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
  ].map((value, index) => ({ value, index }));
  const config = {
    data,
    width: 480,
    height: 80,
    padding: 8,
    shapeField: 'smooth',
    xField: 'index',
    yField: 'value',
    style: {
      fill: '#d6e3fd',
      fillOpacity: 0.6,
    },
  };
  return <Tiny.Area {...config} />;
};

ReactDOM.render(<DemoArea />, document.getElementById('container'));
