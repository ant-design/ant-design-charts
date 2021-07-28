import React, { useRef } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { DagreFundFlowGraph } from '../../src/obsolescent/graph';

const refs = renderHook(() => useRef());

describe('Dagre Fund Flow', () => {
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
    nodes: [
      {
        id: '0',
        label: '0',
      },
      {
        id: '1',
        label: '1',
      },
      {
        id: '2',
        label: '2',
      },
      {
        id: '3',
        label: '3',
      },
      {
        id: '4',
        label: '4',
      },
      {
        id: '5',
        label: '5',
      },
      {
        id: '6',
        label: '6',
      },
      {
        id: '7',
        label: '7',
      },
      {
        id: '8',
        label: '8',
      },
      {
        id: '9',
        label: '9',
      },
    ],
    edges: [
      {
        source: '0',
        target: '1',
        label: 'edge1',
        subLabel: 'edge1-sub',
        dataType: 'flow',
      },
      {
        source: '0',
        target: '2',
        label: 'edge2',
        dataType: 'flow',
      },
      {
        source: '1',
        target: '4',
      },
      {
        source: '0',
        target: '3',
      },
      {
        source: '3',
        target: '4',
      },
      {
        source: '4',
        target: '5',
      },
      {
        source: '4',
        target: '6',
      },
      {
        source: '5',
        target: '7',
      },
      {
        source: '5',
        target: '8',
      },
      {
        source: '8',
        target: '9',
      },
      {
        source: '2',
        target: '9',
      },
      {
        source: '3',
        target: '9',
      },
    ],
  };

  it('初始化以及销毁', () => {
    const config = {
      width: 650,
      height: 500,
      data,
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
      graphRef: refs,
      graphId: 'initGraph',
    };
    mount(<DagreFundFlowGraph {...config} />);
    refs.current.destroy();
  });
  it('鼠标事件', () => {
    let edgeClicked = false,
      edgeHovered = false,
      edgeUnhovered = false,
      nodeClicked = false,
      nodeHovered = false,
      nodeUnhovered = false,
      canvasClicked = false;

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
      graphRef: refs,
      graphId: 'mouseEventGraph',
    };

    act(() => {
      ReactDOM.render(<DagreFundFlowGraph {...config} />, container);
    });

    const node = refs.current.getNodes()[0];
    const edge = refs.current.getEdges()[0];

    refs.current.emit('edge:mouseenter', { item: edge });
    refs.current.emit('node:mouseenter', { item: node });
    refs.current.emit('edge:mouseleave', { item: edge });
    refs.current.emit('node:mouseleave', { item: node });
    refs.current.emit('edge:click', { item: edge });
    refs.current.emit('node:click', { item: node });
    refs.current.emit('canvas:click', {});

    expect(edgeClicked).toBe(true);
    expect(edgeHovered).toBe(true);
    expect(edgeUnhovered).toBe(true);
    expect(nodeClicked).toBe(true);
    expect(nodeHovered).toBe(true);
    expect(nodeUnhovered).toBe(true);
    expect(canvasClicked).toBe(true);
  });
});
