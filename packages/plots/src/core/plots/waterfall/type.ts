import type { Options, AttrStyle } from '../../types/common';

export type WaterfallOptions = Omit<Options, 'children'> & {
  /**
   * @title 连线样式
   */
  linkStyle?: AttrStyle;
  children?: Array<WaterfallOptions & { zIndex?: number }>;
  connector?: Partial<Options> & { reverse?: boolean };
};
