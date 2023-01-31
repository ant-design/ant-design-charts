// @ts-nocheck
import React, { useRef } from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { ConversionDagreGraph } from '../../src';
import { ConvDagreData } from '../data';

describe('Type NodeData', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    container.style.height = '520px';
    document.body.appendChild(container);
  });
  afterEach(() => {
    // document.body.removeChild(container);
    // container = null;
  });
  it('Render data', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      onReady: (ref) => {
        chartRef = ref;
      },
    };

    const onChangeData = (params) => {
      // 业务回调
    };

    const chartProps = {
      data: ConvDagreData,
      layerOrder: ['层级0', '层级1', '层级2'],
      segmLayer: '层级1',
      ratioMethod: 'both',
      onChangeData,
    };

    act(() => {
      render(<ConversionDagreGraph {...props} {...chartProps} />, container);
    });
    
    expect(chartRef).not.toBeUndefined();
  });
});
