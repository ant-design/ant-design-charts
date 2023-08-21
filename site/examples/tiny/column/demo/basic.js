import { Tiny } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoLine = () => {
  const config = {
    data: [
      264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
    ],
    width: 480,
    height: 80,
    padding: 8,
    xField: (_, idx) => idx,
    yField: (d) => d,
    interaction: { tooltip: { render: (e, { title, items }) => items[0].value } },
  };
  return <Tiny.Column {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
