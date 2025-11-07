var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { get } from '@antv/util';
/**
 * <zh/> 合并两个 节点/边/Combo 的数据
 *
 * <en/> Merge the data of two nodes/edges/combos
 * @param original - <zh/> 原始数据 | <en/> original data
 * @param modified - <zh/> 待合并的数据 | <en/> data to be merged
 * @returns <zh/> 合并后的数据 | <en/> merged data
 * @remarks
 * <zh/> 只会合并第一层的数据，data、style 下的二级数据会被覆盖
 *
 * <en/> Only the first level of data will be merged, the second level of data under data and style will be overwritten
 */
export function mergeElementsData(original, modified) {
    const { data: originalData, style: originalStyle } = original, originalAttrs = __rest(original, ["data", "style"]);
    const { data: modifiedData, style: modifiedStyle } = modified, modifiedAttrs = __rest(modified, ["data", "style"]);
    const result = Object.assign(Object.assign({}, originalAttrs), modifiedAttrs);
    if (originalData || modifiedData) {
        Object.assign(result, { data: Object.assign(Object.assign({}, originalData), modifiedData) });
    }
    if (originalStyle || modifiedStyle) {
        Object.assign(result, { style: Object.assign(Object.assign({}, originalStyle), modifiedStyle) });
    }
    return result;
}
/**
 * <zh/> 克隆元素数据
 *
 * <en/> Clone clement data
 * @param data - <zh/> 待克隆的数据 | <en/> data to be cloned
 * @returns <zh/> 克隆后的数据 | <en/> cloned data
 * @remarks
 * <zh/> 只会克隆到第二层（data、style）
 *
 * <en/> Only clone to the second level (data, style)
 */
export function cloneElementData(data) {
    const { data: customData, style } = data, restAttrs = __rest(data, ["data", "style"]);
    const clonedData = restAttrs;
    if (customData)
        clonedData.data = Object.assign({}, customData);
    if (style)
        clonedData.style = Object.assign({}, style);
    return clonedData;
}
/**
 * <zh/> 判断数据是否为空
 *
 * <en/> Determine if the data is empty
 * @param data - <zh/> 图数据 | <en/> graph data
 * @returns <zh/> 是否为空 | <en/> is empty
 */
export function isEmptyData(data) {
    return !get(data, ['nodes', 'length']) && !get(data, ['edges', 'length']) && !get(data, ['combos', 'length']);
}
/**
 * <zh/> 判断两个元素数据是否相等
 *
 * <en/> Determine if two element data are equal
 * @param original - <zh/> 原始数据 | <en/> original data
 * @param modified - <zh/> 修改后的数据 | <en/> modified data
 * @returns <zh/> 是否相等 | <en/> is equal
 * @remarks
 * <zh/> 相比于 isEqual，这个方法不会比较更下层的数据
 *
 * <en/> Compared to isEqual, this method does not compare data at a lower level
 */
export function isElementDataEqual(original = {}, modified = {}) {
    const { states: originalStates = [], data: originalData = {}, style: originalStyle = {}, children: originalChildren = [] } = original, originalAttrs = __rest(original, ["states", "data", "style", "children"]);
    const { states: modifiedStates = [], data: modifiedData = {}, style: modifiedStyle = {}, children: modifiedChildren = [] } = modified, modifiedAttrs = __rest(modified, ["states", "data", "style", "children"]);
    const isArrayEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length)
            return false;
        return arr1.every((item, index) => item === arr2[index]);
    };
    const isObjectEqual = (obj1, obj2) => {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length)
            return false;
        return keys1.every((key) => obj1[key] === obj2[key]);
    };
    if (!isObjectEqual(originalAttrs, modifiedAttrs))
        return false;
    if (!isArrayEqual(originalChildren, modifiedChildren))
        return false;
    if (!isArrayEqual(originalStates, modifiedStates))
        return false;
    if (!isObjectEqual(originalData, modifiedData))
        return false;
    if (!isObjectEqual(originalStyle, modifiedStyle))
        return false;
    return true;
}
//# sourceMappingURL=data.js.map