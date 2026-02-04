import { identity } from '@antv/util';
import { d3Ticks } from '../tick-methods/d3-ticks';
import { CreateTransform, Transform, DivergingOptions, Interpolator } from '../types';
import { compose, createInterpolateNumber, createNormalize, interpolatize } from '../utils';
import { Linear } from './linear';

// Modify interface exposed by Diverging.
export interface Diverging {
  invert: undefined;
  getOptions(): DivergingOptions;
  update(updateOptions: Partial<DivergingOptions>): void;
}

function rangeOf(interpolator: Interpolator): number[] {
  return [interpolator(0), interpolator(0.5), interpolator(1)];
}

const normalizeDomain: CreateTransform = (domain: DivergingOptions['domain']) => {
  const [d0, d1, d2] = domain;
  // [d0, d1] => [0, 0.5]
  const normalizeLeft: Transform = compose(createInterpolateNumber(0, 0.5), createNormalize(d0, d1));
  // [d1, d2] => [0.5, 1]
  const normalizeRight: Transform = compose(createInterpolateNumber(0.5, 1), createNormalize(d1, d2));

  return (x: number): number => {
    // Find x belongs to the range of [d0, d1] or [d1, d2].
    if (d0 > d2) {
      return x < d1 ? normalizeRight(x) : normalizeLeft(x);
    } else {
      return x < d1 ? normalizeLeft(x) : normalizeRight(x);
    }
  };
};

/**
 * Diverging 比例尺
 *
 * 构造可创建一个在输入和输出之间通过插值函数进行转换的比例尺
 */
@interpolatize(rangeOf, normalizeDomain)
export class Diverging extends Linear {
  protected getDefaultOptions(): DivergingOptions {
    return {
      domain: [0, 0.5, 1],
      unknown: undefined,
      nice: false,
      clamp: false,
      round: false,
      interpolator: identity,
      tickMethod: d3Ticks,
      tickCount: 5,
    };
  }

  constructor(options?: DivergingOptions) {
    super(options);
  }

  public clone() {
    return new Diverging(this.options);
  }
}
