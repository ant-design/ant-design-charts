import type { BaseOptions, Options } from '../../types/common';

export type ViolinOptions = Options & BaseOptions & {
  violinType?: 'normal' | 'density' | 'polar'
};
