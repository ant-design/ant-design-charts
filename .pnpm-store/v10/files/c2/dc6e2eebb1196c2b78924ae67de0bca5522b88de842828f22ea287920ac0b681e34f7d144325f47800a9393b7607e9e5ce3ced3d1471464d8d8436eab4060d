"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chord = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("../utils/helper");
const mark_1 = require("../utils/mark");
const arc_1 = require("../data/arc");
const utils_1 = require("./utils");
const DEFAULT_LAYOUT_OPTIONS = {
    y: 0,
    thickness: 0.05,
    marginRatio: 0.1,
    id: (node) => node.key,
    source: (edge) => edge.source,
    target: (edge) => edge.target,
    sourceWeight: (edge) => edge.value || 1,
    targetWeight: (edge) => edge.value || 1,
    sortBy: null, // optional, id | weight | frequency | {function}
};
const DEFAULT_NODE_OPTIONS = {
    type: 'polygon',
    axis: false,
    legend: false,
    encode: {
        shape: 'polygon',
        x: 'x',
        y: 'y',
    },
    scale: {
        x: { type: 'identity' },
        y: { type: 'identity' },
    },
    style: {
        opacity: 1,
        fillOpacity: 1,
        lineWidth: 1,
    },
};
const DEFAULT_LINK_OPTIONS = {
    type: 'polygon',
    axis: false,
    legend: false,
    encode: {
        shape: 'ribbon',
        x: 'x',
        y: 'y',
    },
    style: {
        opacity: 0.5,
        lineWidth: 1,
    },
};
const DEFAULT_LABEL_OPTIONS = {
    position: 'outside',
    fontSize: 10,
};
const Chord = (options, context) => {
    const { data, encode = {}, scale, style = {}, layout = {}, nodeLabels = [], linkLabels = [], animate = {}, tooltip = {}, } = options;
    // Initialize data, generating nodes by link if is not specified.
    const { nodes, links } = (0, utils_1.initializeData)(data, encode);
    // Extract encode for node and link.
    const nodeEncode = (0, helper_1.subObject)(encode, 'node');
    const linkEncode = (0, helper_1.subObject)(encode, 'link');
    const { key: nodeKey = (d) => d.key, color = nodeKey } = nodeEncode;
    const { linkEncodeColor = (d) => d.source } = linkEncode;
    const { nodeWidthRatio = DEFAULT_LAYOUT_OPTIONS.thickness, nodePaddingRatio = DEFAULT_LAYOUT_OPTIONS.marginRatio } = layout, restLayout = __rest(layout, ["nodeWidthRatio", "nodePaddingRatio"]);
    const { nodes: nodeData, edges: linkData } = (0, arc_1.Arc)(Object.assign(Object.assign(Object.assign(Object.assign({}, DEFAULT_LAYOUT_OPTIONS), { id: (0, utils_1.field)(nodeKey), thickness: nodeWidthRatio, marginRatio: nodePaddingRatio }), restLayout), { weight: true }))({ nodes, edges: links });
    // Extract label style and apply defaults.
    const _a = (0, helper_1.subObject)(style, 'label'), { text = nodeKey } = _a, labelStyle = __rest(_a, ["text"]);
    const nodeTooltip = (0, mark_1.subTooltip)(tooltip, 'node', {
        title: '',
        items: [(d) => ({ name: d.key, value: d.value })],
    }, true);
    const linkTooltip = (0, mark_1.subTooltip)(tooltip, 'link', {
        title: '',
        items: [(d) => ({ name: `${d.source} -> ${d.target}`, value: d.value })],
    });
    const { height, width } = context;
    const minimumLen = Math.min(height, width);
    return [
        (0, util_1.deepMix)({}, DEFAULT_LINK_OPTIONS, {
            data: linkData,
            encode: Object.assign(Object.assign({}, linkEncode), { color: linkEncodeColor }),
            labels: linkLabels,
            style: Object.assign({ fill: linkEncodeColor ? undefined : '#aaa' }, (0, helper_1.subObject)(style, 'link')),
            tooltip: linkTooltip,
            animate: (0, mark_1.maybeAnimation)(animate, 'link'),
        }),
        (0, util_1.deepMix)({}, DEFAULT_NODE_OPTIONS, {
            data: nodeData,
            encode: Object.assign(Object.assign({}, nodeEncode), { color }),
            scale,
            style: (0, helper_1.subObject)(style, 'node'),
            coordinate: {
                type: 'polar',
                // Leave enough rendering space for the label.
                outerRadius: (minimumLen - 20) / minimumLen,
                startAngle: -Math.PI * 2,
                endAngle: 0,
            },
            labels: [
                Object.assign(Object.assign(Object.assign({}, DEFAULT_LABEL_OPTIONS), { text }), labelStyle),
                ...nodeLabels,
            ],
            tooltip: nodeTooltip,
            animate: (0, mark_1.maybeAnimation)(animate, 'node'),
            axis: false,
        }),
    ];
};
exports.Chord = Chord;
exports.Chord.props = {};
//# sourceMappingURL=chord.js.map