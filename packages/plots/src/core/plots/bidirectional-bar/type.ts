import type { BaseOptions, Options } from '../../types/common';

type CommonOptions = Options & BaseOptions;

export type BidirectionalBarOptions = Options &
  BaseOptions & {
    /**
     * @title 布局
     * @default "vertical"
     */
    layout: 'vertical' | 'horizontal';
  };
