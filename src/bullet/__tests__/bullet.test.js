import React from 'react';
import { mount } from 'enzyme';
import Bullet from '../';

// TODO: Bullet-spec
describe('Bullet  plot', () => {
  const data = [{ title: '满意度', measures: [83], targets: [90] }];

  it('初始化以及销毁', () => {
    const config = {
      data,
      rangeMax: 100,
      title: { visible: true, text: '基础子弹图' },
      description: {
        visible: true,
        text:
          '设定子弹图的目标值(goal)和当前进度(value)，即可展示子弹图进度情况；若没有设置最大值(max)，则最大值等于目标值',
      },
    };
    const ref = React.createRef();
    mount(<Bullet {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
