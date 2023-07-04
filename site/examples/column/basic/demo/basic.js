import React from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = () => {
  const props = {
    data: [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ],
    encode: {
      x: 'genre',
      y: 'sold',
      color: 'genre',
    },
  };
  return <Column {...props} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
