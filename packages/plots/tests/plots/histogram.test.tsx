// @ts-nocheck
import React, { useRef, createRef } from 'react';
import { create } from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks/server';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import Histogram from '../../src/components/histogram';
import ChartLoading from '../../src/utils/createLoading';
import ErrorBoundary from '../../src/errorBoundary';

const refs = renderHook(() => useRef());

describe('Histogram render', () => {
  let container;
  const data = [{ value: 2 }, { value: 2 }, { value: 5 }];
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
    const testRenderer = create(<Histogram {...props} />);
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
    const testRenderer = create(<Histogram {...props} />);
    const testInstance = testRenderer.root;
    const renderTree = testRenderer.toTree();
    expect(renderTree.rendered.nodeType).toBe('host');
    expect(renderTree.rendered.type).toBe('div');
    expect(renderTree.rendered.props.className).toBeUndefined();
    expect(testInstance.findAllByType(ChartLoading).length).toBe(0);
    expect(renderTree.rendered.props.style).toEqual({
      height: 'inherit',
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
      binField: 'value',
      autoFit: false,
      width: '200',
      height: '160',
    };
    const testRenderer = create(<Histogram {...props} {...chartProps} />);
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
      data,
      binField: 'value',
      pixelRatio: 1,
      autoFit: false,
      width: 200,
      height: 160,
    };
    act(() => {
      render(<Histogram {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    const canvas = container.querySelector('canvas');
    expect(canvas.width).toBe(200);
    expect(canvas.height).toBe(160);
    expect(chartRef.chart.getData()).toEqual([
      { range: [1.5, 3], count: 2 },
      { range: [4.5, 6], count: 1 },
    ]);
  });

  it('chartRef with createRef', () => {
    const chartRef = createRef();
    const props = {
      className: 'container',
      chartRef,
    };
    const chartProps = {
      data,
      binField: 'value',
      pixelRatio: 1,
      autoFit: false,
      width: 200,
      height: 160,
    };
    act(() => {
      render(<Histogram {...props} {...chartProps} />, container);
    });
    expect(chartRef.current.chart.getData()).toEqual([
      { range: [1.5, 3], count: 2 },
      { range: [4.5, 6], count: 1 },
    ]);
  });

  it('chartRef with useRef', () => {
    const props = {
      className: 'container',
    };
    const chartProps = {
      data,
      binField: 'value',
      pixelRatio: 1,
      autoFit: false,
      width: 200,
      height: 160,
    };
    act(() => {
      render(<Histogram {...props} {...chartProps} ref={refs} />, container);
    });
    expect(refs.current.getChart().chart.getData()).toEqual([
      { range: [1.5, 3], count: 2 },
      { range: [4.5, 6], count: 1 },
    ]);
  });
});
