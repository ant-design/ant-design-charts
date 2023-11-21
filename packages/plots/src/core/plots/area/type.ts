import type { Options } from '../../types/common';

export type AreaOptions = Omit<Options, 'yField'> & {
  /**
   * @title y轴字段
   */
  readonly yField?: string | string[];
};
