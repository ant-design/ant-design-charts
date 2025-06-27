import type { Options } from '../../types/common';

export type BulletOptions = Options & {
  color: {
    ranges: string | string[];
    measures: string | string[];
    target: string | string[];
  };
  xField: string;
  rangeField: string;
  measureField: string;
  targetField: string;
  mapField: {
    ranges: string | string[];
    measures: string | string[];
    target: string | string[];
  };
  range: BulletOptions;
  measure: BulletOptions;
  target: BulletOptions;
};
