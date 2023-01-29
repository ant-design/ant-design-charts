// @ts-nocheck
import React, { useRef, createRef } from 'react';
import { create } from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks/server';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import Gauge from '../../src/components/gauge';
import ChartLoading from '../../src/utils/createLoading';
import ErrorBoundary from '../../src/errorBoundary';

const refs = renderHook(() => useRef());

describe('Gauge render', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('classname * loading * style', () => {
    const props = {
      style: {
        height: '80%',
      },
      className: 'container',
      loading: true,
    };
    const testRenderer = create(<Gauge {...props} />);
    const testInstance = testRenderer.root;
    const renderTree = testRenderer.toTree();
    expect(renderTree.rendered[0].nodeType).toBe('component');
    expect(renderTree.rendered[1].props.className).toBe('container');
    expect(renderTree.rendered[1].props.style).toEqual({
      height: '80%',
    });
    expect(renderTree.rendered[1].nodeType).toBe('host');
    expect(renderTree.rendered[1].type).toBe('div');
    expect(testInstance.findAllByType(ChartLoading).length).toBe(1);
  });

  it('classname * loading * style with default', () => {
    const props = {};
    const testRenderer = create(<Gauge {...props} />);
    const testInstance = testRenderer.root;
    const renderTree = testRenderer.toTree();
    expect(renderTree.rendered.nodeType).toBe('host');
    expect(renderTree.rendered.type).toBe('div');
    expect(renderTree.rendered.props.className).toBeUndefined();
    expect(testInstance.findAllByType(ChartLoading).length).toBe(0);
    expect(renderTree.rendered.props.style).toEqual({
      height: 'inherit',
      overflow: 'hidden',
    });
  });

  it('error template', () => {
    const props = {
      loading: true,
      // An object of type loadingTemplate is only used to trigger a boundary error
      loadingTemplate: {
        triggleError: true,
      },
      errorTemplate: () => <span id="error">custom error</span>,
    };
    const chartProps = {
      data: [],
      xField: 'date',
      yField: 'scales',
      autoFit: false,
      width: '200',
      height: '160',
    };
    const testRenderer = create(<Gauge {...props} {...chartProps} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(ErrorBoundary).children[0].children).toEqual(['custom error']);
  });

  it('chart render * chartRef with callback', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      chartRef: (ref) => {
        chartRef = ref;
      },
    };
    const chartProps = {
      percent: 0.75,
      pixelRatio: 1,
      autoFit: false,
      width: 200,
      height: 160,
    };
    act(() => {
      render(<Gauge {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    const canvas = container.querySelector('canvas');
    expect(canvas.width).toBe(200);
    expect(canvas.height).toBe(160);
    expect(chartRef.chart.views[0].getData()).toEqual([{ percent: 0.75 }]);
  });

  it('chartRef with createRef', () => {
    const chartRef = createRef();
    const props = {
      className: 'container',
      chartRef,
    };
    const chartProps = {
      percent: 0.75,
      pixelRatio: 1,
      autoFit: false,
      width: 200,
      height: 160,
    };
    act(() => {
      render(<Gauge {...props} {...chartProps} />, container);
    });
    expect(chartRef.current.chart.views[0].getData()).toEqual([{ percent: 0.75 }]);
  });

  it('chartRef with useRef', () => {
    const props = {
      className: 'container',
    };
    const chartProps = {
      percent: 0.75,
      pixelRatio: 1,
      autoFit: false,
      width: 200,
      height: 160,
    };
    act(() => {
      render(<Gauge {...props} {...chartProps} ref={refs} />, container);
    });
    expect(refs.current.getChart().chart.views[0].getData()).toEqual([{ percent: 0.75 }]);
  });
});
