// @ts-nocheck
import React from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { FlowAnalysisGraph } from '../../src';
import { FlowLoopData, FlowLoopExpandData, FlowLoopDoubleData } from '../data';

describe('Flow loop edges', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it('Render Flow Expand', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      onReady: (ref) => {
        chartRef = ref;
      },
    };
    const chartProps = {
      data: FlowLoopExpandData,
      nodeCfg: {
        size: [140, 25],
      },
      markerCfg: (cfg: any) => {
        return {
          position: cfg.level === '-1' ? 'left' : 'right',
          show: cfg.level !== '-2',
          expandDirection: cfg.level === '-1' ? 'left' : 'right', // 确定向左展开还是向右展开，默认向右
        };
      },
      edgeCfg: {
        endArrow: {},
      },
      behaviors: ['drag-canvas'],
    };
    act(() => {
      render(<FlowAnalysisGraph {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    expect(chartRef.get('data').nodes.length).toBe(FlowLoopExpandData.nodes.length);
    expect(chartRef.get('data').edges.length).toBe(FlowLoopExpandData.edges.length);
  });
  it('Render loop', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      onReady: (ref) => {
        chartRef = ref;
      },
    };
    const chartProps = {
      data: FlowLoopData,
      nodeCfg: {
        size: [140, 25],
      },
      markerCfg: {
        position: 'right',
        show: true,
      },
      edgeCfg: {
        endArrow: {},
      },
      behaviors: [
        'drag-canvas',
        //  'zoom-canvas', 'drag-node'
      ],
    };
    act(() => {
      render(<FlowAnalysisGraph {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    expect(chartRef.get('data').nodes.length).toBe(FlowLoopData.nodes.length);
    expect(chartRef.get('data').edges.length).toBe(FlowLoopData.edges.length);
  });
  it('Render Double loop', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      onReady: (ref) => {
        chartRef = ref;
      },
    };
    const chartProps = {
      data: FlowLoopDoubleData,
      nodeCfg: {
        size: [140, 25],
      },
      markerCfg: {
        position: 'right',
        show: true,
      },
      edgeCfg: {
        endArrow: {},
      },
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    };
    act(() => {
      render(<FlowAnalysisGraph {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    expect(chartRef.get('data').nodes.length).toBe(FlowLoopDoubleData.nodes.length);
    expect(chartRef.get('data').edges.length).toBe(FlowLoopDoubleData.edges.length);
  });
});
