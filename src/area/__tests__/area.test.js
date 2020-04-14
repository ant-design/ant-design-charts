import React from 'react';
import { mount } from 'enzyme';
import Area from '../';

const asyncFetch = () => {
  return new Promise((resolve, reject) => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/72ea027c-a7eb-404e-9c23-3761b016953c.json')
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => {
        reject(error);
        console.log('fetch data failed', error);
      });
  });
};

// TODO: Area-spec
describe('Area plot', () => {
  it('初始化以及销毁', async () => {
    const data = await asyncFetch();
    const config = {
      title: { visible: true, text: '基础面积图' },
      data,
      xField: 'Date',
      yField: 'scales',
      xAxis: { type: 'dateTime', tickCount: 5 },
    };
    const ref = React.createRef();
    mount(<Area {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
