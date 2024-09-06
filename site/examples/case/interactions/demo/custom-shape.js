import { Column } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoCustomShape = () => {
  const config = {
    data: [
      { type: '1-3秒', value: 0.36 },
      { type: '4-10秒', value: 0.25 },
      { type: '11-30秒', value: 0.24 },
      { type: '31-60秒', value: 0.19 },
      { type: '1-3分', value: 0.12 },
      { type: '3-10分', value: 0.15 },
      { type: '10-30分', value: 0.16 },
      { type: '30+分', value: 0.1 },
    ],
    xField: 'type',
    yField: 'value',
    annotations: [
      {
        type: 'shape',
        xField: 'type',
        yField: 'value',
        style: {
          render: ({ x, y }, context) => {
            const { document } = context;
            const g = document.createElement('g', {});
            const { width } = document.getElementsByClassName('element')[0].getBBox();
            const rect = document.createElement('rect', {
              style: {
                x: x - width / 2,
                y: y - 20,
                width,
                height: 10,
                fill: '#FF8C16',
                cursor: 'pointer',
              },
            });
            g.appendChild(rect);
            return g;
          },
        },
      },
    ],
  };
  return <Column {...config} />;
};

ReactDOM.render(<DemoCustomShape />, document.getElementById('container'));
