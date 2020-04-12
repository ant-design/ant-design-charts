import React from 'react';
import { mount } from 'enzyme';
import FanGauge from '../';

// TODO: FanGauge-spec
describe('FanGauge  plot', () => {
  const data = [];

  it('初始化以及销毁', () => {
    const config = {
      title: { visible: true, text: '扇形仪表盘' },
      width: 400,
      height: 400,
      value: 34,
      min: 0,
      max: 100,
      range: [0, 70],
      color: ['l(0) 0:#b0d0ff 1:#5f92f9'],
    };
    const ref = React.createRef();
    mount(<FanGauge {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
