import React from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';

const DemoArea = () => {
  const config = {
    data: [
      { year: '1991', value: 15468 },
      { year: '1992', value: 16100 },
      { year: '1993', value: 15900 },
      { year: '1994', value: 17409 },
      { year: '1995', value: 17000 },
      { year: '1996', value: 31056 },
      { year: '1997', value: 31982 },
      { year: '1998', value: 32040 },
      { year: '1999', value: 33233 },
    ],
    xField: 'year',
    yField: 'value',
    shape: 'hvh',
    label: {
      text: 'value',
      style: {
        fontSize: 10,
        textAlign: (_, idx, arr) => {
          if (idx === 0) return 'left';
          if (idx === arr.length - 1) return 'right';
          return 'center';
        },
      },
    },
    style: {
      opacity: 0.4,
    },
    axis: {
      y: { labelFormatter: '~s' },
    },
    line: {
      shape: 'hvh',
    },
  };
  return <Area {...config} />;
};

ReactDOM.render(<DemoArea />, document.getElementById('container'));
