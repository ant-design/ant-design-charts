import React from 'react';
import { mount } from 'enzyme';
import Progress from '../';

// TODO: Progress-spec
describe('Progress  plot', () => {
  const data = [];

  it('初始化以及销毁', () => {
    const config = {"width":200,"height":50,"percent":0.3,"color":["#F4664A","#E8EDF3"]};
    const ref = React.createRef();
    mount(<Progress {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
