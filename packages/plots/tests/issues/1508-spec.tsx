import React from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import Line from '../../src/components/line';
import { LineData } from '../data';

describe('Tooltip ', () => {
  let container;
  const baseCfg = {
    data: LineData,
    xField: 'year',
    yField: 'value',
    label: {},
    witdth: 600,
    height: 400,
    autoFit: false,
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
  };
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('custom tooltip with jsx', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      chartRef: (ref) => {
        chartRef = ref;
      },
    };
    const config = {
      ...baseCfg,
      tooltip: {
        showMarkers: false,
        customContent: (arg, items) => {
          return (
            <div className="t" style={{ width: '60px', height: '60px', background: '#000' }}>
              {arg}
              {items.map((item) => {
                return <p>{item.value}</p>;
              })}
            </div>
          );
        },
      },
    };
    act(() => {
      render(<Line {...props} {...config} />, container);
    });

    expect(chartRef).not.toBeUndefined();
    chartRef.chart.showTooltip({ x: 300, y: 200 });
    expect(document.querySelector('g2-tooltip')).not.toBeUndefined();
  });
  it('custom tooltip with string', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      chartRef: (ref) => {
        chartRef = ref;
      },
    };
    const config = {
      ...baseCfg,
      tooltip: {
        showMarkers: false,
        customContent: (arg, items) => {
          return 'hello';
        },
      },
    };
    act(() => {
      render(<Line {...props} {...config} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    chartRef.chart.showTooltip({ x: 300, y: 200 });
    expect(document.querySelector('g2-tooltip')).not.toBeUndefined();
  });
});
