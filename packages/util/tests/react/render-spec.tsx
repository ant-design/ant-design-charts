import React, { act } from 'react';
import { render } from '../../src';
import { sleep } from '../util';

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

  it('render', async () => {
    const spyWarn = jest.spyOn(console, 'warn');
    act(() => {
      render(<div className="test-render">hello</div>, container);
    });
    await sleep(500);
    expect(spyWarn).toBeCalledTimes(0);
    expect(document.querySelector('.test-render').innerHTML).toBe('hello');
  });
});
