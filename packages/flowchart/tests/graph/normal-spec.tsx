import React, { useRef, createRef } from 'react';
import { create } from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Flowchart } from '../../src';

// const refs = renderHook(() => useRef());

describe('Flowchart render', () => {
  let container;
  const DATA = {
    nodes: [
      {
        id: 'node-63cd90e9-090b-4a52-b003-084fe8512d37',
        parentId: '',
        renderKey: 'Terminal',
        name: 'Terminal',
        label: '开始',
        width: 100,
        height: 40,
        ports: {
          items: [
            { group: 'top', id: '3c0f5d34-3ab9-40a6-bfd8-bfe736fd8b59' },
            { group: 'right', id: '1911685f-a894-4e63-ace4-db386ae97bad' },
            { group: 'bottom', id: '25aed5b5-ad0e-4638-8775-de00294097f1' },
            { group: 'left', id: '9989c947-1b39-4635-b9aa-bb5e6ad9351e' },
          ],
          groups: {
            top: {
              position: { name: 'top' },
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                  style: { visibility: 'hidden' },
                },
              },
              zIndex: 10,
            },
            right: {
              position: { name: 'right' },
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                  style: { visibility: 'hidden' },
                },
              },
              zIndex: 10,
            },
            bottom: {
              position: { name: 'bottom' },
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                  style: { visibility: 'hidden' },
                },
              },
              zIndex: 10,
            },
            left: {
              position: { name: 'left' },
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                  style: { visibility: 'hidden' },
                },
              },
              zIndex: 10,
            },
          },
        },
        isLeaf: true,
        x: 580,
        y: 80,
        zIndex: 10,
        stroke: '#417505',
      },
      {
        id: 'node-915545b7-7723-4ccc-8970-3309da79a0d5',
        parentId: '',
        renderKey: 'Process',
        name: 'Process',
        label: '步骤1',
        width: 100,
        height: 40,
        ports: {
          items: [
            { group: 'top', id: '7643ce5d-4e4c-4776-affd-6f2ca0335dcc' },
            { group: 'right', id: 'fea7703c-2d37-46f0-b310-0955864644ba' },
            { group: 'bottom', id: '1fa43052-ace7-44ff-b64b-82fdf3a48298' },
            { group: 'left', id: '497cc3ac-68f4-4c50-b99e-1c8fa7a7c457' },
          ],
          groups: {
            top: {
              position: { name: 'top' },
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                  style: { visibility: 'hidden' },
                },
              },
              zIndex: 10,
            },
            right: {
              position: { name: 'right' },
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                  style: { visibility: 'hidden' },
                },
              },
              zIndex: 10,
            },
            bottom: {
              position: { name: 'bottom' },
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                  style: { visibility: 'hidden' },
                },
              },
              zIndex: 10,
            },
            left: {
              position: { name: 'left' },
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                  style: { visibility: 'hidden' },
                },
              },
              zIndex: 10,
            },
          },
        },
        isLeaf: true,
        x: 580,
        y: 180,
        zIndex: 10,
        stroke: '#000000',
        fill: '#7ed321',
      },
    ],
    edges: [
      {
        id: '[object Object]:25aed5b5-ad0e-4638-8775-de00294097f1-[object Object]:7643ce5d-4e4c-4776-affd-6f2ca0335dcc',
        targetPortId: '7643ce5d-4e4c-4776-affd-6f2ca0335dcc',
        sourcePortId: '25aed5b5-ad0e-4638-8775-de00294097f1',
        source: { cell: 'node-63cd90e9-090b-4a52-b003-084fe8512d37', port: '25aed5b5-ad0e-4638-8775-de00294097f1' },
        target: { cell: 'node-915545b7-7723-4ccc-8970-3309da79a0d5', port: '7643ce5d-4e4c-4776-affd-6f2ca0335dcc' },
        zIndex: 1,
        attrs: {
          line: {
            stroke: '#A2B1C3',
            targetMarker: { name: 'block', width: 12, height: 8 },
            strokeDasharray: '5 5',
            strokeWidth: 1,
          },
        },
        data: {
          targetPortId: '7643ce5d-4e4c-4776-affd-6f2ca0335dcc',
          sourcePortId: '25aed5b5-ad0e-4638-8775-de00294097f1',
          source: 'node-63cd90e9-090b-4a52-b003-084fe8512d37',
          target: 'node-915545b7-7723-4ccc-8970-3309da79a0d5',
        },
      },
    ],
  };
  beforeEach(() => {
    container = document.createElement('div');
    container.className = 'container';
    container.style.height = '600px';
    document.body.appendChild(container);
  });
  afterAll(() => {
    const containers = document.getElementsByClassName('container');
    Array.from(containers).forEach((el) => {
      document.body.removeChild(el);
    });
    container = null;
  });

  it('chart render', () => {
    act(() => {
      ReactDOM.render(
        <Flowchart
          data={DATA}
          toolbarPanelProps={{
            position: {
              top: 0,
              left: 0,
              right: 0,
            },
          }}
          scaleToolbarPanelProps={{
            layout: 'horizontal',
            position: {
              right: 0,
              top: -40,
            },
            style: {
              background: 'transparent',
            },
          }}
          canvasProps={{
            position: {
              top: 40,
              left: 0,
              right: 0,
              bottom: 0,
            },
          }}
          nodePanelProps={{
            position: { width: 160, top: 40, bottom: 0, left: 0 },
          }}
          detailPanelProps={{
            position: { width: 200, top: 40, bottom: 0, right: 0 },
          }}
          onReady={(graph, app) => {
            // graph.loadData(DATA);
          }}
        />,
        container,
      );
    });
    const flowchartContainer = document.getElementsByClassName('xflow-canvas-container')[0];
    expect(flowchartContainer).not.toBeUndefined();
  });
});
