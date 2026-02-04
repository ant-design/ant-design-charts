import { Band } from './band';
import { PointOptions, BandOptions } from '../types';
/**
 * Point 比例尺
 *
 * 一种特殊的 band scale，它的 bandWidth 恒为 0。
 *
 * 由于部分选项较为抽象，见下图描述：
 *
 * PO = Padding = PaddingInner
 * domain =  ["A", "B", "C"]
 *
 * |<------------------------------------------- range ------------------------------------------->|
 * |             |                                 |                                 |             |
 * |<--step*PO-->|<--------------step------------->|<--------------step------------->|<--step*PO-->|
 * |             |                                 |                                 |             |
 * |             A                                 B                                 C             |
 * |-----------------------------------------------------------------------------------------------|
 *
 * 性能方便较 d3 快出 8 - 9 倍
 */
export declare class Point extends Band<PointOptions & BandOptions> {
    protected getDefaultOptions(): {
        domain: any[];
        range: number[];
        align: number;
        round: boolean;
        padding: number;
        unknown: symbol;
        paddingInner: number;
        paddingOuter: number;
    };
    constructor(options?: PointOptions);
    protected getPaddingInner(): number;
    clone(): Point;
    update(options?: PointOptions): void;
    protected getPaddingOuter(): number;
}
