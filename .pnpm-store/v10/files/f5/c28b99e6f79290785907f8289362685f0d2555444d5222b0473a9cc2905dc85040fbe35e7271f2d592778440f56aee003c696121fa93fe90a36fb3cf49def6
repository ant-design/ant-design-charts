"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("../utils/helper");
const tree_1 = require("../data/tree");
const mark_1 = require("../utils/mark");
const DEFAULT_LAYOUT_OPTIONS = {
    sortBy: (a, b) => b.value - a.value,
};
const DEFAULT_NODE_OPTIONS = {
    axis: false,
    legend: false,
    type: 'point',
    encode: {
        x: 'x',
        y: 'y',
        size: 2,
        shape: 'point',
    },
};
const DEFAULT_LINK_OPTIONS = {
    type: 'link',
    encode: {
        x: 'x',
        y: 'y',
        shape: 'smooth',
    },
};
const DEFAULT_LABEL_OPTIONS = {
    text: '',
    fontSize: 10,
};
const Tree = (options) => {
    const { data, encode = {}, scale = {}, style = {}, layout = {}, nodeLabels = [], linkLabels = [], animate = {}, tooltip = {}, } = options;
    const valueEncode = encode === null || encode === void 0 ? void 0 : encode.value;
    const { nodes, edges } = (0, tree_1.Tree)(Object.assign(Object.assign(Object.assign({}, DEFAULT_LAYOUT_OPTIONS), layout), { field: valueEncode }))(data);
    const nodeTooltip = (0, mark_1.subTooltip)(tooltip, 'node', {
        title: 'name',
        items: ['value'],
    }, true);
    const linkTooltip = (0, mark_1.subTooltip)(tooltip, 'link', {
        title: '',
        items: [
            (d) => ({ name: 'source', value: d.source.name }),
            (d) => ({ name: 'target', value: d.target.name }),
        ],
    });
    return [
        (0, util_1.deepMix)({}, DEFAULT_LINK_OPTIONS, {
            data: edges,
            encode: (0, helper_1.subObject)(encode, 'link'),
            scale: (0, helper_1.subObject)(scale, 'link'),
            labels: linkLabels,
            style: Object.assign({ stroke: '#999' }, (0, helper_1.subObject)(style, 'link')),
            tooltip: linkTooltip,
            animate: (0, mark_1.maybeAnimation)(animate, 'link'),
        }),
        (0, util_1.deepMix)({}, DEFAULT_NODE_OPTIONS, {
            data: nodes,
            scale: (0, helper_1.subObject)(scale, 'node'),
            encode: (0, helper_1.subObject)(encode, 'node'),
            labels: [
                Object.assign(Object.assign({}, DEFAULT_LABEL_OPTIONS), (0, helper_1.subObject)(style, 'label')),
                ...nodeLabels,
            ],
            style: Object.assign({}, (0, helper_1.subObject)(style, 'node')),
            tooltip: nodeTooltip,
            animate: (0, mark_1.maybeAnimation)(animate, 'node'),
        }),
    ];
};
exports.Tree = Tree;
exports.Tree.props = {};
//# sourceMappingURL=tree.js.map