import React from 'react';
import { mount } from 'enzyme';
import Funnel from '../';

// TODO: Funnel-spec
describe('Funnel  plot', () => {
  const data = [
    { action: '浏览网站', pv: 50000 },
    { action: '放入购物车', pv: 35000 },
    { action: '生成订单', pv: 25000 },
    { action: '支付', pv: 15000 },
    { action: '成交', pv: 8500 },
  ];

  it('初始化以及销毁', () => {
    const config = {
      data,
      title: { visible: true, text: '漏斗图' },
      width: 650,
      height: 450,
      xField: 'action',
      yField: 'pv',
    };
    const ref = React.createRef();
    mount(<Funnel {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
