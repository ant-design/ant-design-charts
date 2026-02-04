import { ConstantOptions, Domain, Range } from '../types';
import { Base } from './base';
export declare class Constant extends Base<ConstantOptions> {
    /**
     * 返回需要覆盖的默认选项
     * @returns 需要覆盖的默认选项
     */
    protected getDefaultOptions(): ConstantOptions;
    /**
     * 输入和输出满足：y = b，其中 b 是一个常量，是 options.range 的第一个元素
     * @param _ 输入值
     * @returns 输出值（常量）
     */
    map(_: Domain<ConstantOptions>): any;
    /**
     * 如果 x 是该比例尺的常量（x === b），返回输入值的范围（即定义域），否者返回 []
     * @param x 输出值 (常量）
     * @returns 定义域
     */
    invert(x: Range<ConstantOptions>): any[];
    getTicks(): number[];
    /**
     * 克隆 Constant Scale
     * @returns 拥有相同选项且独立的 Constant Scale
     */
    clone(): Constant;
}
