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
import { forceSimulation, forceManyBody, forceLink, forceX, forceY, forceCenter, } from '@antv/vendor/d3-force';
import { deepMix } from '@antv/util';
import { subObject } from '../utils/helper';
import { maybeAnimation, subTooltip } from '../utils/mark';
import { field, initializeData } from './utils';
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
    const nodeForce = forceManyBody();
    const linkForce = forceLink(links).id(field(linkKey));
    typeof nodeStrength === 'function' && nodeForce.strength(nodeStrength);
    typeof linkStrength === 'function' && linkForce.strength(linkStrength);
    const simulation = forceSimulation(nodes)
        .force('link', linkForce)
        .force('charge', nodeForce);
    joint
        ? simulation.force('center', forceCenter())
        : simulation.force('x', forceX()).force('y', forceY());
    simulation.stop();
    const n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()));
    for (let i = 0; i < n; i++)
        simulation.tick();
    return {
        nodesData: nodes,
        linksData: links,
    };
}
export const ForceGraph = (options) => {
    const { data, encode: e = {}, scale, style = {}, layout = {}, nodeLabels = [], linkLabels = [], animate = {}, tooltip = {}, } = options;
    const { nodeKey = (d) => d.id, linkKey = (d) => d.id } = e, restEncode = __rest(e, ["nodeKey", "linkKey"]);
    const encode = Object.assign({ nodeKey, linkKey }, restEncode);
    const nodeEncode = subObject(encode, 'node');
    const linkEncode = subObject(encode, 'link');
    const { links, nodes } = initializeData(data, encode);
    const { nodesData, linksData } = dataTransform({ links, nodes }, deepMix({}, DEFAULT_LAYOUT_OPTIONS, layout), encode);
    const linkTooltip = subTooltip(tooltip, 'link', {
        items: [
            (d) => ({ name: 'source', value: field(linkKey)(d.source) }),
            (d) => ({ name: 'target', value: field(linkKey)(d.target) }),
        ],
    });
    const nodeTooltip = subTooltip(tooltip, 'node', {
        items: [(d) => ({ name: 'key', value: field(nodeKey)(d) })],
    }, true);
    return [
        deepMix({}, DEFAULT_LINK_OPTIONS, {
            data: linksData,
            encode: linkEncode,
            labels: linkLabels,
            style: subObject(style, 'link'),
            tooltip: linkTooltip,
            animate: maybeAnimation(animate, 'link'),
        }),
        deepMix({}, DEFAULT_NODE_OPTIONS, {
            data: nodesData,
            encode: Object.assign({}, nodeEncode),
            scale,
            style: subObject(style, 'node'),
            tooltip: nodeTooltip,
            labels: [
                Object.assign(Object.assign({}, DEFAULT_LABEL_OPTIONS), subObject(style, 'label')),
                ...nodeLabels,
            ],
            animate: maybeAnimation(animate, 'link'),
        }),
    ];
};
ForceGraph.props = {};
//# sourceMappingURL=forceGraph.js.map