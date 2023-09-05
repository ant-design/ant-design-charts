import { MarkTypes } from '@antv/g2';
import type { BaseOptions, Options } from '../../types/common';

export type HeatmapOptions = Options &
  BaseOptions & {
    /** 热力图类型 */
    mark?: MarkTypes;
  };
