import React, { useRef, createRef } from 'react';
import { create } from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Area from '../../src/components/area';

const refs = renderHook(() => useRef());

describe('Area render', () => {
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
  ];
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('chart render * chartRef with callback', () => {
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
      width: 200,
      height: 160,
    };
    act(() => {
      ReactDOM.render(<Area {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    const canvas = container.querySelector('canvas');
    expect(canvas.width).toBe(200);
    expect(canvas.height).toBe(160);
    expect(chartRef.chart.getData()).toEqual(data);
  });
});
