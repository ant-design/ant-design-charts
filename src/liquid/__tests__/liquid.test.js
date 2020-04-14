import React from 'react';
import { mount } from 'enzyme';
import Liquid from '../';

// TODO: Liquid-spec
describe('Liquid  plot', () => {
  const data = [];

  it('初始化以及销毁', () => {
    const config = { title: { visible: true, text: '水波图' }, min: 0, max: 10000, value: 5639 };
    const ref = React.createRef();
    mount(<Liquid {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
