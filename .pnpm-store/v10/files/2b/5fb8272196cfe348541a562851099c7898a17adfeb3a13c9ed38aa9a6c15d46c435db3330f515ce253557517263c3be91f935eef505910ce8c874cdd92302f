import { InternMap } from '../utils';
import { BandOptions, Domain } from '../types';
import { Ordinal, defaultUnknown } from './ordinal';

function normalize(array: number[]): number[] {
  const min = Math.min(...array);
  return array.map((d) => d / min);
}

function splice(array: number[], n: number) {
  const sn = array.length;
  const diff = n - sn;
  return diff > 0 ? [...array, ...new Array(diff).fill(1)] : diff < 0 ? array.slice(0, n) : array;
}

function pretty(n: number) {
  return Math.round(n * 1e12) / 1e12;
}

interface BandStateOptions {
  /** 定义域 */
  domain: any[];
  /** 初始的值域，连续 */
  range: number[];
  /** 内部边距 */
  paddingInner?: number;
  /** 两侧边距 */
  paddingOuter?: number;
  /** 是否取整 */
  round?: boolean;
  /** 对齐，取值为 0 - 1 的整数，例如 0.5 表示居中 */
  align?: number;
  /** 每个条的宽度 (bandWidth) 的比例 */
  flex?: number[];
}

/**
 * 基于 band 基础配置获取存在 flex band 的状态
 */
function computeFlexBandState(options: BandStateOptions) {
  // 如果 flex 比 domain 少，那么就补全
  // 如果 flex 比 domain 多，就截取
  const { domain, range, paddingOuter, paddingInner, flex: F, round, align } = options;
  const n = domain.length;
  const flex = splice(F, n);

  // 根据下面的等式可以计算出所有 step 的总和
  // stepSum = step1 + step2 ... + stepN;
  // stepAverage = stepSum / n;
  // PO = stepAverage * paddingOuter;
  // PI = stepAverage * paddingInner;
  // width = PO * 2 + stepSum - PI;
  const [start, end] = range;
  const width = end - start;
  const ratio = (2 / n) * paddingOuter + 1 - (1 / n) * paddingInner;
  const stepSum = width / ratio;

  // stepSum = (b1 + PI) + (b2 + PI) ... + (bN + PI)
  // = bandSum + PI * n;
  const PI = (stepSum * paddingInner) / n;
  const bandWidthSum = stepSum - n * PI;

  // 计算出最小的 bandWidth
  const normalizedFlex = normalize(flex);
  const flexSum = normalizedFlex.reduce((sum, value) => sum + value);
  const minBandWidth = bandWidthSum / flexSum;

  // 计算每个 bandWidth 和 step，并且用定义域内的值索引
  const valueBandWidth: InternMap<string, any> = new InternMap(
    domain.map((d, i) => {
      const bandWidth = normalizedFlex[i] * minBandWidth;
      return [d, round ? Math.floor(bandWidth) : bandWidth];
    })
  );
  const valueStep: InternMap<string, any> = new InternMap(
    domain.map((d, i) => {
      const bandWidth = normalizedFlex[i] * minBandWidth;
      const step = bandWidth + PI;
      return [d, round ? Math.floor(step) : step];
    })
  );

  // 计算起始位置的偏移量
  // 因为 step 可能被 round 了，重新计算所有的 step 的总和
  const finalStepSum = Array.from(valueStep.values()).reduce((sum, value) => sum + value);
  const outerPaddingSum = width - (finalStepSum - (finalStepSum / n) * paddingInner);
  const offset = outerPaddingSum * align;

  // 计算 adjustedRange，也就是 domain 中每个值映射之后的值
  const bandStart = start + offset;
  let prev = round ? Math.round(bandStart) : bandStart;
  const adjustedRange = new Array(n);
  for (let i = 0; i < n; i += 1) {
    // 简单处理精度问题
    adjustedRange[i] = pretty(prev);
    const value = domain[i];
    prev += valueStep.get(value);
  }

  return {
    valueBandWidth,
    valueStep,
    adjustedRange,
  };
}

/**
 * 基于 band 基础配置获取 band 的状态
 */
function computeBandState(options: BandStateOptions) {
  const { domain } = options;
  const n = domain.length;
  if (n === 0) {
    return {
      valueBandWidth: undefined,
      valueStep: undefined,
      adjustedRange: [],
    };
  }
  const hasFlex = !!options.flex?.length;
  if (hasFlex) {
    return computeFlexBandState(options);
  }

  const { range, paddingOuter, paddingInner, round, align } = options;

  let step: number;
  let bandWidth: number;

  let rangeStart = range[0];
  const rangeEnd = range[1];

  // range 的计算方式如下：
  // = stop - start
  // = (n * step(n 个 step) )
  // + (2 * step * paddingOuter(两边的 padding))
  // - (1 * step * paddingInner(多出的一个 inner))
  const deltaRange = rangeEnd - rangeStart;
  const outerTotal = paddingOuter * 2;
  const innerTotal = n - paddingInner;
  step = deltaRange / Math.max(1, outerTotal + innerTotal);

  // 优化成整数
  if (round) {
    step = Math.floor(step);
  }

  // 基于 align 实现偏移
  rangeStart += (deltaRange - step * (n - paddingInner)) * align;

  // 一个 step 的组成如下：
  // step = bandWidth + step * paddingInner，
  // 则 bandWidth = step - step * (paddingInner)
  bandWidth = step * (1 - paddingInner);

  if (round) {
    rangeStart = Math.round(rangeStart);
    bandWidth = Math.round(bandWidth);
  }

  // 转化后的 range
  const adjustedRange = new Array(n).fill(0).map((_, i) => rangeStart + i * step);

  return {
    valueStep: step,
    valueBandWidth: bandWidth,
    adjustedRange,
  };
}

