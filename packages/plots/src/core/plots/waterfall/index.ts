import { Plot } from '../../base';
import type { Adaptor } from '../../types';
import { adaptor } from './adaptor';
import { WATERFALL_VALUE } from './constants';
import { WaterfallOptions } from './type';

export type { WaterfallOptions };

export class Waterfall extends Plot<WaterfallOptions> {
  /** 图表类型 */
  public type = 'waterfall';

  /**
   * 获取 折线图 默认配置项
   * 供外部使用
   */
  static getDefaultOptions(): Partial<WaterfallOptions> {
    return {
      type: 'view',
      legend: null,
      tooltip: {
        field: WATERFALL_VALUE,
        valueFormatter: '~s',
        name: 'value',
      },
      axis: {
        y: {
          title: null,
          labelFormatter: '~s',
        },
        x: {
          title: null,
        },
      },
      children: [
        {
          type: 'interval',
          // 层级比 link 高, 防止动画或 scrollbar 重绘时 ,link 在前
          zIndex: 1,
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
    return Waterfall.getDefaultOptions();
  }

  /**
   * 折线图适配器
   */
  protected getSchemaAdaptor(): (params: Adaptor<WaterfallOptions>) => void {
    return adaptor;
  }
}
