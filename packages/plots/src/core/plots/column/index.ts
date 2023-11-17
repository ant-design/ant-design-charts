import { Plot } from '../../base';
import type { Adaptor } from '../../types';
import { adaptor } from '../bar/adaptor';
import { ColumnOptions } from './type';

export type { ColumnOptions };

export class Column extends Plot<ColumnOptions> {
  /** 图表类型 */
  public type = 'column';

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

  protected getDefaultOptions() {
    return Column.getDefaultOptions();
  }

  protected getSchemaAdaptor(): (params: Adaptor<ColumnOptions>) => void {
    return adaptor;
  }
}
