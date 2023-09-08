import type { BaseOptions, Options } from '../../types/common';

export type TinyProgressOptions = Options & BaseOptions & {
  // 进度
  percent: number;
  // 颜色
  color?: string[];
};
