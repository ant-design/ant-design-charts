"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_ANCESTORS_FIELD = exports.CHILD_NODE_COUNT = exports.NODE_INDEX_FIELD = void 0;
exports.getField = getField;
exports.getAllNodes = getAllNodes;
exports.partition = partition;
const d3Hierarchy = __importStar(require("@antv/vendor/d3-hierarchy"));
const util_1 = require("@antv/util");
const DEFAULT_OPTIONS = {
    field: 'value',
    size: [1, 1], // width, height
    round: false,
    padding: 0,
    // Default desc.
    sort: (a, b) => b.value - a.value,
    as: ['x', 'y'],
    // Whether to ignore parentValue. When set to true, the weight of the parent node is determined by the child element.
    ignoreParentValue: true,
};
// In the same level, the nodes under the same parent node index order.
exports.NODE_INDEX_FIELD = 'nodeIndex';
// Number of child nodes
exports.CHILD_NODE_COUNT = 'childNodeCount';
// Ancestor of the node
exports.NODE_ANCESTORS_FIELD = 'nodeAncestor';
const INVALID_FIELD_ERR_MSG = 'Invalid field: it must be a string!';
function getField(options, defaultField) {
    const { field, fields } = options;
    if ((0, util_1.isString)(field)) {
        return field;
    }
    if ((0, util_1.isArray)(field)) {
        console.warn(INVALID_FIELD_ERR_MSG);
        return field[0];
    }
    console.warn(`${INVALID_FIELD_ERR_MSG} will try to get fields instead.`);
    if ((0, util_1.isString)(fields)) {
        return fields;
    }
    if ((0, util_1.isArray)(fields) && fields.length) {
        return fields[0];
    }
    if (defaultField) {
        return defaultField;
    }
    throw new TypeError(INVALID_FIELD_ERR_MSG);
}
function getAllNodes(root) {
    const nodes = [];
    if (root && root.each) {
        let parent;
        let index;
        // d3-hierarchy: Invokes the specified function for node and each descendant in **breadth-first order**
        root.each((node) => {
            var _a, _b;
            if (node.parent !== parent) {
                parent = node.parent;
                index = 0;
            }
            else {
                index += 1;
            }
            const ancestors = (0, util_1.filter)((((_a = node.ancestors) === null || _a === void 0 ? void 0 : _a.call(node)) || []).map((d) => nodes.find((n) => n.name === d.name) || d), ({ depth }) => depth > 0 && depth < node.depth);
            node[exports.NODE_ANCESTORS_FIELD] = ancestors;
            node[exports.CHILD_NODE_COUNT] = ((_b = node.children) === null || _b === void 0 ? void 0 : _b.length) || 0;
            node[exports.NODE_INDEX_FIELD] = index;
            nodes.push(node);
        });
    }
    else if (root && root.eachNode) {
        // @antv/hierarchy
        root.eachNode((node) => {
            nodes.push(node);
        });
    }
    return nodes;
}
function partition(data, options) {
    options = (0, util_1.assign)({}, DEFAULT_OPTIONS, options);
    const as = options.as;
    if (!(0, util_1.isArray)(as) || as.length !== 2) {
        throw new TypeError('Invalid as: it must be an array with 2 strings (e.g. [ "x", "y" ])!');
    }
    let field;
    try {
        field = getField(options);
    }
    catch (e) {
        console.warn(e);
    }
    const partition = (data) => d3Hierarchy
        .partition()
        .size(options.size)
        .round(options.round)
        .padding(options.padding)(
    /**
     * The sum function must be specified in the d3Hierarchy layout to compute node values by calling the specified value function
     * from the current node in post-order traversal order for the current node and for each descendant node and returning the current node.
     * for example:
     * { node: 'parent', value: 10, children: [{node: 'child1', value: 5}, {node: 'child2', value: 5}, ]}.
     * The computed value obtained by the parent is sum(node(parent)) + sum(node(child1)) + sum(node(child2)).
     * In the sum function, d is the data passed in by the user and children is the reserved field.
     */
    d3Hierarchy
        .hierarchy(data)
        .sum((d) => (0, util_1.size)(d.children)
        ? options.ignoreParentValue
            ? 0
            : d[field] - (0, util_1.reduce)(d.children, (a, b) => a + b[field], 0)
        : d[field])
        .sort(options.sort));
    const root = partition(data);
    /*
     * points:
     *   3  2
     *   0  1
     */
    const x = as[0];
    const y = as[1];
    root.each((node) => {
        var _a, _b;
        node[x] = [node.x0, node.x1, node.x1, node.x0];
        node[y] = [node.y1, node.y1, node.y0, node.y0];
        node.name = node.name || ((_a = node.data) === null || _a === void 0 ? void 0 : _a.name) || ((_b = node.data) === null || _b === void 0 ? void 0 : _b.label);
        node.data.name = node.name;
        ['x0', 'x1', 'y0', 'y1'].forEach((prop) => {
            if (as.indexOf(prop) === -1) {
                delete node[prop];
            }
        });
    });
    return getAllNodes(root);
}
//# sourceMappingURL=partition.js.map