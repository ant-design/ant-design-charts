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
import { deepMix, pick, get } from "@antv/util";
import { partition, CHILD_NODE_COUNT } from "../utils/hierarchy/partition";
export const SUNBURST_TYPE = "sunburst";
export const SUNBURST_TYPE_FIELD = "markType";
export const SUNBURST_Y_FIELD = "value";
export const SUNBURST_PATH_FIELD = "path";
export const SUNBURST_ANCESTOR_FIELD = "ancestor-node";
/**
 * Sunburst TransformData
 * @param options
 */
export function transformData(options) {
    const { data, encode } = options;
    const { color, value } = encode;
    const type = "partition";
    const nodes = partition(data, {
        field: value,
        // @ts-ignore
        type: `hierarchy.${type}`,
        as: ["x", "y"],
    });
    const result = [];
    nodes.forEach((node) => {
        var _a, _b, _c, _d;
        if (node.depth === 0) {
            return null;
        }
        let path = node.data.name;
        const pathList = [path];
        let ancestorNode = Object.assign({}, node);
        while (ancestorNode.depth > 1) {
            path = `${(_a = ancestorNode.parent.data) === null || _a === void 0 ? void 0 : _a.name} / ${path}`;
            pathList.unshift((_b = ancestorNode.parent.data) === null || _b === void 0 ? void 0 : _b.name);
            ancestorNode = ancestorNode.parent;
        }
        const nodeInfo = Object.assign(Object.assign(Object.assign({}, pick(node.data, [value])), { [SUNBURST_PATH_FIELD]: path, [SUNBURST_ANCESTOR_FIELD]: ancestorNode.data.name }), node);
        if (color && color !== SUNBURST_ANCESTOR_FIELD) {
            nodeInfo[color] = node.data[color] || ((_d = (_c = node.parent) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d[color]);
        }
        result.push(nodeInfo);
    });
    return result.map((d) => {
        const x = d.x.slice(0, 2);
        const y = [d.y[2], d.y[0]];
        // 当出现 0 数值时，x 会出现相等的情况，导致渲染成的图形异常。
        if (x[0] === x[1]) {
            y[0] = y[1] = (d.y[2] + d.y[0]) / 2;
        }
        return Object.assign(Object.assign({}, d), { x,
            y, fillOpacity: Math.pow(0.85, d.depth) });
    });
}
const DEFAULT_OPTIONS = {
    id: SUNBURST_TYPE,
    encode: {
        x: "x",
        y: "y",
        key: SUNBURST_PATH_FIELD,
        color: SUNBURST_ANCESTOR_FIELD,
        value: "value",
    },
    axis: { x: false, y: false },
    style: {
        [SUNBURST_TYPE_FIELD]: SUNBURST_TYPE,
        stroke: "#fff",
        lineWidth: 0.5,
        fillOpacity: "fillOpacity",
        [CHILD_NODE_COUNT]: CHILD_NODE_COUNT,
        depth: "depth",
    },
    state: {
        active: { zIndex: 2, stroke: "#000" },
        inactive: { zIndex: 1, stroke: "#fff" },
    },
    legend: false,
    interaction: { drillDown: true },
    coordinate: {
        type: "polar",
        innerRadius: 0.2,
    },
};
export const Sunburst = (options) => {
    const { encode: encodeOption, data = [] } = options, resOptions = __rest(options, ["encode", "data"]);
    const coordinate = Object.assign(Object.assign({}, resOptions.coordinate), { 
        // Reac Bug InnerRadius = 0.
        innerRadius: Math.max(get(resOptions, ["coordinate", "innerRadius"], 0.2), 0.00001) });
    const encode = Object.assign(Object.assign({}, DEFAULT_OPTIONS.encode), encodeOption);
    const { value } = encode;
    const rectData = transformData({ encode, data });
    return [
        deepMix({}, DEFAULT_OPTIONS, Object.assign(Object.assign({ type: "rect", data: rectData, encode, tooltip: {
                title: "path",
                items: [
                    (d) => {
                        return {
                            name: value,
                            value: d[value],
                        };
                    },
                ],
            } }, resOptions), { coordinate })),
    ];
};
Sunburst.props = {};
//# sourceMappingURL=sunburst.js.map