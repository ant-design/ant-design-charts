import React from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { DecompositionTreeGraph, FlowAnalysisGraph } from '../../src';
import { TreeData } from '../data';

describe('Set Ellipsis', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it.skip('render title', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      onReady: (graph) => {
        chartRef = graph;
      },
    };
    const config = {
      data: TreeData,
      height: 600,
      nodeCfg: {
        title: {
          style: {
            fontSize: 12,
          },
        },
      },
      tooltipCfg: {
        customContent: () => {
          return <div>tooltip</div>;
        },
      },
      markerCfg: (cfg) => {
        const { children } = cfg;
        return {
          show: true,
          collapsed: !children?.length,
        };
      },

      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    } as any;
    act(() => {
      render(<DecompositionTreeGraph {...props} {...config} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    expect(
      chartRef
        .findById('A1')
        .get('group')
        .getChildren()
        .filter((group) => group.get('name') === 'title')[0]
        .attr('text'),
    ).toBe('华南华北verylong...');
    expect(
      chartRef
        .findById('A2')
        .get('group')
        .getChildren()
        .filter((group) => group.get('name') === 'title')[0]
        .attr('text'),
    ).toBe('华北华南真的很大...');
  });
});
