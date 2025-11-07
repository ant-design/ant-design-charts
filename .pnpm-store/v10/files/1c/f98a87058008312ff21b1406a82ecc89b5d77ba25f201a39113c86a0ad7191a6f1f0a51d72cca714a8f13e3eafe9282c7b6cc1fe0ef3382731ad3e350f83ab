"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeOf = themeOf;
const constants_1 = require("../constants");
const get_1 = require("../registry/get");
const print_1 = require("./print");
/**
 * <zh/> 获取主题配置
 *
 * <en/> Get theme options
 * @param options - <zh/> 图配置项 <en/> graph options
 * @returns <zh/> 主题配置 <en/> theme options
 */
function themeOf(options) {
    const { theme } = options;
    if (!theme)
        return {};
    const themeOptions = (0, get_1.getExtension)(constants_1.ExtensionCategory.THEME, theme);
    if (themeOptions)
        return themeOptions;
    print_1.print.warn(`The theme of ${theme} is not registered.`);
    return {};
}
//# sourceMappingURL=theme.js.map