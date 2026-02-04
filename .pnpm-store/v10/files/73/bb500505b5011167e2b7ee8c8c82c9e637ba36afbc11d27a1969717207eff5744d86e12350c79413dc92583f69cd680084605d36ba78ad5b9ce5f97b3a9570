"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constant = void 0;
const util_1 = require("@antv/util");
const d3_ticks_1 = require("../tick-methods/d3-ticks");
const base_1 = require("./base");
class Constant extends base_1.Base {
    /**
     * 返回需要覆盖的默认选项
     * @returns 需要覆盖的默认选项
     */
    getDefaultOptions() {
        return {
            range: [0],
            domain: [0, 1],
            unknown: undefined,
            tickCount: 5,
            tickMethod: d3_ticks_1.d3Ticks,
        };
    }
    /**
     * 输入和输出满足：y = b，其中 b 是一个常量，是 options.range 的第一个元素
     * @param _ 输入值
     * @returns 输出值（常量）
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    map(_) {
        const [v] = this.options.range;
        return v !== undefined ? v : this.options.unknown;
    }
    /**
     * 如果 x 是该比例尺的常量（x === b），返回输入值的范围（即定义域），否者返回 []
     * @param x 输出值 (常量）
     * @returns 定义域
     */
    invert(x) {
        const [v] = this.options.range;
        return x === v && v !== undefined ? this.options.domain : [];
    }
    getTicks() {
        const { tickMethod, domain, tickCount } = this.options;
        const [a, b] = domain;
        if (!(0, util_1.isNumber)(a) || !(0, util_1.isNumber)(b))
            return [];
        return tickMethod(a, b, tickCount);
    }
    /**
     * 克隆 Constant Scale
     * @returns 拥有相同选项且独立的 Constant Scale
     */
    clone() {
        return new Constant(this.options);
    }
}
exports.Constant = Constant;
//# sourceMappingURL=constant.js.map