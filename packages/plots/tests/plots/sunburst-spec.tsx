import { render } from '@ant-design/charts-util';
import React from 'react';
import { Sunburst } from '../../src';
import { TREE_DATA } from '../data';

// 用 Promise 封装等待 afterrender
function waitForAfterRender(container: HTMLElement, config: any): Promise<any> {
  return new Promise<any>((resolve) => {
    const onReady = ({ chart }: { chart: any }) => {
      chart.on('afterrender', () => resolve(chart));
    };
    render(<Sunburst {...config} onReady={onReady} />, container);
  });
}

describe('Sunburst data transform', () => {
  let container: HTMLDivElement | null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container) {
      document.body.removeChild(container);
      container = null;
    }
  });

  it('render', async () => {
    const config = {
      data: TREE_DATA,
      width: 600,
      height: 300,
    };

    const plot = await waitForAfterRender(container!, config);

    expect(plot).not.toBeNull();
    expect(plot.getScale().y.options.domain[1]).not.toBeUndefined();
  });

  it('render with data.value', async () => {
    const config = {
      data: { value: TREE_DATA },
      width: 600,
      height: 300,
    };

    const plot = await waitForAfterRender(container!, config);

    expect(plot).not.toBeNull();
    expect(plot.getScale().y.options.domain[1]).not.toBeUndefined();
  });
});
