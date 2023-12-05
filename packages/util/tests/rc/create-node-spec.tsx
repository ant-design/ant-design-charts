import React from 'react';
import { act } from 'react-dom/test-utils';
import { createNode } from '../../src';

describe('Create Node', () => {
  it('run', () => {
    act(() => {
      document.body.appendChild(createNode(<span id="test">hello</span>));
    });
    expect(document.querySelector('#test').innerHTML).toContain('hello');
  });
});
