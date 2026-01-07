import { identity } from '@antv/util';
import { d3Ticks } from '../tick-methods/d3-ticks';
import { CreateTransform, Transform, SequentialOptions, Interpolator } from '../types';
import { compose, createInterpolateNumber, createNormalize, interpolatize } from '../utils';
import { Linear } from './linear';

// Modify interface exposed by Sequential.
export interface Sequential {
  invert: undefined;
  getOptions(): SequentialOptions;
  update(updateOptions: Partial<SequentialOptions>): void;
}

function rangeOf(interpolator: Interpolator): number[] {
  return [interpolator(0), interpolator(1)];
}
const normalizeDomain: CreateTransform = (domain: SequentialOptions['domain']) => {
  const [d0, d1] = domain;
  // [d0, d1] => [0, 1]
  const normalize: Transform = compose(createInterpolateNumber(0, 1), createNormalize(d0, d1));
  return normalize;
};

/**
 * Sequential 比例尺
 *
 * 构造可创建一个在输入和输出之间通过插值函数进行转换的比例尺
 */
// @Sequentialish
@interpolatize(rangeOf, normalizeDomain)
export class Sequential extends Linear {
  protected getDefaultOptions(): SequentialOptions {
    return {
      domain: [0, 1],
      unknown: undefined,
      nice: false,
      clamp: false,
      round: false,
      interpolator: identity,
      tickMethod: d3Ticks,
      tickCount: 5,
    };
  }

  constructor(options?: SequentialOptions) {
    super(options);
  }

  public clone() {
    return new Sequential(this.options);
  }
}
