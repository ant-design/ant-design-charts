import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Column from '../../src/components/column';

describe('loading theme', () => {
  let container;
  const data = [
    {
      date: '2022-01',
      scales: 1680,
    },
    {
      date: '2022-02',
      scales: 1850,
    },
  ];
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('loading with dark', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      chartRef: (ref) => {
        chartRef = ref;
      },
    };
    const chartProps = {
      data,
      xField: 'date',
      yField: 'scales',
      autoFit: false,
      theme: 'dark',
      width: 200,
      height: 160,
      loading: true,
      pixelRatio: 1,
    };
    act(() => {
      ReactDOM.render(<Column {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    const canvas = container.querySelector('canvas');
    expect(canvas.width).toBe(200);
    expect(canvas.height).toBe(160);
    expect(chartRef.chart.getData()).toEqual(data);
    const loadingContainer = container.querySelector('.charts-loading-container');
    expect(getComputedStyle(loadingContainer, null).getPropertyValue('background-color')).toBe('rgb(20, 20, 20)');
  });
});
