import type { BaseOptions, Options } from '../../types/common';

export type RadarOptions = Options & BaseOptions & {
  coordinateType?: 'radar' | 'polar';
};
