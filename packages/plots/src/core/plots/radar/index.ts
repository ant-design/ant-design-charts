import { adaptor } from './adaptor';
import { Plot } from '../../base';

import type { RadarOptions } from './type';
import type { Adaptor } from '../../types';

export type { RadarOptions };

export class Radar extends Plot<RadarOptions> {
  /** 图表类型 */
  public type = 'radar';

  /**
   * 获取 雷达图 默认配置项
   * 供外部使用
   */
  static getDefaultOptions(): Partial<RadarOptions> {
    return {
      children: [{ type: 'line' }],
      // 有  polar 和 radar 两种极坐标形式
      coordinateType: 'polar',
    };
  }

  /**
   * 获取 雷达图 默认配置
   */
  protected getDefaultOptions() {
    return Radar.getDefaultOptions();
  }

  /**
   * 雷达图适配器
   */
  protected getSchemaAdaptor(): (params: Adaptor<RadarOptions>) => void {
    return adaptor;
  }
}
