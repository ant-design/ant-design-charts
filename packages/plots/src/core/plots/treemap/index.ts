import { Plot } from '../../base';
import { adaptor } from './adaptor';

import type { TreemapOptions } from './type';
import type { Adaptor } from '../../types';

export type { TreemapOptions };

export class Treemap extends Plot<TreemapOptions> {
  /** 图表类型 */
  public type = 'treemap';

  /**
   * 获取 折线图 默认配置项
   * 供外部使用
   */
  static getDefaultOptions(): Partial<TreemapOptions> {
    return {
      type: 'view',
      children: [
        {
          type: 'treemap',
        },
      ],
    };
  }

  /**
   * 获取 折线图 默认配置
   */
  protected getDefaultOptions() {
    return Treemap.getDefaultOptions();
  }

  /**
   * 折线图适配器
   */
  protected getSchemaAdaptor(): (params: Adaptor<TreemapOptions>) => void {
    return adaptor;
  }
}
