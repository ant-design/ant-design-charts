import type { Options } from '../../types/common';

export type FunnelOptions = Options & {
  compareField?: string;
  seriesField?: string;
  isTransposed?: boolean;
};
