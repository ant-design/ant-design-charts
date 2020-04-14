import React from 'react';
import { mount } from 'enzyme';
import GroupedBar from '../';

// TODO: GroupedBar-spec
describe('GroupedBar  plot', () => {
  const data = [
    { label: 'Mon.', type: 'series1', value: 2800 },
    { label: 'Mon.', type: 'series2', value: 2260 },
    { label: 'Tues.', type: 'series1', value: 1800 },
    { label: 'Tues.', type: 'series2', value: 1300 },
    { label: 'Wed.', type: 'series1', value: 950 },
    { label: 'Wed.', type: 'series2', value: 900 },
    { label: 'Thur.', type: 'series1', value: 500 },
    { label: 'Thur.', type: 'series2', value: 390 },
    { label: 'Fri.', type: 'series1', value: 170 },
    { label: 'Fri.', type: 'series2', value: 100 },
  ];

  it('初始化以及销毁', () => {
    const config = {
      title: { visible: true, text: '分组条形图' },
      data,
      xField: 'value',
      yField: 'label',
      groupField: 'type',
      color: ['#1383ab', '#c52125'],
    };
    const ref = React.createRef();
    mount(<GroupedBar {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
