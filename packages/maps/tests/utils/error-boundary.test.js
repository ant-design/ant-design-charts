import React from 'react';
import { create } from 'react-test-renderer';
import BubbleMap from '../../src/maps';
import { ErrorBoundary } from '../../src/base';

describe('Map render', () => {
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
      width: '200',
      height: '160',
    };
    const testRenderer = create(<BubbleMap {...props} {...chartProps} />);
    const testInstance = testRenderer.root;
    expect(
      testInstance.findByType(ErrorBoundary).children[0].children[0].indexOf('') !== -1,
    ).toBeTruthy();
  });
});
