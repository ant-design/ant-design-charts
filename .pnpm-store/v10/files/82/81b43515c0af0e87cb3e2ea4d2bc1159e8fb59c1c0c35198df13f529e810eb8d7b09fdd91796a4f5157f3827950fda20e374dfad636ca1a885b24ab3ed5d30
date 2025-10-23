import { Base } from './base';
import { IdentityOptions, Domain, Range } from '../types';
export declare class Identity extends Base<IdentityOptions> {
    /**
     * 返回需要覆盖的默认选项
     * @returns 需要覆盖的默认选项
     */
    protected getDefaultOptions(): IdentityOptions;
    /**
     * 输入和输出满足：y = x
     * @param x 输入值
     * @returns 输出值
     */
    map(x: Domain<IdentityOptions>): any;
    /**
     * map 的逆运算：x = y，在这里和 map 是相同方法
     * @param x 输出值
     * @returns 输入值
     */
    invert(x: Range<IdentityOptions>): any;
    /**
     * 克隆 Identity Scale
     * @returns 拥有相同选项且独立的 Identity Scale
     */
    clone(): Identity;
    /**
     * 根据比例尺的配置去生成 ticks，该 ticks 主要用于生成坐标轴
     * @returns 返回一个 ticks 的数组
     */
    getTicks(): Range<IdentityOptions>[];
}
