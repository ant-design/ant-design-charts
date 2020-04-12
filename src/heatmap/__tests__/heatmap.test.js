import React from 'react';
import { mount } from 'enzyme';
import Heatmap from '../';

const asyncFetch = () => {
  fetch('https://gw.alipayobjects.com/os/basement_prod/a719cd4e-bd40-4878-a4b4-df8a6b531dfe.json')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => {
      console.log('fetch data failed', error);
    });
};

// TODO: Heatmap-spec
describe('Heatmap plot', () => {
  it('初始化以及销毁', async () => {
    const data = await asyncFetch();
    const config = {
      forceFit: false,
      width: 650,
      height: 500,
      data,
      xField: 'Month of Year',
      yField: 'District',
      colorField: 'AQHI',
      shapeType: 'rect',
      color: ['#174c83', '#7eb6d4', '#efefeb', '#efa759', '#9b4d16'],
      meta: { 'Month of Year': { type: 'cat' } },
    };
    const ref = React.createRef();
    mount(<Heatmap {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
