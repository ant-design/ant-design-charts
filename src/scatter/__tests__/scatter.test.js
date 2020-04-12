import React from 'react';
import { mount } from 'enzyme';
import Scatter from '../';

const asyncFetch = () => {
  fetch('https://gw.alipayobjects.com/os/basement_prod/7a78a36d-c97c-459d-9090-9e664cd17167.json')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => {
      console.log('fetch data failed', error);
    });
};

// TODO: Scatter-spec
describe('Scatter plot', () => {
  it('初始化以及销毁', async () => {
    const data = await asyncFetch();
    const config = {
      data,
      xField: 'Revenue (Millions)',
      yField: 'Rating',
      colorField: 'Genre',
      color: [
        '#d62728',
        '#2ca02c',
        '#000000',
        '#9467bd',
        '#ffd500',
        '#1f77b4',
        '#00518a',
        '#ffbc69',
        '#9bd646',
      ],
      pointStyle: { fillOpacity: 1 },
      xAxis: { visible: true, min: -5 },
    };
    const ref = React.createRef();
    mount(<Scatter {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
