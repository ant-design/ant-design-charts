import G6 from '@antv/g6';
import type { G6GraphEvent } from '@antv/g6';
import { setItemState, paintOnce, resetBaseStates } from '../utils';
import { ITEM_STATE } from '../types';

G6.registerBehavior('conv-click', {
  getDefaultCfg() {
    return {
      multiple: false, // 是否支持多选
    };
  },
  getEvents() {
    return {
      'node:click': 'onNodeClick',
      'canvas:click': 'onCanvasClick',
      'edge:click': 'onEdgeClick',
    };
  },
  handleNodeDetailInfoClick(event: G6GraphEvent) {
    const shape = event.target;
    // click节点详情icon时emit事件，用于节点详情的弹窗的展示和隐藏
    if (shape.get('name') === 'node-detail-info-icon') {
      this.graph.emit('node:detailinfoclick', {
        ...event,
        type: 'node:detailinfoclick',
        name: 'node:detailinfoclick',
      });
    } else {
      this.graph.emit('node:otherareaclick', {
        ...event,
        type: 'node:otherareaclick',
        name: 'node:otherareaclick',
      });
    }
  },
  onNodeClick(event: G6GraphEvent) {
    this.handleNodeDetailInfoClick(event);
    const { item: currentNode } = event;
    const { graph } = this;
    // 获取之前的选中状态
    const isSelected = currentNode.hasState(ITEM_STATE.Selected);
    paintOnce(graph, () => {
      resetBaseStates(graph);
      // 设置最新选中状态
      setItemState(graph, currentNode, ITEM_STATE.Selected, !isSelected);
      // 重绘节点相关的边，暂时不做
      // refreshRelatedEdges(currentNode);
    });
  },
  onEdgeClick(event: G6GraphEvent) {
    const { item: currentEdge } = event;
    const { graph } = this;
    // 获取之前的选中状态
    const isSelected = currentEdge.hasState(ITEM_STATE.Selected);
    paintOnce(graph, () => {
      resetBaseStates(graph);
      // 设置最新选中状态
      setItemState(graph, currentEdge, ITEM_STATE.Selected, !isSelected);
    });
  },
  onCanvasClick() {
    const { graph } = this;
    // 点击画布，重置元素状态为初始值
    paintOnce(graph, () => {
      resetBaseStates(graph);
    });
  },
});
