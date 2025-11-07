"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const util_1 = require("@antv/util");
class Base {
    /**
     * 将用户传入的选项和默认选项合并，生成当前比例尺的选项
     */
    transformBreaks(options) {
        return options;
    }
    /**
     * 构造函数，根据自定义的选项和默认选项生成当前选项
     * @param options 需要自定义配置的选项
     */
    constructor(options) {
        var _a;
        this.options = (0, util_1.deepMix)({}, this.getDefaultOptions());
        this.update(((_a = options === null || options === void 0 ? void 0 : options.breaks) === null || _a === void 0 ? void 0 : _a.length) ? this.transformBreaks(options) : options);
    }
    /**
     * 返回当前的所有选项
     * @returns 当前的所有选项
     */
    getOptions() {
        return this.options;
    }
    /**
     * 更新选项和比例尺的内部状态
     * @param updateOptions 需要更新的选项
     */
    update(updateOptions = {}) {
        const options = updateOptions.breaks ? this.transformBreaks(updateOptions) : updateOptions;
        this.options = (0, util_1.deepMix)({}, this.options, options);
        this.rescale(options);
    }
    /**
     * 根据需要更新 options 和更新后的 options 更新 scale 的内部状态，
     * 在函数内部可以用 this.options 获得更新后的 options
     * @param options 需要更新的 options
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rescale(options) { }
}
exports.Base = Base;
//# sourceMappingURL=base.js.map