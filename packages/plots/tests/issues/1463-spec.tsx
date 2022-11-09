import React from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import Column from '../../src/components/column';

describe('Tooltip types', () => {
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

  it('Tooltip with domStyles', () => {
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
      width: 200,
      height: 160,
      tooltip: {
        domStyles: {},
      },
    };
    act(() => {
      render(<Column {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
  });
});
