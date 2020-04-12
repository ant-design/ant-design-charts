import React from 'react';
import { mount } from 'enzyme';
import DensityHeatmap from '../';

const asyncFetch = () => {
  fetch('https://gw.alipayobjects.com/os/basement_prod/293bb835-d067-4e94-be3e-f271d3c818a7.json')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => {
      console.log('fetch data failed', error);
    });
};

// TODO: DensityHeatmap-spec
describe('DensityHeatmap plot', () => {
  it('初始化以及销毁', async () => {
    const data = await asyncFetch();
    const config = {
      data,
      xField: 'prob',
      yField: 'Average annual wage',
      colorField: 'numbEmployed',
      color: [
        '#295599',
        '#3e94c0',
        '#78c6d0',
        '#b4d9e4',
        '#fffef0',
        '#f9cdac',
        '#ec7d92',
        '#bc448c',
      ],
      radius: 15,
      intensity: 2,
      xAxis: { visible: true, min: -0.05, max: 1.05, nice: false },
      yAxis: { visible: true, min: -1000 },
    };
    const ref = React.createRef();
    mount(<DensityHeatmap {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
