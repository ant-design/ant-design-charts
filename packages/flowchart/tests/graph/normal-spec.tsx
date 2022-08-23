import React, { useRef, createRef } from 'react';
import { create } from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Flowchart } from '../../src';

// const refs = renderHook(() => useRef());

describe('Flowchart render', () => {
  let container;
  const DATA = {};
  beforeEach(() => {
    container = document.createElement('div');
    container.className = 'container';
    container.style.height = '600px';
    document.body.appendChild(container);
  });
  afterAll(() => {
    // const containers = document.getElementsByClassName('container');
    // Array.from(containers).forEach((el) => {
    //   document.body.removeChild(el);
    // });
    // container = null;
  });

  it('chart render', () => {
    const NODE_LINK = {
      id: 'NODE_LINK',
      label: 'NODE_LINK',
      render: () => {
        return (
          <a target="_blank" href="https://charts.ant.design/" style={{ padding: '0 16px' }}>
            自定义渲染
          </a>
        );
      },
    };

    act(() => {
      ReactDOM.render(
        <Flowchart
          data={DATA}
          onSave={(d) => {
            console.log(d);
          }}
          toolbarPanelProps={{
            position: {
              top: 0,
              left: 0,
              right: 0,
            },
          }}
          contextMenuPanelProps={{
            submenu: (cfg) => {
              const { menuType } = cfg;
              if (menuType === 'node') {
                return [NODE_LINK];
              }
              return [];
            },
          }}
          scaleToolbarPanelProps={{
            layout: 'horizontal',
            position: {
              right: 0,
              top: -40,
            },
            // style: {
            //   background: 'transparent',
            // },
          }}
          onAddNode={() => {
            console.log('onAddNode');
          }}
          onAddEdge={() => {
            console.log('onAddEdge');
          }}
          onConfigChange={() => {
            console.log('onConfigChange');
          }}
          canvasProps={{
            showPortsOnNodeSelected: true,
            config: {
              connecting: {
                router: '',
              },
            },
            edgeConfig: {
              attrs: {
                line: {
                  stroke: 'red',
                  strokeDasharray: '',
                },
              },
            },
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
