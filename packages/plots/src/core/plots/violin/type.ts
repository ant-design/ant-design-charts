import type { Options } from '../../types/common';

export type ViolinOptions = Options & {
  boxplot?: boolean;
  coordinateType?: 'cartesian' | 'polar';
};
