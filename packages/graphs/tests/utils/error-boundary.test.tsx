import React from 'react';
import { create } from 'react-test-renderer';
import { RadialTreeGraph } from '../../src';
import ErrorBoundary from '../../src/errorBoundary';

describe('Area render', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('error template with ReactNode', () => {
    const props = {
      loading: true,
      // An object of type loadingTemplate is only used to trigger a boundary error
      loadingTemplate: {
        triggleError: true,
      },
      errorTemplate: <span id="error">custom error</span>,
    };
    const chartProps = {
      data: {
        id: 'Modeling Methods',
        value: 'Methods',
        children: [],
      },
      autoFit: false,
      nodeCfg: {
        type: 'image',
        img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*mpPvTKdP7cIAAAAAAAAAAABkARQnAQ',
      },
      width: 200,
      height: 160,
    };
    // @ts-ignore
    const testRenderer = create(<RadialTreeGraph {...props} {...chartProps} />);
    const testInstance = testRenderer.root;
    expect((testInstance.findByType(ErrorBoundary).children[0] as any).children[0].indexOf('') !== -1).toBeTruthy();
  });

  it('error template with callback', () => {
    const props = {
      loading: true,
      // An object of type loadingTemplate is only used to trigger a boundary error
      loadingTemplate: {
        triggleError: true,
      },
      errorTemplate: () => <span id="error-callback">custom error with callback</span>,
    };
    const chartProps = {
      data: {
        id: 'Modeling Methods',
        value: 'Methods',
        children: [],
      },
      autoFit: false,
      nodeCfg: {
        type: 'image',
        img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*mpPvTKdP7cIAAAAAAAAAAABkARQnAQ',
      },
      width: 200,
      height: 160,
    };
    // @ts-ignore
    const testRenderer = create(<RadialTreeGraph {...props} {...chartProps} />);
    const testInstance = testRenderer.root;
    // @ts-ignore
    expect(testInstance.findByType(ErrorBoundary).children[0].children).toEqual(['custom error with callback']);
  });
});
