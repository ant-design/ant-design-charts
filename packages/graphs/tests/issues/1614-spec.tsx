import React from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { DecompositionTreeGraph } from '../../src';
import { TreeData } from '../data';

describe('React 18', () => {
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

    const props = {
      className: 'container',
      onReady: (ref) => {
        chartRef = ref;
      },
    };
    const spyWarn = jest.spyOn(console, 'warn');

    const config = {
      data: TreeData,
      autoFit: false,
      width: 300,
      height: 300,
      tooltipCfg: {
        customContent: () => {
          return <div>tooltip</div>;
        },
      },
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    } as any;
    act(() => {
      render(<DecompositionTreeGraph {...props} {...config} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    expect(spyWarn).toBeCalledTimes(0);
  });
});
