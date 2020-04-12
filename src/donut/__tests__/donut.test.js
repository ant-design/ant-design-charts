import React from 'react';
import { mount } from 'enzyme';
import Donut from '../';

// TODO: Donut-spec
describe('Donut  plot', () => {
  const data = [
    { type: '分类一', value: 27 },
    { type: '分类二', value: 25 },
    { type: '分类三', value: 18 },
    { type: '分类四', value: 15 },
    { type: '分类五', value: 10 },
    { type: '其它', value: 5 },
  ];

  it('初始化以及销毁', () => {
    const config = {
      forceFit: true,
      title: { visible: true, text: '环图' },
      description: { visible: true, text: '环图的外半径决定环图的大小，而内半径决定环图的厚度。' },
      radius: 0.8,
      padding: 'auto',
      data,
      angleField: 'value',
      colorField: 'type',
    };
    const ref = React.createRef();
    mount(<Donut {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
