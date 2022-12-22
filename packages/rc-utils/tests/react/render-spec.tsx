import React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '../../src';

describe('React 18', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('render', () => {
    const spyWarn = jest.spyOn(console, 'warn');
    act(() => {
      render(<div className="test-render">hello</div>, container);
    });
    expect(spyWarn).toBeCalledTimes(0);
    expect(document.querySelector('.test-render').innerHTML).toBe('hello');
  });
});
