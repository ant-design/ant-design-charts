import { Plot } from '../../base';
import type { Adaptor } from '../../types';
import { adaptor } from '../bar/adaptor';
import { ColumnOptions } from './type';

export type { ColumnOptions };

export class Column extends Plot<ColumnOptions> {
  /** 图表类型 */
  public type = 'column';

  /**
   * 获取 折线图 默认配置项
   * 供外部使用
   */
  static getDefaultOptions(): Partial<ColumnOptions> {
    return {
      type: 'view',
      scale: {
        y: { nice: true },
      },
      interaction: {
        tooltip: {
          shared: true,
        },
      },
      axis: {
        y: { title: false },
        x: { title: false },
      },
      children: [
        {
          type: 'interval',
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
    return Column.getDefaultOptions();
  }

  /**
   * 折线图适配器
   */
  protected getSchemaAdaptor(): (params: Adaptor<ColumnOptions>) => void {
    return adaptor;
  }
}
