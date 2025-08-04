import { render } from '@ant-design/charts-util';
import React from 'react';
import { Line } from '../../src';

function waitForAfterRender(container: HTMLElement, config: any): Promise<any> {
  return new Promise<any>((resolve) => {
    const onReady = ({ chart }: { chart: any }) => {
      chart.on('afterrender', () => resolve(chart));
    };
    render(<Line {...config} onReady={onReady} />, container);
  });
}

describe('Line scale transform', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('render', async () => {
    const config = {
      data: [
        { year: '1991', value: 0 },
        { year: '1992', value: 0 },
        { year: '1993', value: 0 },
      ],
      width: 600,
      height: 300,
      xField: 'year',
      yField: 'value',
    };
    const plot = await waitForAfterRender(container!, config);
    expect(plot).not.toBeNull();
    expect(plot.getScale().y.options.domainMax).toBe(1);
  });
});
