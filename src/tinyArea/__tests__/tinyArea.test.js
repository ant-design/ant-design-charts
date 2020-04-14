import React from 'react';
import { mount } from 'enzyme';
import TinyArea from '../';

// TODO: TinyArea-spec
describe('TinyArea  plot', () => {
  const data = [
    { index: '1', value: 100 },
    { index: '2', value: 70 },
  ];

  it('初始化以及销毁', () => {
    const config = {
      width: 200,
      height: 50,
      data,
      xField: 'index',
      yField: 'value',
      guideLine: [
        {
          type: 'mean',
          text: { position: 'start', content: '平均值', style: { stroke: 'white', lineWidth: 2 } },
        },
      ],
    };
    const ref = React.createRef();
    mount(<TinyArea {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
