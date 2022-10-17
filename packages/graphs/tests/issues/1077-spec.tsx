import React from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { FlowAnalysisGraph } from '../../src';

describe('Custom layout', () => {
  let container;
  const data = {
    nodes: [
      {
        id: '1',
        x: 20,
        y: 100,
        value: {
          title: 'A',
          items: [
            {
              text: 'text',
            },
          ],
        },
      },
      {
        id: '2',
        x: 20,
        y: 200,
        value: {
          title: 'B',
          items: [
            {
              text: 'text ',
            },
          ],
        },
      },
    ],
    edges: [
      {
        source: '1',
        target: '2',
      },
    ],
  };
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('Layout with custom position', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      onReady: (ref) => {
        chartRef = ref;
      },
    };
    const chartProps = {
      data,
      customLayout: true,
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    };
    act(() => {
      render(<FlowAnalysisGraph {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    const node = chartRef.findById('2');
    const { x, y } = node.getModel();
    expect(x).toBe(20);
    expect(y).toBe(200);
  });
});
