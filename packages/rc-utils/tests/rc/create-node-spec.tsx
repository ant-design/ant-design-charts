import React from 'react';
import { act } from 'react-dom/test-utils';
import { createNode } from '../../src';

describe('Create Node', () => {
  it('run', () => {
    act(() => {
      document.body.appendChild(
        createNode(<span>hello</span>, {
          id: 'test',
        }),
      );
    });
    expect(document.querySelector('#test').innerHTML).toBe('<span>hello</span>');
  });
});
