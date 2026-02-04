import { Threshold } from './threshold';
import { QuantizeOptions, Range } from '../types';
import { wilkinsonExtended } from '../tick-methods/wilkinson-extended';
import { d3LinearNice } from '../utils';

/**
 * 类似 Threshold 比例尺，区别在于 thresholds 是根据连续的 domain 根据离散的 range 的数量计算而得到的。
 */
export class Quantize extends Threshold<QuantizeOptions> {
  protected getDefaultOptions(): QuantizeOptions {
    return {
      domain: [0, 1],
      range: [0.5],
      nice: false,
      tickCount: 5,
      tickMethod: wilkinsonExtended,
    };
  }

  constructor(options?: QuantizeOptions) {
    super(options);
  }

  protected nice() {
    const { nice } = this.options;
    if (nice) {
      const [min, max, tickCount] = this.getTickMethodOptions();
      this.options.domain = d3LinearNice(min, max, tickCount);
    }
  }

  public getTicks() {
    const { tickMethod } = this.options;
    const [min, max, tickCount] = this.getTickMethodOptions();
    return tickMethod(min, max, tickCount);
  }

  protected getTickMethodOptions() {
    const { domain, tickCount } = this.options;
    const min = domain[0];
    const max = domain[domain.length - 1];
    return [min, max, tickCount];
  }

  protected rescale() {
    this.nice();

    const { range, domain } = this.options;
    const [x0, x1] = domain;

    this.n = range.length - 1;
    this.thresholds = new Array(this.n);

    for (let i = 0; i < this.n; i += 1) {
      this.thresholds[i] = ((i + 1) * x1 - (i - this.n) * x0) / (this.n + 1);
    }
  }

  /**
   * 如果是在第一段后或者最后一段就把两端的值添加上
   */
  public invert(y: Range<QuantizeOptions>) {
    const [a, b] = super.invert(y);
    const [x0, x1] = this.options.domain;
    return a === undefined && b === undefined ? [a, b] : [a || x0, b || x1];
  }

  public getThresholds() {
    return this.thresholds;
  }

  public clone() {
    return new Quantize(this.options);
  }
}
