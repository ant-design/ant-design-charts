import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { RadialTreeGraph } from '../../src';

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
    } as any;
    act(() => {
      ReactDOM.render(<RadialTreeGraph {...props} {...chartProps} />, container);
    });
    expect(document.querySelector('#error').innerHTML).toBe('custom error');
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
    } as any;
    act(() => {
      ReactDOM.render(<RadialTreeGraph {...props} {...chartProps} />, container);
    });
    expect(document.querySelector('#error-callback').innerHTML).toBe('custom error with callback');
  });
});
