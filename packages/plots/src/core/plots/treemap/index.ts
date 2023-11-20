import { Plot } from '../../base';
import { adaptor } from './adaptor';

import type { TreemapOptions } from './type';
import type { Adaptor } from '../../types';

export type { TreemapOptions };

export class Treemap extends Plot<TreemapOptions> {
  /** 图表类型 */
  public type = 'treemap';

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

  protected getDefaultOptions() {
    return Treemap.getDefaultOptions();
  }

  protected getSchemaAdaptor(): (params: Adaptor<TreemapOptions>) => void {
    return adaptor;
  }
}
