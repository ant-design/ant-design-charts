import { Tiny } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoRing = () => {
  const config = {
    percent: 0.7,
    color: ['#E8EFF5', '#66AFF4'],
    annotations: [
      {
        type: 'text',
        style: {
          text: `${progress * 100}%`,
          x: '50%',
          y: '50%',
          textAlign: 'center',
          fontSize: 16,
          fontStyle: 'bold',
        },
      },
    ],
  };

  return <Tiny.Ring {...config} />;
};

ReactDOM.render(<DemoRing />, document.getElementById('container'));
