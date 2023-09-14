import React from 'react';
import ReactDOM from 'react-dom';
import { Bullet } from '@ant-design/plots';

const DemoBullet = () => {
  const data = [{
      title: '5🌟',
      ranges: [100, 80],
      measures: [50, 40],
      targets: [85],
    },
    {
      title: '4🌟',
      ranges: [100, 10],
      measures: [12, 40],
      targets: [40, 70],
    },
    {
      title: '3🌟',
      ranges: [100],
      measures: [20],
      targets: [22],
    },
    {
      title: '0-2🌟',
      ranges: [100],
      measures: [30],
      targets: [10],
    },
  ];

  const color = {
    ranges: ['#FFbcb8', '#FFe0b0', '#bfeec8'],
    measures: ['#5B8FF9', '#61DDAA'],
    targets: ['#f0f'],
  };

  const config = {
    data,
    color,
  };

  return <Bullet {...config}/>;
};

ReactDOM.render(<DemoBullet />, document.getElementById('container'));
