import React from 'react';
import { mount } from 'enzyme';
import MeterGauge from '../';

// TODO: MeterGauge-spec
describe('MeterGauge  plot', () => {
  const data = [];

  it('初始化以及销毁', () => {
    const config = {
      title: { visible: true, text: '刻度仪表盘' },
      width: 400,
      height: 400,
      value: 40,
      min: 0,
      max: 100,
      range: [0, 25, 50, 75, 100],
      statistic: { visible: true, text: '良', color: '#faad14' },
      color: ['#39B8FF', '#52619B', '#43E089', '#C0EDF3'],
    };
    const ref = React.createRef();
    mount(<MeterGauge {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
