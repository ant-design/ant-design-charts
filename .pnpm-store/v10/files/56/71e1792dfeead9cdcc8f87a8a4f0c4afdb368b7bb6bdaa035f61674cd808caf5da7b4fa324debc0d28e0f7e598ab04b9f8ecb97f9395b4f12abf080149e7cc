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
exports.Partition = exports.CHILD_NODE_COUNT = exports.PARTITION_ANCESTOR_FIELD = exports.PARTITION_PATH_FIELD = exports.PARTITION_TYPE_FIELD = exports.PARTITION_TYPE = void 0;
exports.partitionLayout = partitionLayout;
exports.transformData = transformData;
const util_1 = require("@antv/util");
/**
 * Partition layout algorithm.
 * Child nodes start layout from the parent's starting position to show parent-child relationships.
 *
 * @param data Hierarchical data
 * @param options Configuration options
 */
function partitionLayout(data, options = {}) {
    const { valueField = 'value', sort, fillParent = true, nameField = 'name', } = options;
    if (!data || data.length === 0)
        return [];
    // Build hierarchical structure
    const buildPartition = (node, parent = null, depth = 0) => {
        const partitionNode = {
            data: node,
            depth,
            parent,
            children: [],
            x0: 0,
            x1: 0,
            value: node[valueField] || 0,
        };
        if (node.children && node.children.length > 0) {
            partitionNode.children = node.children.map((child) => buildPartition(child, partitionNode, depth + 1));
        }
        return partitionNode;
    };
    // Process each root node
    const result = [];
    let currentRootStartX = 0; // Track the starting position for the next root node
    data.forEach((rootData) => {
        const root = buildPartition(rootData);
        // Calculate position for each node - key point: child nodes start layout from parent's starting position
        const calculateLayout = (node, parentStartX = 0, isRootNode = false, parentWidth = 0) => {
            if (isRootNode || node.depth === 0) {
                // Root node: start from current root position
                node.x0 = isRootNode ? parentStartX : 0;
                node.x1 = node.x0 + node.value;
            }
            else {
                // Child node: start layout from parent's starting position
                node.x0 = parentStartX;
                if (fillParent && parentWidth > 0) {
                    // If fillParent is true, calculate width based on parent width and value ratio.
                    const siblingsTotalValue = node.parent
                        ? node.parent.children.reduce((acc, child) => acc + child.value, 0)
                        : node.value;
                    const siblingsCount = node.parent ? node.parent.children.length : 1;
                    const ratio = siblingsTotalValue > 0
                        ? node.value / siblingsTotalValue
                        : 1 / siblingsCount;
                    node.x1 = parentStartX + parentWidth * ratio;
                }
                else {
                    // If fillParent is false, use node own value as width.
                    node.x1 = parentStartX + node.value;
                }
            }
            // Calculate position for child nodes - start from current node's starting position
            let childStartX = node.x0;
            const nodeWidth = node.x1 - node.x0;
            const sortedChildren = sort
                ? [...node.children].sort((a, b) => sort(a.data, b.data))
                : node.children;
            if (fillParent && sortedChildren.length > 0) {
                // fillParent mode: child nodes fill parent width proportionally.
                const childrenTotalValue = node.children.reduce((sum, c) => sum + c.value, 0);
                sortedChildren.forEach((child) => {
                    calculateLayout(child, childStartX, false, nodeWidth);
                    const ratio = childrenTotalValue > 0
                        ? child.value / childrenTotalValue
                        : 1 / sortedChildren.length;
                    childStartX += nodeWidth * ratio;
                });
            }
            else {
                // Non-fillParent mode: child nodes layout independently based on own value.
                sortedChildren.forEach((child) => {
                    calculateLayout(child, childStartX, false, 0);
                    // Next child node starts from current child node's end position.
                    childStartX += child.x1 - child.x0;
                });
            }
        };
        // Start layout calculation from root node, using current root start position.
        calculateLayout(root, currentRootStartX, true);
        // Update the starting position for the next root node.
        currentRootStartX += root.value;
        // Convert to final format.
        const processNode = (node) => {
            var _a, _b, _c;
            const getName = (d) => { var _a; return (_a = d[nameField]) !== null && _a !== void 0 ? _a : d.name; };
            const path = [getName(node.data)];
            let ancestorNode = node;
            while (ancestorNode.parent) {
                path.unshift(getName(ancestorNode.parent.data));
                ancestorNode = ancestorNode.parent;
            }
            return Object.assign(Object.assign({}, (0, util_1.pick)(node.data, [valueField])), { [exports.PARTITION_PATH_FIELD]: path, [exports.PARTITION_ANCESTOR_FIELD]: (_c = (_b = (_a = ancestorNode.parent) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b[nameField]) !== null && _c !== void 0 ? _c : node.data[nameField], name: node.data[nameField], depth: node.depth, value: node.value, x: [node.x0, node.x1], y: [node.depth, node.depth + 1], 
                // Add child node count attribute for drill-down interaction judgment.
                [exports.CHILD_NODE_COUNT]: node.children.length });
        };
        // Collect all nodes.
        const collectResultNodes = (node) => {
            result.push(processNode(node));
            node.children.forEach(collectResultNodes);
        };
        collectResultNodes(root);
    });
    return result;
}
exports.PARTITION_TYPE = 'partition';
exports.PARTITION_TYPE_FIELD = 'markType';
exports.PARTITION_PATH_FIELD = 'path';
exports.PARTITION_ANCESTOR_FIELD = 'ancestor-node';
exports.CHILD_NODE_COUNT = 'childNodeCount';
function transformData(options) {
    const { data, encode, fillParent, sort } = options;
    const { color, value, name } = encode;
    const nodes = partitionLayout(data, {
        valueField: value,
        fillParent,
        nameField: name,
        sort,
    });
    return nodes.map((node) => {
        // Handle color mapping.
        const nodeInfo = Object.assign({}, node);
        if (color && color !== exports.PARTITION_ANCESTOR_FIELD) {
            nodeInfo[color] = node[color];
        }
        return nodeInfo;
    });
}
const DEFAULT_OPTIONS = {
    id: exports.PARTITION_TYPE,
    encode: {
        x: 'x',
        y: 'y',
        key: exports.PARTITION_PATH_FIELD,
        color: exports.PARTITION_ANCESTOR_FIELD,
        value: 'value',
        name: 'name',
    },
    labels: [
        {
            style: {
                pointerEvents: 'none',
            },
            text: 'value',
            position: 'inside',
            transform: [
                {
                    type: 'overflowHide',
                },
            ],
        },
    ],
    axis: {
        x: { title: 'Time/Order', label: true },
        y: false,
    },
    style: {
        [exports.PARTITION_TYPE_FIELD]: exports.PARTITION_TYPE,
        [exports.CHILD_NODE_COUNT]: 'childNodeCount', // Add child node count attribute for drill-down interaction.
    },
    state: {
        active: { zIndex: 2 },
        inactive: { zIndex: 1 },
    },
    legend: false,
    coordinate: {
        type: 'cartesian',
        grid: false, // Remove grid lines.
    },
    interaction: {
        drillDown: true,
    },
};
const Partition = (options) => {
    const { encode: encodeOption, data = [], layout = {} } = options, resOptions = __rest(options, ["encode", "data", "layout"]);
    const { fillParent = true, sort } = layout;
    const encode = Object.assign(Object.assign({}, DEFAULT_OPTIONS.encode), encodeOption);
    const { value } = encode;
    const rectData = transformData({ encode, data, fillParent, sort });
    return [
        (0, util_1.deepMix)({}, DEFAULT_OPTIONS, Object.assign({ type: 'rect', data: rectData, encode, tooltip: {
                title: 'path',
                items: [
                    (d) => {
                        return {
                            name: value,
                            value: d[value],
                        };
                    },
                ],
            }, 
            // Add basic interaction.
            interaction: {
                elementHighlight: true,
            } }, resOptions)),
    ];
};
exports.Partition = Partition;
exports.Partition.props = {};
//# sourceMappingURL=partition.js.map