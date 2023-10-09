import { Plot } from '../../base';
import type { Adaptor } from '../../types';
import { adaptor } from './adaptor';
import { pick, omit, set } from '../../utils';
import { FunnelOptions } from './type';
import { FUNNEL_CONVERSATION, FUNNEL_PERCENT, FUNNEL_TOTAL_PERCENT, CUSTOM_COMVERSION_TAG_CONFIG } from './constant';
import { SKIP_DEL_CUSTOM_SIGN } from '../../constants';

export type { FunnelOptions };

export class Funnel extends Plot<FunnelOptions> {
  constructor(container: string | HTMLElement, options: FunnelOptions) {
    super(container, omit(options, ['conversionTag']));
    set(this.options, CUSTOM_COMVERSION_TAG_CONFIG, options.conversionTag);
    set(this, SKIP_DEL_CUSTOM_SIGN, true);
  }
  /** 图表类型 */
  public type = 'Funnel';

  /** 漏斗 转化率 字段 */
  static CONVERSATION_FIELD = FUNNEL_CONVERSATION;
  /** 漏斗 百分比 字段 */
  static PERCENT_FIELD = FUNNEL_PERCENT;
  /** 漏斗 总转换率百分比 字段 */
  static TOTAL_PERCENT_FIELD = FUNNEL_TOTAL_PERCENT;

  static getFields() {
    return pick(Funnel, ['CONVERSATION_FIELD', 'PERCENT_FIELD', 'TOTAL_PERCENT_FIELD']);
  }

  /**
   * 获取 漏斗图 默认配置项
   * 供外部使用
   */
  static getDefaultOptions(): Partial<FunnelOptions> {
    return {
      type: 'view',
      children: [
        {
          type: 'interval',
          transform: [
            {
              type: 'symmetryY',
            },
          ],
          // 漏斗图默认不需要坐标系
          axis: false,
          scale: {
            x: {
              padding: 0,
            },
          },
        },
      ],
      // 漏斗基本动画
      animate: { enter: { type: 'fadeIn' } },
    };
  }

  /**
   * 获取 漏斗图 默认配置
   */
  protected getDefaultOptions() {
    return Funnel.getDefaultOptions();
  }

  /**
   * 漏斗图适配器
   */
  protected getSchemaAdaptor(): (params: Adaptor<FunnelOptions>) => void {
    return adaptor;
  }
}
