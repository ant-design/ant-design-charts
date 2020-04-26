import React from 'react';
import { mount } from 'enzyme';
import RangeColumn from '../';

// TODO: RangeColumn-spec
describe('RangeColumn  plot', () => {
  const data = [
    { type: '分类一', values: [76, 100] },
    { type: '分类二', values: [56, 108] },
    { type: '分类三', values: [38, 129] },
    { type: '分类四', values: [58, 155] },
    { type: '分类五', values: [45, 120] },
    { type: '分类六', values: [23, 99] },
    { type: '分类七', values: [18, 56] },
    { type: '分类八', values: [18, 34] },
  ];

  it('初始化以及销毁', () => {
    const config = {
      title: { visible: true, text: '为区间柱状图配置label样式' },
      description: {
        visible: true,
        text:
          '使用style配置项配置label整体样式，同时支持通过topStyle和bottomStyle分别配置label样式。',
      },
      data,
      xField: 'type',
      yField: 'values',
      color: 'l(90) 0:#3e5bdb 1:#b4d9e4',
      columnStyle: { fillOpacity: 0.8 },
      label: { visible: true, topStyle: { fill: '#3e5bdb' }, bottomStyle: { fill: '#b4d9e4' } },
    };
    const ref = React.createRef();
    mount(<RangeColumn {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
