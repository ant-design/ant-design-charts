import React, { useRef } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { processMinimap, getGraphSize } from '../../src/graph/util';

const refs = renderHook(() => useRef());

describe('Dagre Graph', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it('minimap without graph', () => {
    processMinimap({ show: true }, undefined);
  });
  it('getGraphSize without width and CANVAS_WIDTH', () => {
    getGraphSize(undefined, undefined, undefined);
  });
});
