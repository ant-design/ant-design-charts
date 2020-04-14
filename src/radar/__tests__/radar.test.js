import React from 'react';
import { mount } from 'enzyme';
import Radar from '../';

// TODO: Radar-spec
describe('Radar  plot', () => {
  const data = [
    { item: 'Design', user: 'a', score: 70 },
    { item: 'Design', user: 'b', score: 30 },
    { item: 'Development', user: 'a', score: 60 },
    { item: 'Development', user: 'b', score: 70 },
    { item: 'Marketing', user: 'a', score: 60 },
    { item: 'Marketing', user: 'b', score: 50 },
    { item: 'Users', user: 'a', score: 40 },
    { item: 'Users', user: 'b', score: 50 },
    { item: 'Test', user: 'a', score: 60 },
    { item: 'Test', user: 'b', score: 70 },
    { item: 'Language', user: 'a', score: 70 },
    { item: 'Language', user: 'b', score: 50 },
    { item: 'nology', user: 'a', score: 50 },
    { item: 'nology', user: 'b', score: 40 },
    { item: 'Support', user: 'a', score: 30 },
    { item: 'Support', user: 'b', score: 40 },
    { item: 'Sales', user: 'a', score: 60 },
    { item: 'Sales', user: 'b', score: 40 },
    { item: 'UX', user: 'a', score: 50 },
    { item: 'UX', user: 'b', score: 60 },
  ];

  it('初始化以及销毁', () => {
    const config = {
      title: { visible: true, text: '基础雷达图' },
      data,
      angleField: 'item',
      radiusField: 'score',
      seriesField: 'user',
      line: { visible: true },
    };
    const ref = React.createRef();
    mount(<Radar {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
