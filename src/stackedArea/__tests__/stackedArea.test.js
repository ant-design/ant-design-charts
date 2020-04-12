import React from 'react';
import { mount } from 'enzyme';
import StackedArea from '../';

const asyncFetch = () => {
  fetch('https://gw.alipayobjects.com/os/basement_prod/80f6324e-bf7c-4683-bcca-ab66e2520491.json')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => {
      console.log('fetch data failed', error);
    });
};

// TODO: StackedArea-spec
describe('StackedArea plot', () => {
  it('初始化以及销毁', async () => {
    const data = await asyncFetch();
    const config = {
      title: { visible: true, text: 'The causes of CO2 emissions' },
      padding: 'auto',
      data,
      xField: 'year',
      yField: 'value',
      seriesField: 'category',
      xAxis: { type: 'time' },
      yAxis: {},
      responsive: true,
    };
    const ref = React.createRef();
    mount(<StackedArea {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
