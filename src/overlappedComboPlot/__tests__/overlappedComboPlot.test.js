import React from 'react';
import { mount } from 'enzyme';
import OverlappedComboPlot from '../';

const asyncFetch = () => {
  return new Promise((resolve, reject) => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/9579a208-5420-4c43-bdd5-d7d5fdc005c9.json')
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => {
        reject(error);
        console.log('fetch data failed', error);
      });
  });
};

// TODO: OverlappedComboPlot-spec
describe('OverlappedComboPlot plot', () => {
  it('初始化以及销毁', async () => {
    const data = await asyncFetch();
    const config = {
      legend: { visible: true },
      xAxis: { visible: true, tickCount: 5 },
      yAxis: { visible: true, colorMapping: false },
      layers: [
        {
          type: 'line',
          name: 'wind',
          data,
          xField: 'date',
          yField: 'wind',
          xAxis: { type: 'cat', tickCount: 5 },
          color: '#7fb170',
          smooth: true,
        },
        {
          type: 'line',
          name: 'temprature',
          data: [],
          xField: 'date',
          yField: 'temp_min',
          color: '#e04e47',
          smooth: true,
        },
      ],
    };
    const ref = React.createRef();
    mount(<OverlappedComboPlot {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
