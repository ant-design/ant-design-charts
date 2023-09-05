import { Plot } from '../../base';
import type { Adaptor } from '../../types';
import { adaptor } from './adaptor';
import { HeatmapOptions } from './type';

export type { HeatmapOptions };

export class Heatmap extends Plot<HeatmapOptions> {
  /** 图表类型 */
  public type = 'waterfall';

  /**
   * 获取 折线图 默认配置项
   * 供外部使用
   */
  static getDefaultOptions(): Partial<HeatmapOptions> {
    return {
      type: 'view',
      legend: null,
      tooltip: {
        valueFormatter: '~s',
      },
      axis: {
        y: {
          title: null,
          grid: true,
        },
        x: {
          title: null,
          grid: true,
        },
      },
      children: [
        {
          type: 'point',
          interaction: {
            elementHighlightByColor: {
              background: true,
            },
          },
        },
      ],
    };
  }

  /**
   * 获取 折线图 默认配置
   */
  protected getDefaultOptions() {
    return Heatmap.getDefaultOptions();
  }

  /**
   * 折线图适配器
   */
  protected getSchemaAdaptor(): (params: Adaptor<HeatmapOptions>) => void {
    return adaptor;
  }
}
