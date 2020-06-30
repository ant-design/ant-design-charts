import React from 'react';
import { mount } from 'enzyme';
import { RelationChart } from '../';

describe('Relation Graph', () => {
  it('初始化以及销毁', () => {
    const data = {
      id: 'root',
      children: [
        {
          id: 'node1',
          label: 'node1'
        }
      ]
    }
    
    mount(<RelationChart data={data} className='g6-graph' />);
    const container = document.querySelector('.g6-graph')
    expect(container).not.toBeNull();
    // const canvas = ref.current.getCanvas();
    // expect(canvas.destroyed).toBe(false);
    // ref.current.destroy();
    // expect(canvas.destroyed).toBe(true);
  });
});
