// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import AreaMap from '../../src/components/area-map';

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

  it.skip('error template with ReactNode', () => {
    const props = {
      loading: true,
      // An object of type loadingTemplate is only used to trigger a boundary error
      loadingTemplate: {
        triggleError: true,
      },
      errorTemplate: <span id="error">custom error</span>,
    };
    const chartProps = {
      map: { type: 'amap1' },
      source: {
        data: [{ w: 21.5458, t: 22.2, s: '广东', l: 11, m: '电白', j: 110.9886, h: '59664' }],
        parser: {
          type: 'json',
          x: 'j',
          y: 'w',
        },
      },
    };
    act(() => {
      ReactDOM.render(<AreaMap {...props} {...chartProps} />, container);
    });
    expect(container.querySelector('#error').innerText).toBe('custom error');
  });
});
