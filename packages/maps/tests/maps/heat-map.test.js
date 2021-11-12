import React, { useRef } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import HeatMap from '../../src/components/HeatMap';

const refs = renderHook(() => useRef());

describe('Heat Map', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  const data = [
    {
      w: 21.5458,
      t: 22.2,
      s: '广东',
      l: 11,
      m: '电白',
      j: 110.9886,
      h: '59664',
    },
    {
      w: 22.9661,
      t: 21.9,
      s: '广东',
      l: 12,
      m: '东莞',
      j: 113.7389,
      h: '59289',
    },
  ];
  it('初始化以及销毁', () => {
    const config = {
      map: { type: 'amap' },
      source: {
        data,
        parser: {
          type: 'json',
          x: 'j',
          y: 'w',
        },
      },
      size: {
        field: 't',
        value: [0, 1],
      },
    };
    mount(<HeatMap {...config} />);
    refs.current.destroy();
  });
});
