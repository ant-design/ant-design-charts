import { BandOptions, Domain } from '../types';
import { Ordinal } from './ordinal';
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
export declare class Band<O extends BandOptions = BandOptions> extends Ordinal<O> {
    private adjustedRange;
    private valueBandWidth;
    private valueStep;
    protected getDefaultOptions(): O;
    constructor(options?: BandOptions);
    clone(): Band<O>;
    getStep(x?: Domain<BandOptions>): any;
    getBandWidth(x?: Domain<BandOptions>): any;
    getRange(): O["range"];
    protected getPaddingInner(): number;
    protected getPaddingOuter(): number;
    protected rescale(): void;
}
