import React from 'react';
import ReactDOM from 'react-dom';
import { Bullet } from '@ant-design/plots';

const DemoBullet = () => {
  const color = {
    section: ['#bfeec8', '#FFe0b0', '#FFbcb8'],
    score: ['#61DDAA', '#5B8FF9'],
    target: '#39a3f4',
  };

  const config = {
    data: [
      {
        satisfaction: '满意度',
        // 自动降序
        section: [40, 70, 100],
        score: [30, 50],
        target: [85],
      },
    ],
    color,
    xField: 'satisfaction',
    rangeField: 'section',
    measureField: 'score',
    targetField: 'target',
    mapField: {
      section: ['优', '良', '差'],
      score: ['前段', '后段'],
      target: ['目标'],
    },
  };
  return <Bullet {...config} />;
};

ReactDOM.render(<DemoBullet />, document.getElementById('container'));
