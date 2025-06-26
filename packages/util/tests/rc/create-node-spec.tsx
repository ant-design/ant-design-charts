import React, { act } from 'react';
import { createNode } from '../../src';

describe('Create Node', () => {
  it('run', () => {
    act(() => {
      document.body.appendChild(createNode(<span id="test">hello</span>));
    });
    expect(document.querySelector('#test').innerHTML).toContain('hello');
  });
});
