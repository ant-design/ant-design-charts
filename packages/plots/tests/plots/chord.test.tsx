// @ts-nocheck
import React, { useRef, createRef } from 'react';
import { create } from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks/server';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Chord from '../../src/components/chord';
import ChartLoading from '../../src/util/createLoading';
import ErrorBoundary from '../../src/errorBoundary';

const refs = renderHook(() => useRef());

describe('Chord render', () => {
  let container;
  const data = [
    { source: '北京', target: '天津', value: 30 },
    { source: '北京', target: '上海', value: 80 },
    { source: '北京', target: '河北', value: 46 },
    { source: '北京', target: '辽宁', value: 49 },
    { source: '北京', target: '黑龙江', value: 69 },
    { source: '北京', target: '吉林', value: 19 },
    { source: '天津', target: '河北', value: 62 },
    { source: '天津', target: '辽宁', value: 82 },
    { source: '天津', target: '上海', value: 16 },
    { source: '上海', target: '黑龙江', value: 16 },
    { source: '河北', target: '黑龙江', value: 76 },
    { source: '河北', target: '内蒙古', value: 24 },
    { source: '内蒙古', target: '北京', value: 32 },
  ];
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
    const testRenderer = create(<Chord {...props} />);
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
    const testRenderer = create(<Chord {...props} />);
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
      sourceField: 'source',
      targetField: 'target',
      weightField: 'value',
      autoFit: false,
      width: '200',
      height: '160',
    };
    const testRenderer = create(<Chord {...props} {...chartProps} />);
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
      sourceField: 'source',
      targetField: 'target',
      weightField: 'value',
      pixelRatio: 1,
      autoFit: false,
      width: 200,
      height: 160,
    };
    act(() => {
      ReactDOM.render(<Chord {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    const canvas = container.querySelector('canvas');
    expect(canvas.width).toBe(200);
    expect(canvas.height).toBe(160);
    expect(chartRef.chart.views[0].getData().length).toBe(data.length);
  });

  it('chartRef with createRef', () => {
    const chartRef = createRef();
    const props = {
      className: 'container',
      chartRef,
    };
    const chartProps = {
      data,
      sourceField: 'source',
      targetField: 'target',
      weightField: 'value',
      pixelRatio: 1,
      autoFit: false,
      width: 200,
      height: 160,
    };
    act(() => {
      ReactDOM.render(<Chord {...props} {...chartProps} />, container);
    });
    expect(chartRef.current.chart.views[0].getData().length).toBe(data.length);
  });

  it('chartRef with useRef', () => {
    const props = {
      className: 'container',
    };
    const chartProps = {
      data,
      sourceField: 'source',
      targetField: 'target',
      weightField: 'value',
      pixelRatio: 1,
      autoFit: false,
      width: 200,
      height: 160,
    };
    act(() => {
      ReactDOM.render(<Chord {...props} {...chartProps} ref={refs} />, container);
    });
    expect(refs.current.getChart().chart.views[0].getData().length).toBe(data.length);
  });
});
