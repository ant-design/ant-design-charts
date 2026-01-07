"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treeDataTransform = treeDataTransform;
const util_1 = require("@antv/util");
const d3_hierarchy_1 = require("@antv/vendor/d3-hierarchy");
const utils_1 = require("../mark/utils");
/**
 * @description Path need when the data is a flat json structure,
 * and the tree object structure do not need.
 */
function generateHierarchyRoot(data, path) {
    if (Array.isArray(data)) {
        return typeof path === 'function'
            ? (0, d3_hierarchy_1.stratify)().path(path)(data)
            : (0, d3_hierarchy_1.stratify)()(data);
    }
    return (0, d3_hierarchy_1.hierarchy)(data);
}
function addObjectDataPath(root, path = [root.data.name]) {
    // @ts-ignore
    root.id = root.id || root.data.name;
    root.path = path;
    if (root.children) {
        root.children.forEach((item) => {
            // @ts-ignore
            item.id = `${root.id}/${item.data.name}`;
            item.path = [...path, item.data.name];
            addObjectDataPath(item, item.path);
        });
    }
}
function addArrayDataPath(root) {
    const name = (0, util_1.get)(root, ['data', 'name']);
    if (name.replaceAll) {
        root.path = name.replaceAll('.', '/').split('/');
    }
    if (root.children) {
        root.children.forEach((item) => {
            addArrayDataPath(item);
        });
    }
}
function getTileMethod(tile, ratio) {
    const tiles = {
        treemapBinary: d3_hierarchy_1.treemapBinary,
        treemapDice: d3_hierarchy_1.treemapDice,
        treemapSlice: d3_hierarchy_1.treemapSlice,
        treemapSliceDice: d3_hierarchy_1.treemapSliceDice,
        treemapSquarify: d3_hierarchy_1.treemapSquarify,
        treemapResquarify: d3_hierarchy_1.treemapResquarify,
    };
    const tileMethod = tile === 'treemapSquarify' ? tiles[tile].ratio(ratio) : tiles[tile];
    if (!tileMethod) {
        throw new TypeError('Invalid tile method!');
    }
    return tileMethod;
}
function treeDataTransform(data, layout, encode) {
    const { value } = encode;
    const tileMethod = getTileMethod(layout.tile, layout.ratio);
    const root = generateHierarchyRoot(data, layout.path);
    if ((0, util_1.isArray)(data)) {
        addArrayDataPath(root);
    }
    else {
        addObjectDataPath(root);
    }
    // Calculate the value and sort.
    value
        ? root
            .sum((d) => layout.ignoreParentValue && d.children
            ? 0
            : (0, utils_1.field)(value)(d))
            .sort(layout.sort)
        : root.count();
    (0, d3_hierarchy_1.treemap)()
        .tile(tileMethod)
        // @ts-ignore
        .size(layout.size)
        .round(layout.round)
        .paddingInner(layout.paddingInner)
        .paddingOuter(layout.paddingOuter)
        .paddingTop(layout.paddingTop)
        .paddingRight(layout.paddingRight)
        .paddingBottom(layout.paddingBottom)
        .paddingLeft(layout.paddingLeft)(root);
    const nodes = root.descendants().map((d) => Object.assign(d, {
        id: d.id.replace(/^\//, ''),
        x: [d.x0, d.x1],
        y: [d.y0, d.y1],
    }));
    const filterData = nodes.filter(typeof layout.layer === 'function'
        ? layout.layer
        : (d) => d.height === layout.layer);
    return [filterData, nodes];
}
//# sourceMappingURL=treeDataTransform.js.map