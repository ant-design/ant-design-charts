import type { BaseOptions, Options, AttrStyle } from '../../types/common';

export type WaterfallOptions = Options &
  BaseOptions & {
    /***/
    linkStyle: AttrStyle;
  };
