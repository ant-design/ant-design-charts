import G6 from '@antv/g6';
import type { G6GraphEvent } from '@antv/g6';
import { setItemState, paintOnce, getInOutPathEdges, clearActiveStates } from '../utils';
import { ITEM_STATE } from '../types';

G6.registerBehavior('conv-hover', {
  getDefaultCfg() {
    return {
      highlightData: {
        nodes: [],
        edges: [],
        // 触发高亮的节点id
        nodeId: null,
      },
    };
  },
  getEvents() {
    return {
      'node:mouseenter': 'onNodeMouseEnter',
      'node:mouseleave': 'onNodeMouseLeave',
      'node:mousemove': 'onNodeMouseMove',
      'edge:mouseenter': 'onEdgeMouseEnter',
      'edge:mouseleave': 'onEdgeMouseLeave',
    };
  },
  handleNodeNameTooltip(event: G6GraphEvent) {
    const shape = event.target;
    // hover节点名称时emit事件，用于节点名称的tooltip的展示和隐藏
    if (shape.get('name') === 'node-name') {
      this.graph.emit('node:nametooltipshow', {
        ...event,
        type: 'node:nametooltipshow',
        name: 'node:nametooltipshow',
      });
    } else {
      this.graph.emit('node:nametooltiphide', {
        ...event,
        type: 'node:nametooltiphide',
        name: 'node:nametooltiphide',
      });
    }
  },
  onNodeMouseEnter(event: G6GraphEvent) {
    this.handleNodeNameTooltip(event);
    const currentNode = event.item;
    const model = currentNode.getModel();
    if (!currentNode || currentNode.destroyed || model.disabled) return;

    const states = currentNode.getStates();
    if (states.length) return;

    if (!this.highlightData.nodeId) {
      this.highlightData = {
        nodes: this.graph.getNodes().map((node) => node.getModel()),
        edges: this.graph.getEdges().map((edge) => edge.getModel()),
      };
    }

    // 高亮节点相关链路
    this.highlightPath(currentNode, this.highlightData.edges);
  },
  onNodeMouseLeave(event: G6GraphEvent) {
    // 清空所有元素的激活状态
    paintOnce(this.graph, () => {
      clearActiveStates(this.graph);
    });
    this.highlightData = {
      nodes: [],
      edges: [],
      nodeId: null,
    };
  },
  onNodeMouseMove(event: G6GraphEvent) {
    this.handleNodeNameTooltip(event);
  },
  onEdgeMouseEnter(event: G6GraphEvent) {
    const currentEdge = event.item;
    const model = currentEdge.getModel();

    if (!currentEdge || currentEdge.destroyed || model.disabled) return;

    const states = currentEdge.getStates();
    if (states.length) return;
    paintOnce(this.graph, () => {
      setItemState(this.graph, currentEdge, ITEM_STATE.Active, true);
      // 提升边层级
      currentEdge.toFront();
    });
  },
  onEdgeMouseLeave(event: G6GraphEvent) {
    const edge = event.item;
    setItemState(this.graph, edge, ITEM_STATE.Active, false);
  },
  // 高亮节点相关的链路
  highlightPath(currentNode, queriedEdges = []) {
    const currentNodeId = currentNode.getModel().id;
    const { nodeId: lastNodeId, edges: lastHighlightEdges } = this.highlightData;
    // 要高亮节点与上一次高亮节点一样，同时相关路径也一样，则不再触发高亮操作
    if (lastNodeId === currentNodeId && queriedEdges === lastHighlightEdges) {
      return;
    }
    const { relativeOutEdges, relativeInEdges } = getInOutPathEdges(currentNodeId, queriedEdges);
    const relativeNodeIds = new Set();
    relativeOutEdges.forEach((edge) => {
      relativeNodeIds.add(edge.source);
      relativeNodeIds.add(edge.target);
    });
    const relativeEdgeIds = relativeOutEdges.map((edge) => edge.id);

    paintOnce(this.graph, () => {
      relativeEdgeIds.forEach((edgeId) => {
        const edge = this.graph.findById(edgeId);
        setItemState(this.graph, edge, ITEM_STATE.Active, true);
        // 置顶
        edge.toFront();
      });
      setItemState(this.graph, currentNode, ITEM_STATE.Active, true);
      // 提升节点层级
      currentNode.toFront();
    });

    this.highlightData = {
      nodeId: currentNodeId,
      edges: relativeOutEdges,
      nodes: relativeNodeIds,
    };
  },
});
