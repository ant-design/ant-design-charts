import type { BaseOptions, Options } from '../../types/common';

export type VennOptions = Options &
  BaseOptions & {
    /**
     * @title 集合空间键名
     */
    setsField: string;
    /**
     * @title 集合大小键名
     */
    sizeField: string;
  };

export enum DefaultTransformKey {
  color = 'key',
  d = 'path',
}
