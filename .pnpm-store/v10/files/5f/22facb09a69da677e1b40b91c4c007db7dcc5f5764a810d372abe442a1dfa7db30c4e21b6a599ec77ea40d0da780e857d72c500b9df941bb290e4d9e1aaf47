"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
const band_1 = require("./band");
const ordinal_1 = require("./ordinal");
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
class Point extends band_1.Band {
    // 覆盖默认配置
    getDefaultOptions() {
        return {
            domain: [],
            range: [0, 1],
            align: 0.5,
            round: false,
            padding: 0,
            unknown: ordinal_1.defaultUnknown,
            paddingInner: 1,
            paddingOuter: 0,
        };
    }
    // 能接受的参数只是 PointOptions，不能有 paddingInner 这些属性
    constructor(options) {
        super(options);
    }
    // Point 的 paddingInner 只能是1，不能被覆盖
    getPaddingInner() {
        return 1;
    }
    clone() {
        return new Point(this.options);
    }
    update(options) {
        super.update(options);
    }
    getPaddingOuter() {
        return this.options.padding;
    }
}
exports.Point = Point;
//# sourceMappingURL=point.js.map