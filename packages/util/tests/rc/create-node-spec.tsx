import React, { act } from 'react';
import { createNode } from '../../src';
import { sleep } from '../util';

describe('Create Node', () => {
  it('run', async () => {
    act(() => {
      document.body.appendChild(createNode(<span id="test">hello</span>));
    });
    await sleep(500);
    expect(document.querySelector('#test').innerHTML).toContain('hello');
  });
});
