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
import { dfs } from './traverse';
/**
 * <zh/> 将树数据转换为图数据
 *
 * <en/> Convert tree data to graph data
 * @param treeData - <zh/> 树数据 | <en/> Tree data
 * @param getter - <zh/> 获取节点和边的方法 | <en/> Methods to get nodes and edges
 * @returns <zh/> 图数据 | <en/> Graph data
 */
export function treeToGraphData(treeData, getter) {
    const { getNodeData = (datum, depth) => {
        datum.depth = depth;
        if (!datum.children)
            return datum;
        const { children } = datum, restDatum = __rest(datum, ["children"]);
        return Object.assign(Object.assign({}, restDatum), { children: children.map((child) => child.id) });
    }, getEdgeData = (source, target) => ({ source: source.id, target: target.id }), getChildren = (datum) => datum.children || [], } = getter || {};
    const nodes = [];
    const edges = [];
    dfs(treeData, (node, depth) => {
        nodes.push(getNodeData(node, depth));
        const children = getChildren(node);
        for (const child of children) {
            edges.push(getEdgeData(node, child));
        }
    }, (node) => getChildren(node), 'TB');
    return { nodes, edges };
}
//# sourceMappingURL=tree.js.map