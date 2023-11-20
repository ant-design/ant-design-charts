import type { BaseOptions, Options } from '../../types/common';

export type VennOptions = Options & BaseOptions;

export enum DefaultTransformKey {
  color = 'key',
  d = 'path',
}
