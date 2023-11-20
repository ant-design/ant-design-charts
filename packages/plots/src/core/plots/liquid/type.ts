import type { Options } from '../../types/common';

export type LiquidOptions = Omit<Options, 'data'> & {
  percent?: boolean;
};
