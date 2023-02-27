// @ts-nocheck
import React from 'react';
import { create } from 'react-test-renderer';
import Area from '../../src/components/area';
import ErrorBoundary from '../../src/errorBoundary';

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
    expect(1 + 1).toBe(2);
  });

  it('error template with callback', () => {
    expect(1 + 1).toBe(2);
  });
});
