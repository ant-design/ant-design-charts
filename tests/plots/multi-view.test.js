import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import MultiView from '../../src/multiView';
import ChartLoading from '../../src/util/createLoading';
import { ErrorBoundary } from '../../src/base';

describe('MultiView render', () => {
  let container;
  const data = {
    area: [
      {
        time: 1246406400000,
        temperature: [14.3, 27.7],
      },
      {
        time: 1246492800000,
        temperature: [14.5, 27.8],
      },
    ],
    line: [
      {
        time: 1246406400000,
        temperature: 21.5,
      },
      {
        time: 1246492800000,
        temperature: 22.1,
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

  it('classname * loading * style', () => {
    const props = {
      style: {
        height: '80%',
      },
      className: 'container',
      loading: true,
    };
    const testRenderer = create(<MultiView {...props} />);
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
    const testRenderer = create(<MultiView {...props} />);
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
      autoFit: false,
      width: '200',
      height: '160',
      views: [
        {
          data: data.area,
          geometries: [
            {
              type: 'area',
              xField: 'time',
              yField: 'temperature',
              mapping: {},
            },
          ],
        },
        {
          data: data.line,
          geometries: [
            {
              type: 'line',
              xField: 'time',
              yField: 'temperature',
              mapping: {},
            },
          ],
        },
      ],
    };
    const testRenderer = create(<MultiView {...props} {...chartProps} />);
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
      width: 200,
      height: 160,
      views: [
        {
          data: data.area,
          geometries: [
            {
              type: 'area',
              xField: 'time',
              yField: 'temperature',
              mapping: {},
            },
          ],
        },
        {
          data: data.line,
          geometries: [
            {
              type: 'line',
              xField: 'time',
              yField: 'temperature',
              mapping: {},
            },
          ],
        },
      ],
    };
    act(() => {
      ReactDOM.render(<MultiView {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    const canvas = container.querySelector('canvas');
    expect(canvas.width).toBe(200);
    expect(canvas.height).toBe(160);
    expect(chartRef.chart.views[0].getData()).toEqual(data.area);
    expect(chartRef.chart.views[1].getData()).toEqual(data.line);
  });
});
