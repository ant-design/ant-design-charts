import React from 'react';
import { render } from 'rc-utils';
import { act } from 'react-dom/test-utils';
import { Column } from '../../src';

describe('Proxy config', () => {
  let container;
  const data = [
    {
      date: '2010-01',
      scales: 1998,
    },
    {
      date: '2010-02',
      scales: 1850,
    },
    {
      date: '2010-03',
      scales: 1250,
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

  it('chart render', async () => {
    let stateProxy: any;
    let plot: any;
    const proxy = (state) => (stateProxy = state);
    const config = {
      data,
      xField: 'date',
      yField: 'scales',
      width: 600,
      height: 300,
      onReady: (plotInstance) => (plot = plotInstance),
    };
    act(() => {
      render(<Column config={config} proxy={proxy} />, container);
    });
    expect(stateProxy['xField']).toBe('date');
    stateProxy.data = [...stateProxy.data, { date: '2010-04', scales: 1250 }];
    await new Promise((r) => setTimeout(r, 2000));
    expect(plot.chart.getData().length).toBe(4);
  });
});
