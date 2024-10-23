import type { ContainerConfig } from '@ant-design/charts-util';
import type { BehaviorOptions, GraphOptions as G6GraphOptions, Graph, PluginOptions } from '@antv/g6';
import type { TransformOptions } from '@antv/g6/lib/spec';

export interface GraphOptions extends ContainerConfig, Omit<G6GraphOptions, 'plugins' | 'transforms' | 'behaviors'> {
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
  /**
   * 交互
   */
  behaviors?: BehaviorOptions | ((this: Graph, behaviors: BehaviorOptions) => BehaviorOptions);
  /**
   * 画布插件
   */
  plugins?: PluginOptions | ((this: Graph, plugins: PluginOptions) => PluginOptions);
  /**
   * 数据转换器
   */
  transforms?: TransformOptions | ((this: Graph, transforms: TransformOptions) => TransformOptions);
}

export type ParsedGraphOptions = Required<GraphOptions>;
