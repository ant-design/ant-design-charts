import type { BaseOptions, Options } from '../../types/common';

export type FunnelOptions = Options &
  BaseOptions & {
    compareField?: string;
    isTransposed?: boolean;
  };
