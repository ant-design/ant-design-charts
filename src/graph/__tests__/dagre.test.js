import React from 'react';
import { mount } from 'enzyme';
import { DagreGraph } from '../';

describe('Dagre Graph', () => {
  const data = {
    nodes: [
      {
        id: '0',
        label: '0',
      },
      {
        id: '1',
        label: '1',
      },
      {
        id: '2',
        label: '2',
      },
      {
        id: '3',
        label: '3',
      },
      {
        id: '4',
        label: '4',
      },
      {
        id: '5',
        label: '5',
      },
      {
        id: '6',
        label: '6',
      },
      {
        id: '7',
        label: '7',
      },
      {
        id: '8',
        label: '8',
      },
      {
        id: '9',
        label: '9',
      },
    ],
    edges: [
      {
          source: '0',
          target: '1',
      },
      {
          source: '0',
          target: '2',
      },
      {
          source: '1',
          target: '4',
      },
      {
          source: '0',
          target: '3',
      },
      {
          source: '3',
          target: '4',
      },
      {
          source: '4',
          target: '5',
      },
      {
          source: '4',
          target: '6',
      },
      {
          source: '5',
          target: '7',
      },
      {
          source: '5',
          target: '8',
      },
      {
          source: '8',
          target: '9',
      },
      {
          source: '2',
          target: '9',
      },
      {
          source: '3',
          target: '9',
      },
    ],
  };

  it('初始化以及销毁', () => {
    const config = {
      width: 650,
      height: 500,
      data,
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node']
    };
    mount(<DagreGraph {...config} />);
  });
});
