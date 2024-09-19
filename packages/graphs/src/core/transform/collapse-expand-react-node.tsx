import type { BaseTransformOptions, CardinalPlacement, Graph, NodeData, RuntimeContext } from '@antv/g6';
import { BaseTransform, idOf } from '@antv/g6';
import { get, has, set } from 'lodash';
import React from 'react';
import { withCollapsibleNode } from '../hoc';
import { getNeighborNodeIds } from '../utils/data';

export interface CollapseExpandReactNodeOptions extends BaseTransformOptions {
  /**
   * 点击指定元素，触发节点收起/展开
   * - 'icon': 点击内置图标
   * - 'node': 点击节点
   * - HTMLElement: 自定义元素
   * @default 'icon'
   */
  trigger?: 'icon' | 'node' | HTMLElement;
  /**
   * 收起/展开指定方向上的邻居节点
   * - 'in': 前驱节点
   * - 'out': 后继节点
   * - 'both': 前驱和后继节点
   * @default 'out'
   */
  direction?: 'in' | 'out' | 'both';
  /**
   * 渲染函数，用于自定义收起/展开图标
   * @param isCollapsed - 当前节点是否已收起
   * @returns 自定义图标
   */
  iconRender?: (isCollapsed: boolean) => React.ReactNode;
  /**
   * 图标相对于节点的位置
   * @default 'bottom'
   */
  iconPlacement?: CardinalPlacement | ((this: Graph, data: NodeData) => CardinalPlacement);
  /**
   * 图标相对于节点的水平偏移量
   * @default 0
   */
  iconOffsetX?: number | ((this: Graph, data: NodeData) => number);
  /**
   * 图标相对于节点的垂直偏移量
   * @default 0
   */
  iconOffsetY?: number | ((this: Graph, data: NodeData) => number);
  /**
   * 指定图标的 CSS 类名
   */
  iconClassName?: string;
  /**
   * 指定图标的内联样式
   */
  iconStyle?: React.CSSProperties;
}

const defaultIconRender = (isCollapsed: boolean) => (
  <div
    style={{
      height: '16px',
      width: '16px',
      background: '#fff',
      border: '2px solid #99ADD1',
      borderRadius: '50%',
      color: '#99ADD1',
      fontWeight: '800',
      lineHeight: '13px',
      textAlign: 'center',
    }}
  >
    {isCollapsed ? '+' : '-'}
  </div>
);

export class CollapseExpandReactNode extends BaseTransform<CollapseExpandReactNodeOptions> {
  static defaultOptions: Partial<CollapseExpandReactNodeOptions> = {
    trigger: 'icon',
    direction: 'out',
    iconRender: defaultIconRender,
    iconPlacement: 'bottom',
    iconOffsetX: 0,
    iconOffsetY: 0,
    iconClassName: '',
    iconStyle: {},
  };

  constructor(context: RuntimeContext, options: CollapseExpandReactNodeOptions) {
    super(context, Object.assign({}, CollapseExpandReactNode.defaultOptions, options));
  }

  public afterLayout() {
    const { graph, element, model } = this.context;
    const { nodes = [], edges = [] } = graph.getData();
    const options = this.options;

    nodes.forEach((datum) => {
      const nodeId = idOf(datum);

      const node = element!.getElement(nodeId);
      if (!node || (datum.children && datum.children.length > 0)) return;

      const children = getNeighborNodeIds(nodeId, edges, this.options.direction);
      if (children.length === 0) return;

      model.updateNodeData([{ id: nodeId, children }]);
    });

    const nodeMapper = graph.getOptions().node!;

    if (has(nodeMapper, 'style.component')) {
      const component = get(nodeMapper, 'style.component') as React.FC;
      set(nodeMapper, 'style.component', function (data: NodeData) {
        const CollapsibleNode = withCollapsibleNode(component);
        // @ts-ignore this 指向 G6 Graph 实例
        return <CollapsibleNode data={data} graph={this} {...options} />;
      });
    }

    graph.setNode(nodeMapper);
    graph.draw();
  }
}
