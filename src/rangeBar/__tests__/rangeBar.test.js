import React from 'react';
import { mount } from 'enzyme';
import RangeBar from '../';

// TODO: RangeBar-spec
describe('RangeBar  plot', () => {
  const data = [{"type":"分类一","values":[76,100]},{"type":"分类二","values":[56,108]},{"type":"分类三","values":[38,129]},{"type":"分类四","values":[58,155]},{"type":"分类五","values":[45,120]},{"type":"分类六","values":[23,99]},{"type":"分类七","values":[18,56]},{"type":"分类八","values":[18,34]}];

  it('初始化以及销毁', () => {
    const config = {"title":{"visible":true,"text":"为区间条形图配置label样式"},"description":{"visible":true,"text":"使用style配置项配置label整体样式，同时支持通过leftStyle和rightStyle分别配置label样式。"},data,"xField":"values","yField":"type","color":"l(0) 0:#3e5bdb 1:#dd3121","columnStyle":{"fillOpacity":0.8},"label":{"visible":true,"leftStyle":{"fill":"#3e5bdb"},"rightStyle":{"fill":"#dd3121"}}};
    const ref = React.createRef();
    mount(<RangeBar {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
