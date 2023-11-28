import React from 'react';
import ReactDOM from 'react-dom';
import { Base } from '@ant-design/plots';

const Demobase = () => {
  const config = {
    type: 'facetRect',
    height: 640,
    autoFit: false,
    paddingLeft: 60,
    paddingBottom: 60,
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/penguins.json',
      transform: [
        {
          type: 'map',
          callback: ({ culmen_depth_mm: depth, culmen_length_mm: length, ...d }) => ({
            ...d,
            culmen_depth_mm: depth === 'NaN' ? NaN : depth,
            culmen_length_mm: length === 'NaN' ? NaN : length,
          }),
        },
      ],
    },
    encode: { x: 'sex', y: 'species' },
    children: [
      {
        type: 'point',
        frame: false,
        encode: { x: 'culmen_depth_mm', y: 'culmen_length_mm' },
        style: { fill: '#ddd', strokeWidth: 0 },
        facet: false,
      },
      {
        type: 'point',
        encode: { x: 'culmen_depth_mm', y: 'culmen_length_mm', color: 'island' },
      },
    ],
  };
  return <Base {...config} />;
};

ReactDOM.render(<Demobase />, document.getElementById('container'));
