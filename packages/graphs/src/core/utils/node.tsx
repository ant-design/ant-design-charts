import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import type { EdgeData, EdgeDirection, GraphData, ID, NodeData } from '@antv/g6';
import { ReactNodeStyleProps } from '@antv/g6-extension-react';
import { get, has, isObject, set } from 'lodash-es';
import React from 'react';
import type { CollapsibleOptions, GraphOptions } from '../../types';
import { withCollapsibleNode } from '../hoc';

/**
 * 判断是否为 React 组件节点
 * @param options - 图配置项
 * @returns 是否为 React 组件节点
 */
export function isReactNode(options: GraphOptions) {
  return has(options, 'node.style.component');
}

/**
 * 判断是否可展开/收起
 * @param options - 图配置项
 * @returns 是否可展开/收起
 */
export function isCollapsible(options: GraphOptions) {
  return Boolean(get(options, 'collapsible', false));
}

/**
 * 解析展开/收起配置项
 * @param collapsible - 用户配置的展开/收起配置项
 * @returns 展开/收起配置项
 */
export function parseCollapsible(collapsible: GraphOptions['collapsible']): CollapsibleOptions {
  const defaultOptions: CollapsibleOptions = {
    trigger: 'icon',
    direction: 'out',
    iconRender: (isCollapsed: boolean) => (isCollapsed ? <PlusCircleOutlined /> : <MinusCircleOutlined />),
  };

  return collapsible === true ? defaultOptions : isObject(collapsible) ? { ...defaultOptions, ...collapsible } : {};
}

/**
 * 推断可折叠节点的样式
 * @param options - 图配置项
 */
export function inferCollapsibleStyle(options: GraphOptions) {
  const config = parseCollapsible(options.collapsible);
  const { component } = options.node!.style as unknown as ReactNodeStyleProps;

  set(options, 'node.style.component', function (data: NodeData) {
    const CollapsibleNode = withCollapsibleNode(component);
    // @ts-expect-error this is G6 graph instance
    return <CollapsibleNode data={data} graph={this} {...config} />;
  });
}

/**
 * 获取邻居节点
 * @param nodeId - 节点 ID
 * @param edges - 边数据
 * @param direction - 边的方向
 * @returns 邻居节点 ID
 */
export const getNeighborNodeIds = (nodeId: ID, edges: EdgeData[], direction: EdgeDirection): ID[] => {
  const getSuccessorNodeIds = (reverse = false): ID[] => {
    const [source, target] = reverse ? ['target', 'source'] : ['source', 'target'];
    return edges.filter((edge) => edge[source] === nodeId).map((edge) => edge[target]) as ID[];
  };

  if (direction === 'out') return getSuccessorNodeIds();
  if (direction === 'in') return getSuccessorNodeIds(true);
  return getSuccessorNodeIds().concat(getSuccessorNodeIds(true));
};

/**
 * 插入或更新子节点数据，children 字段在展开/折叠节点时被消费
 * @param data - 图数据
 * @param direction - 边的方向
 * @returns 更新后的图数据
 */
export function upsertChildrenData(data: GraphData, direction: EdgeDirection): GraphData {
  const { nodes = [], edges = [] } = data || {};

  return {
    ...data,
    nodes: nodes.map((node) => ({
      ...node,
      children: getNeighborNodeIds(node.id, edges, direction),
    })),
  };
}
