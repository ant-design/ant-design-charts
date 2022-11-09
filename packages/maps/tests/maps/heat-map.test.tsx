// @ts-nocheck
import React from 'react';
import { act } from 'react-dom/test-utils';
import GeographicHeatmap from '../../src/components/geographic-heatmap';
import { render } from '../../src/util';

describe('Heat Map', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  const data = [
    {
      w: 21.5458,
      t: 22.2,
      s: '广东',
      l: 11,
      m: '电白',
      j: 110.9886,
      h: '59664',
    },
    {
      w: 22.9661,
      t: 21.9,
      s: '广东',
      l: 12,
      m: '东莞',
      j: 113.7389,
      h: '59289',
    },
  ];
  it('初始化以及销毁', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      chartRef: (ref) => {
        chartRef = ref;
      },
    };
    const config = {
      map: { type: 'amap' },
      source: {
        data,
        parser: {
          type: 'json',
          x: 'j',
          y: 'w',
        },
      },
      size: {
        field: 't',
        value: [0, 1],
      },
    };
    act(() => {
      render(<GeographicHeatmap {...props} {...config} />, container);
    });
    expect(chartRef).not.toBeUndefined();
  });
});
