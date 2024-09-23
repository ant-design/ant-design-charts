import type { BaseTransformOptions, DrawData, EdgeData, Graph, ID, RuntimeContext } from '@antv/g6';
import { BaseTransform, idOf } from '@antv/g6';
import { linear, log, pow, sqrt } from '../utils/scale';

export interface MapEdgeLineWidthOptions extends BaseTransformOptions {
  /**
   * 数值
   */
  value: number | ((this: Graph, data: EdgeData) => number);
  /**
   * 最小值
   */
  minValue?: number | ((data: EdgeData, edges: Record<ID, number>) => number);
  /**
   * 最大值
   */
  maxValue?: number | ((data: EdgeData, edges: Record<ID, number>) => number);
  /**
   * 最小线宽
   */
  minLineWidth?: number | ((data: EdgeData) => number);
  /**
   * 最大线宽
   */
  maxLineWidth?: number | ((data: EdgeData) => number);
  /**
   * 插值函数，用于将数值映射到线宽
   * - `'linear'`：线性插值函数，将一个值从一个范围线性映射到另一个范围，常用于处理中心性值的差异较小的情况
   * - `'log'`：对数插值函数，将一个值从一个范围对数映射到另一个范围，常用于处理中心性值的差异较大的情况
   * - `'pow'`：幂律插值函数，将一个值从一个范围幂律映射到另一个范围，常用于处理中心性值的差异较大的情况
   * - `'sqrt'`：平方根插值函数，将一个值从一个范围平方根映射到另一个范围，常用于处理中心性值的差异较大的情况
   * - 自定义插值函数：`(value: number, domain: [number, number], range: [number, number]) => number`，其中 `value` 为需要映射的值，`domain` 为输入值的范围，`range` 为输出值的范围
   */
  scale?:
    | 'linear'
    | 'log'
    | 'pow'
    | 'sqrt'
    | ((value: number, domain: [number, number], range: [number, number]) => number);
}

export class MapEdgeLineWidth extends BaseTransform {
  static defaultOptions: Partial<MapEdgeLineWidthOptions> = {
    minValue: (edge, edges) => Math.min(...Object.values(edges)),
    maxValue: (edge, edges) => Math.max(...Object.values(edges)),
    minLineWidth: 1,
    maxLineWidth: 10,
    scale: 'linear',
  };

  constructor(context: RuntimeContext, options: MapEdgeLineWidthOptions) {
    super(context, Object.assign({}, MapEdgeLineWidth.defaultOptions, options));
  }

  beforeDraw(input: DrawData): DrawData {
    const edges = this.context.model.getEdgeData();

    const { maxValue, minValue, maxLineWidth, minLineWidth, scale, value } = this.options;

    const values = edges.reduce((acc, edge) => {
      acc[idOf(edge)] = typeof value === 'function' ? value.call(this.context.graph, edge) : value;
      return acc;
    }, {} as Record<ID, number>);

    edges.forEach((edge) => {
      const lineWidth = this.assignLineWidthByValue(
        values[idOf(edge)] || 0,
        typeof minValue === 'function' ? minValue(edge, values) : minValue,
        typeof maxValue === 'function' ? maxValue(edge, values) : maxValue,
        typeof minLineWidth === 'function' ? minLineWidth(edge) : minLineWidth,
        typeof maxLineWidth === 'function' ? maxLineWidth(edge) : maxLineWidth,
        scale,
      );
      edge.style ||= {};
      edge.style.lineWidth = lineWidth;
    });
    return input;
  }

  private assignLineWidthByValue = (
    value: number,
    minValue: number,
    maxValue: number,
    minLineWidth: number,
    maxLineWidth: number,
    scale: MapEdgeLineWidthOptions['scale'],
  ): number => {
    const domain: [number, number] = [minValue, maxValue];
    const range: [number, number] = [minLineWidth, maxLineWidth];

    if (value < minValue || value > maxValue || minValue === maxValue) return range[0];

    if (typeof scale === 'function') return scale(value, domain, range);

    switch (scale) {
      case 'linear':
        return linear(value, domain, range);
      case 'log':
        return log(value, domain, range);
      case 'pow':
        return pow(value, domain, range, 2);
      case 'sqrt':
        return sqrt(value, domain, range);
      default:
        return range[0];
    }
  };
}
