import { deepMix } from '@antv/util';
import { BaseOptions, Domain, Range, Unknown } from '../types';

export abstract class Base<O extends BaseOptions> {
  /**
   * 将定义域里面的一个值，根据转换规则，转换为值域的一个值。
   * 如果该值不合法，则返回 options.unknown
   * @param x 需要转换的值
   */
  abstract map(x: Domain<O>): Range<O> | Unknown<O>;

  /**
   * 将值域里的一个值，据转换规则，逆向转换为定义域里的一个值或者一个区间
   * @param x 需要转换的值
   */
  abstract invert(x: Range<O>): Domain<O> | Domain<O>[] | Unknown<O>;

  /**
   * 克隆一个新的比例尺，可以用于更新选项
   */
  abstract clone(): Base<O>;

  /**
   * 子类需要覆盖的默认配置
   */
  protected abstract getDefaultOptions(): Partial<O>;

  /**
   * 比例尺的选项，用于配置数据映射的规则和 ticks 的生成方式
   */
  protected options: O;

  /**
   * 构造函数，根据自定义的选项和默认选项生成当前选项
   * @param options 需要自定义配置的选项
   */
  constructor(options?: O) {
    this.options = deepMix({}, this.getDefaultOptions());
    this.update(options);
  }

  /**
   * 返回当前的所有选项
   * @returns 当前的所有选项
   */
  public getOptions(): O {
    return this.options;
  }

  /**
   * 更新选项和比例尺的内部状态
   * @param updateOptions 需要更新的选项
   */
  public update(updateOptions: Partial<O> = {}): void {
    this.options = deepMix({}, this.options, updateOptions);
    this.rescale(updateOptions);
  }

  /**
   * 根据需要更新 options 和更新后的 options 更新 scale 的内部状态，
   * 在函数内部可以用 this.options 获得更新后的 options
   * @param options 需要更新的 options
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected rescale(options?: Partial<O>): void {}
}
