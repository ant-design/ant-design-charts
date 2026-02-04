import { OrdinalOptions, Domain, Range } from '../types';
import { Base } from './base';
type Transform = (x: any) => any;
export declare const defaultUnknown: unique symbol;
/**
 * Ordinal 比例尺
 *
 * 该比例尺具有离散的域和范围，例如将一组命名类别映射到一组颜色
 *
 * - 使用 for 替代一些基于 map 的遍历，for 循环性能远高于 forEach, map
 * - 阻止无意义的更新，只有到用户调用 map、invert 或者 update 之后才会进行相应的更新
 * - 两个 map 只初始化一次，在之后的更新中复用他们，这样我们避免了重复 new Map 带来的性能问题
 *   在大量调用 update 函数场景下，较 d3-scale 效率有质的提高
 */
export declare class Ordinal<O extends OrdinalOptions = OrdinalOptions> extends Base<O> {
    private domainIndexMap;
    private rangeIndexMap;
    protected sortedDomain: O['domain'];
    protected domainKey: Transform;
    protected rangeKey: Transform;
    protected getDefaultOptions(): O;
    constructor(options?: OrdinalOptions);
    map(x: Domain<O>): any;
    invert(y: Range<O>): any;
    protected rescale(options?: Partial<O>): void;
    clone(): Ordinal<O>;
    protected getRange(): any[];
    getDomain(): O["domain"];
}
export {};
