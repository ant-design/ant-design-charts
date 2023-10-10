import { Plot } from '../../base';
import { adaptor } from './adaptor';

import type { WordCloudOptions } from './type';
import type { Adaptor } from '../../types';

export type { WordCloudOptions };

export class WordCloud extends Plot<WordCloudOptions> {
  /** 图表类型 */
  public type = 'WordCloud';

  /**
   * 获取 词云图 默认配置项
   * 供外部使用
   */
  static getDefaultOptions(): Partial<WordCloudOptions> {
    return { type: 'view', children: [{ type: 'wordCloud' }] };
  }

  /**
   * 获取 词云图 默认配置
   */
  protected getDefaultOptions() {
    return WordCloud.getDefaultOptions();
  }

  /**
   * 词云图适配器
   */
  protected getSchemaAdaptor(): (params: Adaptor<WordCloudOptions>) => void {
    return adaptor;
  }
}
