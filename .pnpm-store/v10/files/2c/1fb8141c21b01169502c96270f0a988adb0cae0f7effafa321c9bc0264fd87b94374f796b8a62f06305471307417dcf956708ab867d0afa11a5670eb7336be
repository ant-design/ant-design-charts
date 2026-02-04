import { EXTENSION_REGISTRY } from './store';
/**
 * <zh/> 根据类别和类型获取扩展
 *
 * <en/> Get the extension by category and type
 * @param category - <zh/> 扩展类别 | <en/> Extension category
 * @param type - <zh/> 扩展类型 | <en/> Extension type
 * @returns <zh/> 注册的扩展 | <en/> Registered extension
 * @internal
 */
export function getExtension(category, type) {
    var _a;
    const extension = (_a = EXTENSION_REGISTRY[category]) === null || _a === void 0 ? void 0 : _a[type];
    if (extension) {
        return extension;
    }
    return undefined;
}
/**
 * <zh/> 根据类别获取扩展
 *
 * <en/> Get the extension by category and type
 * @param category - <zh/> 扩展类别 | <en/> Extension category
 * @returns <zh/> 注册的扩展 | <en/> Registered extension
 * @internal
 */
export function getExtensions(category) {
    return EXTENSION_REGISTRY[category];
}
//# sourceMappingURL=get.js.map