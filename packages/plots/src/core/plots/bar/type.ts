import type { BaseOptions, Options } from '../../types/common';

type CommonOptions = Options & BaseOptions;

export type BarOptions = Options &
  BaseOptions & {
    /**
     * @title mark 背景配置
     */
    markBackground?: CommonOptions;
  };
