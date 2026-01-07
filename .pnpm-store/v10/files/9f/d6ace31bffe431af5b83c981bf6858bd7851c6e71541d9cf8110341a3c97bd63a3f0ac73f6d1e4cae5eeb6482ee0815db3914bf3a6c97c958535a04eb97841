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
exports.ForceGraph = void 0;
const d3_force_1 = require("@antv/vendor/d3-force");
const util_1 = require("@antv/util");
const helper_1 = require("../utils/helper");
const mark_1 = require("../utils/mark");
const utils_1 = require("./utils");
const DEFAULT_LAYOUT_OPTIONS = {
    joint: true,
};
const DEFAULT_LINK_OPTIONS = {
    type: 'link',
    axis: false,
    legend: false,
    encode: {
        x: [(d) => d.source.x, (d) => d.target.x],
        y: [(d) => d.source.y, (d) => d.target.y],
    },
    style: {
        stroke: '#999',
        strokeOpacity: 0.6,
    },
};
const DEFAULT_NODE_OPTIONS = {
    type: 'point',
    axis: false,
    legend: false,
    encode: {
        x: 'x',
        y: 'y',
        size: 5,
        color: 'group',
        shape: 'point',
    },
    style: {
        stroke: '#fff',
    },
};
const DEFAULT_LABEL_OPTIONS = {
    text: '',
};
function dataTransform(data, layout, encode) {
    const { nodes, links } = data;
    const { joint, nodeStrength, linkStrength } = layout;
    const { nodeKey = (d) => d.id, linkKey = (d) => d.id } = encode;
    const nodeForce = (0, d3_force_1.forceManyBody)();
    const linkForce = (0, d3_force_1.forceLink)(links).id((0, utils_1.field)(linkKey));
    typeof nodeStrength === 'function' && nodeForce.strength(nodeStrength);
    typeof linkStrength === 'function' && linkForce.strength(linkStrength);
    const simulation = (0, d3_force_1.forceSimulation)(nodes)
        .force('link', linkForce)
        .force('charge', nodeForce);
    joint
        ? simulation.force('center', (0, d3_force_1.forceCenter)())
        : simulation.force('x', (0, d3_force_1.forceX)()).force('y', (0, d3_force_1.forceY)());
    simulation.stop();
    const n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()));
    for (let i = 0; i < n; i++)
        simulation.tick();
    return {
        nodesData: nodes,
        linksData: links,
    };
}
const ForceGraph = (options) => {
    const { data, encode: e = {}, scale, style = {}, layout = {}, nodeLabels = [], linkLabels = [], animate = {}, tooltip = {}, } = options;
    const { nodeKey = (d) => d.id, linkKey = (d) => d.id } = e, restEncode = __rest(e, ["nodeKey", "linkKey"]);
    const encode = Object.assign({ nodeKey, linkKey }, restEncode);
    const nodeEncode = (0, helper_1.subObject)(encode, 'node');
    const linkEncode = (0, helper_1.subObject)(encode, 'link');
    const { links, nodes } = (0, utils_1.initializeData)(data, encode);
    const { nodesData, linksData } = dataTransform({ links, nodes }, (0, util_1.deepMix)({}, DEFAULT_LAYOUT_OPTIONS, layout), encode);
    const linkTooltip = (0, mark_1.subTooltip)(tooltip, 'link', {
        items: [
            (d) => ({ name: 'source', value: (0, utils_1.field)(linkKey)(d.source) }),
            (d) => ({ name: 'target', value: (0, utils_1.field)(linkKey)(d.target) }),
        ],
    });
    const nodeTooltip = (0, mark_1.subTooltip)(tooltip, 'node', {
        items: [(d) => ({ name: 'key', value: (0, utils_1.field)(nodeKey)(d) })],
    }, true);
    return [
        (0, util_1.deepMix)({}, DEFAULT_LINK_OPTIONS, {
            data: linksData,
            encode: linkEncode,
            labels: linkLabels,
            style: (0, helper_1.subObject)(style, 'link'),
            tooltip: linkTooltip,
            animate: (0, mark_1.maybeAnimation)(animate, 'link'),
        }),
        (0, util_1.deepMix)({}, DEFAULT_NODE_OPTIONS, {
            data: nodesData,
            encode: Object.assign({}, nodeEncode),
            scale,
            style: (0, helper_1.subObject)(style, 'node'),
            tooltip: nodeTooltip,
            labels: [
                Object.assign(Object.assign({}, DEFAULT_LABEL_OPTIONS), (0, helper_1.subObject)(style, 'label')),
                ...nodeLabels,
            ],
            animate: (0, mark_1.maybeAnimation)(animate, 'link'),
        }),
    ];
};
exports.ForceGraph = ForceGraph;
exports.ForceGraph.props = {};
//# sourceMappingURL=forceGraph.js.map