/**
 * Band 比例尺
 *
 * 一种特殊的 ordinal scale，区别在于值域的范围是连续的。
 * 使用的场景例如柱状图，可以用来定位各个柱子水平方向距离原点开始绘制的距离、各柱子之间的间距
 *
 * 由于部分选项较为抽象，见下图描述：
 *
 * BN = bandWidthN
 * SN = stepN
 * domain = [A, B]
 *
 * 约束关系如下
 * width = PO + B1 + PI + B2 + PI ... + BN + PO;
 * PO = (S1 + S2 + ... SN) / N * paddingOuter
 * PI = (S1 + S2 + ... SN) / N * paddingInner
 * BN / BN-1 = flex[n] / flex[n-1]
 *
 * |<------------------------------------------- range ------------------------------------------->|
 * |             |                   |             |                   |             |             |
 * |<-----PO---->|<------B1--------->|<-----PI---->|<-------B2-------->|<----PI----->|<-----PO---->|
 * |             | ***************** |             | ***************** |             |             |
 * |             | ******* A ******* |             | ******* B ******* |             |             |
 * |             | ***************** |             | ***************** |             |             |
 * |             |<--------------S1--------------->| <--------------S2-------------->|                                              |
 * |-----------------------------------------------------------------------------------------------|
 *
 */
export class Band<O extends BandOptions = BandOptions> extends Ordinal<O> {
  // 转换过的 range
  private adjustedRange: O['range'];

  // domain 中每一个 value 对应的条的宽度（不包含 padding）
  private valueBandWidth: InternMap<any, number> | number;

  // domain 中每一个 value 对应的条的步长（包含 padding）
  private valueStep: InternMap<any, number> | number;

  // 覆盖默认配置
  protected getDefaultOptions() {
    return {
      domain: [],
      range: [0, 1],
      align: 0.5,
      round: false,
      paddingInner: 0,
      paddingOuter: 0,
      padding: 0,
      unknown: defaultUnknown,
      flex: [],
    } as O;
  }

  // 显示指定 options 的类型为 OrdinalOptions，从而推断出 O 的类型
  constructor(options?: BandOptions) {
    super(options as O);
  }

  public clone() {
    return new Band<O>(this.options);
  }

  public getStep(x?: Domain<BandOptions>) {
    if (this.valueStep === undefined) return 1;

    // 没有 flex 的情况时, valueStep 是 number 类型
    if (typeof this.valueStep === 'number') {
      return this.valueStep;
    }

    // 对于 flex 都为 1 的情况，x 不是必须要传入的
    // 这种情况所有的条的 step 都相等，所以返回第一个就好
    if (x === undefined) return Array.from(this.valueStep.values())[0];
    return this.valueStep.get(x);
  }

  public getBandWidth(x?: Domain<BandOptions>) {
    if (this.valueBandWidth === undefined) return 1;

    // 没有 flex, valueBandWidth 是 number 类型
    if (typeof this.valueBandWidth === 'number') {
      return this.valueBandWidth;
    }

    // 对于 flex 都为 1 的情况，x 不是必须要传入的
    // 这种情况所有的条的 bandWidth 都相等，所以返回第一个
    if (x === undefined) return Array.from(this.valueBandWidth.values())[0];
    return this.valueBandWidth.get(x);
  }

  public getRange() {
    return this.adjustedRange;
  }

  protected getPaddingInner() {
    const { padding, paddingInner } = this.options;
    return padding > 0 ? padding : paddingInner;
  }

  protected getPaddingOuter() {
    const { padding, paddingOuter } = this.options;
    return padding > 0 ? padding : paddingOuter;
  }

  protected rescale() {
    super.rescale();
    // 当用户配置了opt.padding 且非 0 时，我们覆盖已经设置的 paddingInner paddingOuter
    // 我们约定 padding 的优先级较 paddingInner 和 paddingOuter 高
    const { align, domain, range, round, flex } = this.options;
    const { adjustedRange, valueBandWidth, valueStep } = computeBandState({
      align,
      range,
      round,
      flex,
      paddingInner: this.getPaddingInner(),
      paddingOuter: this.getPaddingOuter(),
      domain,
    });

    // 更新必要的属性
    this.valueStep = valueStep;
    this.valueBandWidth = valueBandWidth;
    this.adjustedRange = adjustedRange;
  }
}
