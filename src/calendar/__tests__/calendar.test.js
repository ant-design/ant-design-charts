import React from 'react';
import { mount } from 'enzyme';
import Calendar from '../';

const asyncFetch = () => {
  return new Promise((resolve, reject) => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/dcffd1f8-265b-4bda-aab1-4ef5c32708b1.json')
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => {
        reject(error);
        console.log('fetch data failed', error);
      });
  });
};

// TODO: Calendar-spec
describe('Calendar plot', () => {
  it('初始化以及销毁', async () => {
    const data = await asyncFetch();
    const config = {
      title: {
        visible: true,
        text: 'GitHub contribution',
      },
      description: {
        visible: true,
        text: '853 contributions in the last year.',
      },
      width: 650,
      height: 300,
      data,
      dateField: 'date',
      valueField: 'commits',
      dateRange: ['2017-05-01', '2017-10-31'],
      colors: '#BAE7FF-#1890FF-#0050B3',
      padding: 'auto',
      xAxis: {
        title: {
          text: '月份',
        },
      },
      yAxis: {
        title: null,
      },
      label: {
        visible: true,
      },
    };
    const ref = React.createRef();
    mount(<Calendar {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
