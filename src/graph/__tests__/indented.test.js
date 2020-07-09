import React from 'react';
import { mount } from 'enzyme';
import Indented from '../indented';

describe('Indented Tree Graph', () => {
  const data = {
    id: "A",
    label: "A",
    description: 'node Anode Anode Anode a',
    children: [{
      id: "A1",
      label: "A1",
      description: 'node A1',
      children: [
        { id: "A11", label: "A11", description: 'node A11\nnode A11\nnode A11', },
        { id: "A12", label: "A12", description: 'node A12', },
        { id: "A13", label: "A13", description: 'node A13', },
        { id: "A14", label: "A14", description: 'node A14', },
      ]
    }, {
      id: "A2",
      label: "A2",
      description: 'node A2\nnode A2\nnode A2\nnode A2\nnode A2',
      children: [{
        id: "A21",
        label: "A21",
        description: 'node A21',
        children: [
          { id: "A211", label: "A211", description: 'node A211', },
          { id: "A212", label: "A212", description: 'node A212', },
        ]
      }, {
        id: 'A22',
        label: "A22",
        description: 'node A22',
      }]
    }]
  };

  it('初始化以及销毁', () => {
    const config = {
      width: 650,
      height: 500,
      data,
      collasable: true,
      otherGraphOptions: {
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node']
        }
      }
    };
    mount(<Indented {...config} />);
  });
});
