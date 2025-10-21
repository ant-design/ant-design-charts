import type { BaseStyleProps } from '@antv/g';

type ConflictStyleProps = 'filter';

export type OmitConflictStyleProps<T extends BaseStyleProps> = {
  [K in keyof T as K extends ConflictStyleProps ? never : K]: T[K];
};
