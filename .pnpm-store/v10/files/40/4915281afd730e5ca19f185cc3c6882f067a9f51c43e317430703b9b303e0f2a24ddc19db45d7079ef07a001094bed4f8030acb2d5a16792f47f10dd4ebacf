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
import { TREE_KEY } from '../constants';
import { idOf } from './id';
import { isEdgeData } from './is';
/**
 * <zh/> 将 NodeData、EdgeData、ComboData 转换为 graphlib 的数据结构
 *
 * <en/> Transform NodeData, EdgeData, ComboData to graphlib data structure
 * @param data - <zh/> 节点、边、combo 数据 | <en/> node, combo data
 * @returns <zh/> graphlib 数据 | <en/> graphlib data
 */
export function toGraphlibData(data) {
    const { id = idOf(data), style, data: customData } = data, rest = __rest(data, ["id", "style", "data"]);
    const _data = Object.assign(Object.assign({}, data), { style: Object.assign({}, style), data: Object.assign({}, customData) });
    if (isEdgeData(data))
        return Object.assign({ id, data: _data }, rest);
    return { id, data: _data };
}
/**
 * <zh/> 将 Node、Edge、Combo 转换为 G6 的数据结构
 *
 * <en/> Transform Node, Edge, Combo to G6 data structure
 * @param data - <zh/> graphlib 节点、边、Combo 数据 | <en/> graphlib node, edge, combo data
 * @returns <zh/> G6 数据 | <en/> G6 data
 */
export function toG6Data(data) {
    return data.data;
}
/**
 * <zh/> 创建树形结构
 *
 * <en/> Create tree structure
 * @param model - <zh/> 数据模型 | <en/> data model
 */
export function createTreeStructure(model) {
    if (model.hasTreeStructure(TREE_KEY))
        return;
    model.attachTreeStructure(TREE_KEY);
    const edges = model.getAllEdges();
    for (const edge of edges) {
        const { source, target } = edge;
        model.setParent(target, source, TREE_KEY);
    }
}
//# sourceMappingURL=graphlib.js.map