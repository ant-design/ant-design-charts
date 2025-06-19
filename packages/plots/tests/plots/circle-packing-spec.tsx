import { render } from '@ant-design/charts-util';
import React from 'react';
import { CirclePacking } from '../../src';
import { TREE_DATA } from '../data';

function waitForAfterRender(container: HTMLElement, config: any): Promise<any> {
  return new Promise<any>((resolve) => {
    const onReady = ({ chart }: { chart: any }) => {
      chart.on('afterrender', () => resolve(chart));
    };
    render(<CirclePacking {...config} onReady={onReady} />, container);
  });
}

describe('CirclePacking data transform', () => {
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
      data: TREE_DATA,
      width: 600,
      height: 300,
      valueField: 'value',
      scale: {
        color: {
          domain: [0, 5],
          range: ['hsl(152,80%,80%)', 'hsl(228,30%,40%)'],
        },
      },
    };
    const plot = await waitForAfterRender(container!, config);

    expect(plot).not.toBeNull();
    expect(plot.getScale().y.options.domain[1]).not.toBeUndefined();
  });
});
