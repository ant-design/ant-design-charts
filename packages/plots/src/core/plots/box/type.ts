import type { BaseOptions, Options } from '../../types/common';

export type BoxOptions = Options & BaseOptions & {
  // box 预处理, boxplot 非预处理
  boxType: 'boxplot' | 'box';
};
