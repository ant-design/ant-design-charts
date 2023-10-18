import React from 'react';
import ReactDOM from 'react-dom';
import { Bullet } from '@ant-design/plots';

const DemoBullet = () => {
  const data = [
    {
      title: '5🌟',
      ranges: 100,
      measures: 40,
      targets: 85,
    },
    {
      title: '4🌟',
      ranges: 100,
      measures: 80,
      targets: 40,
    },
    {
      title: '3🌟',
      ranges: 100,
      measures: 20,
      targets: 22,
    },
    {
      title: '0-2🌟',
      ranges: 100,
      measures: 30,
      targets: 10,
    },
  ];

  const color = {
    targets: 'red',
  };

  const config = {
    data,
    color,
  };
  return <Bullet {...config} />;
};

ReactDOM.render(<DemoBullet />, document.getElementById('container'));
