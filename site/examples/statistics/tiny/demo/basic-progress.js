import { Tiny } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoProgress = () => {
  const progress = 0.7

  const config = {
    width: 480,
    height: 60,
    autoFit: false,
    percent: progress,
    color: ['#f3cbb1', '#a0ff03'],
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
      }
    ]
  };

  return <Tiny.Progress {...config} />;
};

ReactDOM.render(<DemoProgress />, document.getElementById('container'));
