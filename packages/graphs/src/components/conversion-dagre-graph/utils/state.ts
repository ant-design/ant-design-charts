import { ITEM_STATE } from '../types';
import { getArrowConfig } from './edge';
import type { Item, INode, Graph, IEdge } from '@antv/g6';
import { BASE_STATES, SIZE_IMPACT_STATES } from '../constants';

// 获取节点状态样式
export const getNodeStateStyles = (state) => {
  const stateStyles = {
    [ITEM_STATE.Selected]: {
      'node-key-shape': {
        lineWidth: 14,
      },
      'node-inner-border-shape': {
        lineWidth: 2,
      },
    },
    [ITEM_STATE.Active]: {
      'node-key-shape': {
        lineWidth: 6,
      },
      'node-inner-border-shape': {
        lineWidth: 1,
      },
    },
    [ITEM_STATE.Default]: {
      'node-key-shape': {
        lineWidth: 0,
      },
      'node-inner-border-shape': {
        lineWidth: 1,
      },
    },
  };
  return {
    ...stateStyles[state],
  };
};

// 获取边line的状态样式
export const getEdgeStateStyles = (state, edge) => {
  const { highlightColor, stroke, labelFill } = edge.style;
  const stateStyles = {
    [ITEM_STATE.Selected]: {
      'path-shape': {
        stroke: highlightColor,
        endArrow: getArrowConfig(highlightColor),
      },
      'label-shape': {
        fill: highlightColor,
      },
    },
    [ITEM_STATE.Active]: {
      'path-shape': {
        stroke: highlightColor,
        endArrow: getArrowConfig(highlightColor),
      },
      'label-shape': {
        fill: highlightColor,
      },
    },
    [ITEM_STATE.Default]: {
      'path-shape': {
        stroke,
        endArrow: getArrowConfig(stroke),
      },
      'label-shape': {
        fill: labelFill,
      },
    },
  };
  return {
    ...stateStyles[state],
  };
};

// 设置元素状态样式
export const setItemStateStyle = (item, type) => {
  // 获取元素的数据模型
  const model = item.getModel();
  const states = item.getStates();
  // 获取元素状态
  const state = states[states.length - 1] || ITEM_STATE.Default;
  // 获取元素在该state下的各shape的style
  const style = type === 'node' ? getNodeStateStyles(state) : getEdgeStateStyles(state, model);
  // 获取元素的所有shape
  const shapes = item.getContainer()?.get('children');
  // 更新各shape的style
  shapes?.forEach((shape) => {
    const shapeName = shape.get('name');
    if (style[shapeName]) {
      shape.attr(style[shapeName]);
    }
  });
};

// 一次绘制
export const paintOnce = (graph: Graph, fn: Function) => {
  const autoPaint = graph.get('autoPaint');
  graph.setAutoPaint(false);
  fn();
  graph.paint();
  graph.setAutoPaint(autoPaint);
};

// 清空元素状态
export const clearItemStates = (
  graph: Graph,
  graphItem: Item,
  states: ITEM_STATE[],
  enablePaint: boolean = false,
) => {
  function fn() {
    states.forEach((state) => {
      if (graphItem?.hasState(state)) {
        graph.setItemState(graphItem, state, false);
        // item.setState(state, false);
        // 对尺寸 style 有影响的 state 才需要 refresh ，重新计算位置和边界
        // if (Size_IMPACT_STATES.includes(state)) {
        graphItem.refresh();
        // }
      }
    });
  }
  if (enablePaint) {
    paintOnce(graph, () => {
      fn();
    });
  } else {
    fn();
  }
};

// 清空指定元素集合的状态
export const clearItemsStates = (
  graph: Graph,
  items: Item[],
  clearStates: ITEM_STATE[],
  enablePaint: boolean = false,
) => {
  function fn() {
    items.forEach((graphItem) => {
      try {
        clearItemStates(graph, graphItem, clearStates, false);
      } catch (error) {
        console.log('error :>> ', graphItem, error);
      }
    });
  }
  if (enablePaint) {
    paintOnce(graph, () => {
      fn();
    });
  } else {
    fn();
  }
};

// 设置元素状态
export const setItemState = (
  graph: Graph,
  graphItem: Item,
  state: ITEM_STATE,
  value: boolean | string,
  enablePaint: boolean = false,
) => {
  function fn() {
    if (!graphItem || graphItem.destroyed) {
      return;
    }
    graph.setItemState(graphItem, state, value);
    // 对style有影响，重新计算位置和边界
    if (!graphItem.getKeyShape()?.get('destroyed') && SIZE_IMPACT_STATES.includes(state)) {
      graphItem.refresh();
    }
  }
  if (enablePaint) {
    paintOnce(graph, () => {
      fn();
    });
  } else {
    fn();
  }
};

// 重绘节点相关的边
export const refreshRelatedEdges = (node: INode) => {
  node.getEdges().forEach((edge) => {
    if (!edge.getKeyShape()?.get('destroyed') && edge.get('keyShape')) {
      edge.refresh();
    }
  });
};

// 重置所有节点的状态到默认认态
export const resetNodeStates = (graph: Graph, enablePaint: boolean = false) => {
  // 由于状态的变化，可能会造成 style 的变化，特别是大小的变化，因此在重置了 node 之后，还需要 refresh 关联的边，否则会造成边的终点连接不到节点边界
  const relatedEdges = new Set() as Set<IEdge>;

  const resetNodes = () => {
    BASE_STATES.forEach((state) => {
      const stateNodes = graph.findAllByState('node', state) as INode[];
      stateNodes.forEach((node) => {
        clearItemStates(graph, node, [state], false);
        if (SIZE_IMPACT_STATES.includes(state)) {
          node.getEdges().forEach((edge) => relatedEdges.add(edge));
        }
      });
    });
    Array.from(relatedEdges).forEach((edge) => {
      edge.refresh();
    });
  };

  if (enablePaint) {
    paintOnce(graph, resetNodes);
  } else {
    resetNodes();
  }
};

// 重置所有边的状态到默认状态
export const resetEdgeStates = (graph: Graph, enablePaint: boolean = false) => {
  clearItemsStates(graph, graph.getEdges(), BASE_STATES, enablePaint);
};

// 重置为默认状态
export const resetBaseStates = (graph: Graph, enablePaint: boolean = false) => {
  resetNodeStates(graph, enablePaint);
  resetEdgeStates(graph, enablePaint);
};

// 清空激活状态
export const clearActiveStates = (graph: Graph, enablePaint: boolean = false) => {
  clearItemsStates(graph, graph.getNodes(), [ITEM_STATE.Active], enablePaint);
  clearItemsStates(graph, graph.getEdges(), [ITEM_STATE.Active], enablePaint);
};
