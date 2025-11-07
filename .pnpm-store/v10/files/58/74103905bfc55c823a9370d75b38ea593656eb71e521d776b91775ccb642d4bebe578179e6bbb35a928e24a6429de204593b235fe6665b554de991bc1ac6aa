import { identity } from '@antv/util';
import { Base } from './base';
import { ContinuousOptions, Domain, Range, NiceMethod, TickMethodOptions, CreateTransform, Transform } from '../types';
import {
  createInterpolateNumber,
  createInterpolateRound,
  createClamp,
  createNormalize,
  bisect,
  compose,
  d3LinearNice,
  isValid,
} from '../utils';

/** 当 domain 和 range 只有一段的时候的 map 的 工厂函数 */
const createBiMap: CreateTransform = (domain, range, createInterpolate) => {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  let normalize: Transform;
  let interpolate: Transform;
  if (d0 < d1) {
    normalize = createNormalize(d0, d1);
    interpolate = createInterpolate(r0, r1);
  } else {
    normalize = createNormalize(d1, d0);
    interpolate = createInterpolate(r1, r0);
  }
  return compose(interpolate, normalize);
};

/** 当 domain 和 range 有多段时候的 map 的 工厂函数 */
const createPolyMap: CreateTransform = (domain, range, createInterpolate) => {
  const len = Math.min(domain.length, range.length) - 1;
  const normalizeList: Transform[] = new Array(len);
  const interpolateList: Transform[] = new Array(len);

  const reverse = domain[0] > domain[len];
  const ascendingDomain = reverse ? [...domain].reverse() : domain;
  const ascendingRange = reverse ? [...range].reverse() : range;

  // 每一段都生成 normalize 和 interpolate
  for (let i = 0; i < len; i += 1) {
    normalizeList[i] = createNormalize(ascendingDomain[i], ascendingDomain[i + 1]);
    interpolateList[i] = createInterpolate(ascendingRange[i], ascendingRange[i + 1]);
  }

  // 二分最右查找到相应的 normalize 和 interpolate
  return (x: number): number => {
    const i = bisect(domain, x, 1, len) - 1;
    const normalize = normalizeList[i];
    const interpolate = interpolateList[i];
    return compose(interpolate, normalize)(x);
  };
};

/** 选择一个分段映射的函数 */
const choosePiecewise: CreateTransform = (domain, range, interpolate, shouldRound?) => {
  const n = Math.min(domain.length, range.length);
  const createPiecewise = n > 2 ? createPolyMap : createBiMap;
  const createInterpolate = shouldRound ? createInterpolateRound : interpolate;
  return createPiecewise(domain, range, createInterpolate);
};

/**
 * Continuous 比例尺 的输入 x 和输出 y 满足：y = a * f(x) + b
 * 通过函数柯里化和复合函数可以在映射过程中去掉分支，提高性能。
 * 参考：https://github.com/d3/d3-scale/blob/master/src/continuous.js
 */
export abstract class Continuous<O extends ContinuousOptions> extends Base<O> {
  /** 实际上将 x 映射为 y 的函数 */
  protected output: Transform;

  /** 实际上将 y 映射为 x 的函数 */
  protected input: Transform;

  /**
   * 根据比例尺 和 options 选择对应的 transform 和 untransform 函数
   * y = a * f(x) + b
   * x = a * f'(y) + b
   * @returns [f(x), f'(y)]
   */
  protected abstract chooseTransforms(): Transform[];

  protected getDefaultOptions() {
    return {
      domain: [0, 1],
      range: [0, 1],
      nice: false,
      clamp: false,
      round: false,
      interpolate: createInterpolateNumber,
      tickCount: 5,
    } as O;
  }

  /**
   * y = interpolate(normalize(clamp(transform(x))))
   */
  public map(x: Domain<O>) {
    if (!isValid(x)) return this.options.unknown;
    return this.output(x);
  }

  /**
   * x = transform(clamp(interpolate(normalize(y))))
   */
  public invert(x: Range<O>) {
    if (!isValid(x)) return this.options.unknown;
    return this.input(x);
  }

  protected nice() {
    if (!this.options.nice) return;
    const [min, max, tickCount, ...rest] = this.getTickMethodOptions();
    this.options.domain = this.chooseNice()(min, max, tickCount, ...rest);
  }

  public getTicks() {
    const { tickMethod } = this.options;
    const [min, max, tickCount, ...rest] = this.getTickMethodOptions();
    return tickMethod(min, max, tickCount, ...rest);
  }

  protected getTickMethodOptions(): TickMethodOptions {
    const { domain, tickCount } = this.options;
    const min = domain[0];
    const max = domain[domain.length - 1];
    return [min, max, tickCount];
  }

  protected chooseNice(): NiceMethod<number | Date> {
    return d3LinearNice;
  }

  protected rescale() {
    this.nice();
    const [transform, untransform] = this.chooseTransforms();
    this.composeOutput(transform, this.chooseClamp(transform));
    this.composeInput(transform, untransform, this.chooseClamp(untransform));
  }

  protected chooseClamp(transform: Transform) {
    const { clamp: shouldClamp, range } = this.options;
    const domain = this.options.domain.map(transform);
    const n = Math.min(domain.length, range.length);
    return shouldClamp ? createClamp(domain[0], domain[n - 1]) : identity;
  }

  protected composeOutput(transform: Transform, clamp: Transform) {
    const { domain, range, round, interpolate } = this.options;
    const piecewise = choosePiecewise(domain.map(transform), range, interpolate, round);
    this.output = compose(piecewise, clamp, transform);
  }

  protected composeInput(transform: Transform, untransform: Transform, clamp: Transform) {
    const { domain, range } = this.options;
    const piecewise = choosePiecewise(range, domain.map(transform), createInterpolateNumber);
    this.input = compose(untransform, clamp, piecewise);
  }
}
