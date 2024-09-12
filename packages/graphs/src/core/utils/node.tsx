import type { NodeData } from '@antv/g6';
import { ReactNodeStyleProps } from '@antv/g6-extension-react';
import { get, has, isObject, set } from 'lodash';
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
  };

  return collapsible === true ? defaultOptions : isObject(collapsible) ? { ...defaultOptions, ...collapsible } : {};
}

/**
 * 推断可折叠节点的样式
 * @param options - 图配置项
 */
export function inferCollapsibleStyle(options: GraphOptions) {
  const config = parseCollapsible(options.collapsible);

  if (isReactNode(options)) {
    const { component } = options.node!.style as unknown as ReactNodeStyleProps;

    set(options, 'node.style.component', function (data: NodeData) {
      const CollapsibleNode = withCollapsibleNode(component);
      // @ts-ignore this 指向 G6 Graph 实例
      return <CollapsibleNode data={data} graph={this} {...config} />;
    });
  }
}
