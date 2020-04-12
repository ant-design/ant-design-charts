import React from 'react';
import { mount } from 'enzyme';
import Bubble from '../';

const asyncFetch = () => {
  fetch('https://gw.alipayobjects.com/os/basement_prod/86530df2-6d61-4485-b645-0f2c5d59c07e.json')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => {
      console.log('fetch data failed', error);
    });
};

// TODO: Bubble-spec
describe('Bubble plot', () => {
  it('初始化以及销毁', async () => {
    const data = await asyncFetch();
    const config = {
      data,
      title: { visible: true, text: '基础气泡图' },
      xField: 'change in female rate',
      yField: 'change in male rate',
      sizeField: 'pop',
      pointSize: [4, 30],
      colorField: 'continent',
      color: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
      pointStyle: { stroke: '#777777', lineWidth: 1, opacity: 0.8 },
      xAxis: { visble: true, max: 5, min: -25 },
    };
    const ref = React.createRef();
    mount(<Bubble {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
