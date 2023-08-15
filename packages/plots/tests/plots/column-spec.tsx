import { renderHook } from '@testing-library/react-hooks/server';
import { render } from 'rc-utils';
import React, { useRef } from 'react';
import { act } from 'react-dom/test-utils';
import { Column } from '../../src';

const ref: any = renderHook(() => useRef());

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
    let plot: any;
    const config = {
      data,
      xField: 'date',
      yField: 'scales',
      width: 600,
      height: 300,
      onReady: (plotInstance) => (plot = plotInstance),
    };
    act(() => {
      render(<Column {...config} ref={ref} />, container);
    });
    expect(plot).not.toBeUndefined();
  });
});
