import React from 'react';
import { mount } from 'enzyme';
import RingProgress from '../';

// TODO: RingProgress-spec
describe('RingProgress  plot', () => {
  const data = [];

  it('初始化以及销毁', () => {
    const config = { width: 100, height: 100, percent: 0.8, color: ['#30BF78', '#E8EDF3'] };
    const ref = React.createRef();
    mount(<RingProgress {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
