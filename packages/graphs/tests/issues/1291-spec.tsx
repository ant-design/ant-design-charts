import React from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { OrganizationGraph } from '../../src';
import { ORG_DATA } from '../data';

describe('Content can be drag', () => {
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
    let chartRef = undefined;
    const props = {
      className: 'container',
      onReady: (graph) => {
        chartRef = graph;
      },
    };
    const config = {
      height: 600,
      data: ORG_DATA,
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    } as any;
    act(() => {
      render(<OrganizationGraph {...props} {...config} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    expect(chartRef.findById('root').getModel()._draggable).toBeTruthy();
  });
});
