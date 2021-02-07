import React from 'react';
import { create } from 'react-test-renderer';
import Area from '../../src/area';
import { ErrorBoundary } from '../../src/base';

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
      data: [],
      xField: 'date',
      yField: 'scales',
      autoFit: false,
      width: '200',
      height: '160',
    };
    const testRenderer = create(<Area {...props} {...chartProps} />);
    const testInstance = testRenderer.root;
    expect(
      testInstance.findByType(ErrorBoundary).children[0].children[0].indexOf('') !== -1,
    ).toBeTruthy();
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
      data: [],
      xField: 'date',
      yField: 'scales',
      autoFit: false,
      width: '200',
      height: '160',
    };
    const testRenderer = create(<Area {...props} {...chartProps} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(ErrorBoundary).children[0].children).toEqual([
      'custom error with callback',
    ]);
  });
});
