import React from 'react';
import ReactDOM from 'react-dom';
import { Violin } from '@ant-design/plots';

const DemoLine = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/species.json',
    },
    children: [{
      type: 'density',
      data: {
        transform: [
          {
            type: 'kde',
            field: 'y',
            groupBy: ['x', 'species'],
          },
        ],
      },
      xField: 'x',
      yField: 'y',
      colorField: 'species',
      seriesField: 'species',
      sizeField: 'size',
      tooltip: false,
    }, {
      type: 'boxplot',
      xField: 'x',
      yField: 'y',
      seriesField: 'species',
      colorField: 'species',
      shapeField: 'violin',
      style: {
        opacity: 0.5,
        point: false,
      }
    }],
  };
  return <Violin {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
