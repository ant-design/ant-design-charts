import React, { useRef } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { IndentedTree } from '../../src/obsolescent/graph';

const refs = renderHook(() => useRef());

describe('IndentedTree', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  const data = {
    id: 'root',
    label: 'root',
    children: [
      {
        id: 'c1',
        label: 'c1',
        children: [
          {
            id: 'c1-1',
            label: 'c1-1',
          },
          {
            id: 'c1-2',
            label: 'c1-2',
            children: [
              {
                id: 'c1-2-1',
                label: 'c1-2-1',
              },
              {
                id: 'c1-2-2',
                label: 'c1-2-2',
              },
            ],
          },
        ],
      },
      {
        id: 'c2',
        label: 'c2',
      },
      {
        id: 'c3',
        label: 'c3',
        children: [
          {
            id: 'c3-1',
            label: 'c3-1',
          },
          {
            id: 'c3-2',
            label: 'c3-2',
            children: [
              {
                id: 'c3-2-1',
                label: 'c3-2-1',
              },
              {
                id: 'c3-2-2',
                label: 'c3-2-2',
              },
              {
                id: 'c3-2-3',
                label: 'c3-2-3',
              },
            ],
          },
          {
            id: 'c3-3',
            label: 'c3-3',
          },
        ],
      },
    ],
  };
  it('鼠标事件', () => {
    let edgeClicked = false;
    let edgeHovered = false;
    let edgeUnhovered = false;
    let nodeClicked = false;
    let nodeHovered = false;
    let nodeUnhovered = false;
    let canvasClicked = false;

    const config = {
      width: 650,
      height: 500,
      data,
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
      handleEdgeClick: () => {
        edgeClicked = true;
      },
      handleEdgeHover: () => {
        edgeHovered = true;
      },
      handleEdgeUnHover: () => {
        edgeUnhovered = true;
      },
      handleNodeClick: () => {
        nodeClicked = true;
      },
      handleNodeHover: () => {
        nodeHovered = true;
      },
      handleNodeUnHover: () => {
        nodeUnhovered = true;
      },
      handleCanvasClick: () => {
        canvasClicked = true;
      },
      collapseExpand: true,
      enableEdit: true,
      nodeType: 'card-node',
      minimapCfg: {
        show: true,
      },
      graphRef: refs,
    };

    act(() => {
      ReactDOM.render(<IndentedTree {...config} />, container);
    });

    const node = refs.current.getNodes()[0];
    const edge = refs.current.getEdges()[0];

    const collapseIcon = node.getContainer().find((e) => e.get('name') === 'collapse-icon');

    refs.current.emit('edge:mouseenter', { item: edge });
    refs.current.emit('node:mouseenter', { item: node });
    refs.current.emit('edge:mouseleave', { item: edge });
    refs.current.emit('node:mouseleave', { item: node });
    refs.current.emit('edge:click', { item: edge });
    refs.current.emit('node:click', { item: node, target: collapseIcon });
    refs.current.emit('canvas:click', {});
    // 并没有 node:touchstart 事件
    // refs.current.emit('node:touchstart', { item: node, target: collapseIcon });
    refs.current.emit('edge:touchstart', { item: edge });
    refs.current.emit('canvas:touchstart', {});

    expect(edgeClicked).toBe(true);
    expect(edgeHovered).toBe(true);
    expect(edgeUnhovered).toBe(true);
    expect(nodeClicked).toBe(true);
    expect(nodeHovered).toBe(true);
    expect(nodeUnhovered).toBe(true);
    expect(canvasClicked).toBe(true);
  });
});
