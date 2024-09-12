import type { ContainerConfig } from '@ant-design/charts-util';
import type { CardinalPlacement, Graph, GraphOptions as G6GraphOptions, NodeData } from '@antv/g6';

export interface GraphOptions extends ContainerConfig, G6GraphOptions {
  /**
   * 是否支持节点收起/展开
   * @description 此属性仅在 node.type 为 'react' 时生效
   * @default true
   */
  collapsible?: boolean | CollapsibleOptions;
  /**
   * 当图初始化完成后（即 new Graph() 之后）执行回调
   */
  onInit?: (graph: Graph) => void;
  /**
   * 当图渲染完成后（即 graph.render() 之后）执行回调
   */
  onReady?: (graph: Graph) => void;
  /**
   * 当图销毁后（即 graph.destroy() 之后）执行回调
   */
  onDestroy?: () => void;
}

export type ParsedGraphOptions = Required<GraphOptions>;

export interface CollapsibleOptions {
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
  iconPlacement?: CardinalPlacement | ((data: NodeData) => CardinalPlacement);
  /**
   * 图标相对于节点的水平偏移量
   * @default 0
   */
  iconOffsetX?: number | ((data: NodeData) => number);
  /**
   * 图标相对于节点的垂直偏移量
   * @default 0
   */
  iconOffsetY?: number | ((data: NodeData) => number);
  /**
   * 指定图标的 CSS 类名
   */
  iconClassName?: string;
  /**
   * 指定图标的内联样式
   */
  iconStyle?: React.CSSProperties;
}
