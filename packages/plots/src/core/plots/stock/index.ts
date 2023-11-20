import { Plot } from '../../base';
import type { Adaptor } from '../../types';
import { adaptor } from './adaptor';
import { StockOptions } from './type';

const RISING_COLOR = '#ef5350';
const FALLING_COLOR = '#26a69a';

export const DEFAULT_COLORS = [FALLING_COLOR, '#999999', RISING_COLOR];

export type { StockOptions };

export class Stock extends Plot<StockOptions> {
  /** 图表类型 */
  public type = 'stock';

  /**
   * 获取 股票图 默认配置项
   * 供外部使用
   */
  static getDefaultOptions(): Partial<StockOptions> {
    return {
      type: 'view',
      scale: {
        color: {
          domain: [-1, 0, 1],
          range: DEFAULT_COLORS,
        },
        y: { nice: true },
      },
      children: [
        // shadow
        {
          type: 'link',
        },
        // real body
        {
          type: 'link',
        },
      ],
      axis: {
        x: { title: false, grid: false },
        y: { title: false, grid: true, gridLineDash: null },
      },
      animate: { enter: { type: 'scaleInY' } },
      interaction: {
        tooltip: {
          shared: true,
          marker: false,
          groupName: false,
          crosshairs: true,
        },
      },
    };
  }

  /**
   * 获取 股票图 默认配置
   */
  protected getDefaultOptions() {
    return Stock.getDefaultOptions();
  }

  /**
   * 股票图适配器
   */
  protected getSchemaAdaptor(): (params: Adaptor<StockOptions>) => void {
    return adaptor;
  }
}
