import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Venn } from '@ant-design/plots';

const DemoVenn = () => {
  const config = {
    data: [
      {
        sets: ['A'],
        size: 12,
        label: 'A',
      },
      {
        sets: ['B'],
        size: 12,
        label: 'B',
      },
      {
        sets: ['C'],
        size: 12,
        label: 'C',
      },
      {
        sets: ['A', 'B'],
        size: 2,
        label: 'A&B',
      },
      {
        sets: ['A', 'C'],
        size: 2,
        label: 'A&C',
      },
      {
        sets: ['B', 'C'],
        size: 2,
        label: 'B&C',
      },
      {
        sets: ['A', 'B', 'C'],
        size: 1,
      },
    ],
    setsField: 'sets',
    sizeField: 'size',
    pointStyle: {
      fillOpacity: 0.8,
    },
    padding: [0, 10],
    state: {
      active: {
        style: {
          fillOpacity: 1,
          stroke: 'black',
          lineWidth: 1,
        },
      },
      selected: {
        style: {
          stroke: 'black',
          lineWidth: 2,
        },
      },
    },
    interactions: [
      {
        type: 'venn-element-active',
        enable: true,
      },
      {
        type: 'venn-element-selected',
        enable: true,
      },
    ],
  };
  return <Venn {...config} />;
};

ReactDOM.render(<DemoVenn />, document.getElementById('container'));
