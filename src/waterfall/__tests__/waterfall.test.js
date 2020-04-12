import React from 'react';
import { mount } from 'enzyme';
import Waterfall from '../';

// TODO: Waterfall-spec
describe('Waterfall  plot', () => {
  const data = [{"type":"日用品","money":120},{"type":"伙食费","money":900},{"type":"交通费","money":200},{"type":"水电费","money":300},{"type":"房租","money":1200},{"type":"商场消费","money":1000},{"type":"应酬红包","money":-2000}];

  it('初始化以及销毁', () => {
    const config = {data,"title":{"visible":true,"text":"每月收支情况（瀑布图）"},"forceFit":true,"padding":"auto","xField":"type","yField":"money","meta":{"type":{"alias":"类别"},"money":{"alias":"金额"}}};
    const ref = React.createRef();
    mount(<Waterfall {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
