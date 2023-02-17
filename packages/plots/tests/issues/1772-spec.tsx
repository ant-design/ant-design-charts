import React from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { PieData } from '../data';
import Pie from '../../src/components/pie';

// https://codesandbox.io/s/funny-kowalevski-z2kymb?file=/index.js
describe('Custom legend', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('render', () => {
    let chartRef = undefined;
    const currentLegends = PieData.map((item) => item.type);
    const props = {
      data: PieData,
      angleField: 'value',
      colorField: 'type',
      radius: 0.8,
      label: {
        type: 'outer',
      },
      interactions: [
        {
          type: 'element-active',
        },
      ],
      width: 200,
      height: 160,
      className: 'container',
      legend: false,
      chartRef: (ref) => {
        chartRef = ref;
      },
    } as any;
    const handleOnClickLegend = (type) => {
      if (!chartRef) return;
      const exist = currentLegends.findIndex((t) => t === type);
      if (exist === -1) {
        currentLegends.push(type);
      } else {
        currentLegends.splice(exist, 1);
      }
      chartRef.chart.filter('type', (_, item) => currentLegends.includes(item.type));
      chartRef.chart.render(true);
    };
    act(() => {
      render(
        <div>
          <div className="legend-box">
            {PieData.map((item) => {
              return (
                <div
                  className="legend"
                  key={item.type}
                  onClick={() => {
                    handleOnClickLegend(item.type);
                  }}
                >
                  {item.type}
                </div>
              );
            })}
          </div>
          <div className="chart">
            <Pie {...props} />
          </div>
        </div>,
        container,
      );
    });
    expect(chartRef).not.toBeUndefined();
    const legendEle = document.getElementsByClassName('legend')[0] as HTMLDivElement;
    legendEle.click();
    expect(chartRef.chart.getData().length).toBe(5);
  });
});
