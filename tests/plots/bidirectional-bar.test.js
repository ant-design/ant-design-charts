import React, { useRef, createRef } from 'react';
import { create } from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import BidirectionalBar from '../../src/bidirectionalBar';
import ChartLoading from '../../src/util/createLoading';
import { ErrorBoundary } from '../../src/base';

const refs = renderHook(() => useRef());

describe('BidirectionalBar render', () => {
  let container;
  const data = [
    {
      country: '乌拉圭',
      '2016年耕地总面积': 13.4,
      '2016年转基因种植面积': 12.3,
    },
    {
      country: '巴拉圭',
      '2016年耕地总面积': 14.4,
      '2016年转基因种植面积': 6.3,
    },
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
    const testRenderer = create(<BidirectionalBar {...props} />);
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
    const testRenderer = create(<BidirectionalBar {...props} />);
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
      xField: 'country',
      yField: ['2016年耕地总面积', '2016年转基因种植面积'],
      autoFit: false,
      width: '200',
      height: '160',
    };
    const testRenderer = create(<BidirectionalBar {...props} {...chartProps} />);
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
      xField: 'country',
      yField: ['2016年耕地总面积', '2016年转基因种植面积'],
      autoFit: false,
      width: 200,
      height: 160,
    };
    act(() => {
      ReactDOM.render(<BidirectionalBar {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    const canvas = container.querySelector('canvas');
    expect(canvas.width).toBe(200);
    expect(canvas.height).toBe(160);
    expect(chartRef.chart.views[0].getData().length).toEqual(data.length);
  });

  it('chartRef with createRef', () => {
    const chartRef = createRef();
    const props = {
      className: 'container',
      chartRef,
    };
    const chartProps = {
      data,
      xField: 'country',
      yField: ['2016年耕地总面积', '2016年转基因种植面积'],
      autoFit: false,
      width: 200,
      height: 160,
    };
    act(() => {
      ReactDOM.render(<BidirectionalBar {...props} {...chartProps} />, container);
    });
    expect(chartRef.current.chart.views[0].getData().length).toEqual(data.length);
  });

  it('chartRef with useRef', () => {
    const props = {
      className: 'container',
    };
    const chartProps = {
      data,
      xField: 'country',
      yField: ['2016年耕地总面积', '2016年转基因种植面积'],
      autoFit: false,
      width: 200,
      height: 160,
    };
    act(() => {
      ReactDOM.render(<BidirectionalBar {...props} {...chartProps} ref={refs} />, container);
    });
    expect(refs.current.getChart().chart.views[0].getData().length).toEqual(data.length);
  });
});
