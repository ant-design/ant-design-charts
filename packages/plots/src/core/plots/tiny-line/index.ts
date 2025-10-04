import { Plot } from '../../base';
import type { Adaptor } from '../../types';
import { adaptor } from './adaptor';
import { TinyLineOptions } from './type';

export type { TinyLineOptions };

export class TinyLine extends Plot<TinyLineOptions> {
  /** 图表类型 */
  public type = 'TinyLine';

  /**
   * 获取 迷你折线图 默认配置项
   * 供外部使用
   */
  static getDefaultOptions(): Partial<TinyLineOptions> {
    return {
      type: 'view',
      children: [{ type: 'line', axis: false }],
      // 使用该动画，会导致线形图-连接空值 一进入页面渲染不出来，必须要更改窗口尺寸触发重新渲染。建议动画暂时使用默认
      // animate: {
      //   enter: { type: 'growInX', duration: 500 },
      // },
      padding: 0,
      margin: 0,
      tooltip: false,
    };
  }

  /**
   * 获取 迷你折线图 默认配置
   */
  protected getDefaultOptions() {
    return TinyLine.getDefaultOptions();
  }

  /**
   * 迷你折线图适配器
   */
  protected getSchemaAdaptor(): (params: Adaptor<TinyLineOptions>) => void {
    return adaptor;
  }
}
