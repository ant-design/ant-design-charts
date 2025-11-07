"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identity = void 0;
const util_1 = require("@antv/util");
const base_1 = require("./base");
const wilkinson_extended_1 = require("../tick-methods/wilkinson-extended");
const utils_1 = require("../utils");
class Identity extends base_1.Base {
    /**
     * 返回需要覆盖的默认选项
     * @returns 需要覆盖的默认选项
     */
    getDefaultOptions() {
        return {
            domain: [0, 1],
            range: [0, 1],
            tickCount: 5,
            unknown: undefined,
            tickMethod: wilkinson_extended_1.wilkinsonExtended,
        };
    }
    /**
     * 输入和输出满足：y = x
     * @param x 输入值
     * @returns 输出值
     */
    map(x) {
        return (0, utils_1.isValid)(x) ? x : this.options.unknown;
    }
    /**
     * map 的逆运算：x = y，在这里和 map 是相同方法
     * @param x 输出值
     * @returns 输入值
     */
    invert(x) {
        return this.map(x);
    }
    /**
     * 克隆 Identity Scale
     * @returns 拥有相同选项且独立的 Identity Scale
     */
    clone() {
        return new Identity(this.options);
    }
    /**
     * 根据比例尺的配置去生成 ticks，该 ticks 主要用于生成坐标轴
     * @returns 返回一个 ticks 的数组
     */
    getTicks() {
        const { domain, tickCount, tickMethod } = this.options;
        const [min, max] = domain;
        if (!(0, util_1.isNumber)(min) || !(0, util_1.isNumber)(max))
            return [];
        return tickMethod(min, max, tickCount);
    }
}
exports.Identity = Identity;
//# sourceMappingURL=identity.js.map