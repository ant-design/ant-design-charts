"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseExpandNode = void 0;
const constants_1 = require("../constants");
const collapsibility_1 = require("../utils/collapsibility");
const id_1 = require("../utils/id");
const base_transform_1 = require("./base-transform");
const utils_1 = require("./utils");
// 如果在任务列表中不存在，则添加到任务列表
// If it does not exist in the task list, add it to the task list
const weakAssignTo = (input, type, elementType, datum) => {
    const typeName = `${elementType}s`;
    const id = (0, id_1.idOf)(datum);
    if (!input.add[typeName].has(id) && !input.update[typeName].has(id)) {
        input[type][typeName].set((0, id_1.idOf)(datum), datum);
    }
};
/**
 * <zh/> 处理(树图)节点的收起和展开
 *
 * <en/> Process the collapse and expand of (tree)nodes
 */
class CollapseExpandNode extends base_transform_1.BaseTransform {
    getElement(id) {
        return this.context.element.getElement(id);
    }
    handleExpand(node, input) {
        weakAssignTo(input, 'add', 'node', node);
        if ((0, collapsibility_1.isCollapsed)(node))
            return;
        const id = (0, id_1.idOf)(node);
        weakAssignTo(input, 'add', 'node', node);
        const relatedEdges = this.context.model.getRelatedEdgesData(id);
        relatedEdges.forEach((edge) => {
            (0, utils_1.reassignTo)(input, 'add', 'edge', edge);
        });
        const children = this.context.model.getChildrenData(id);
        children.forEach((child) => {
            this.handleExpand(child, input);
        });
    }
    beforeDraw(input) {
        const { graph, model } = this.context;
        if (!model.model.hasTreeStructure(constants_1.TREE_KEY))
            return input;
        const { add: { nodes: nodesToAdd, edges: edgesToAdd }, update: { nodes: nodesToUpdate }, } = input;
        const nodesToCollapse = new Map();
        const nodesToExpand = new Map();
        nodesToAdd.forEach((node, id) => {
            if ((0, collapsibility_1.isCollapsed)(node))
                nodesToCollapse.set(id, node);
        });
        // 如果创建了一条连接到收起的节点的边，则将其添加到待展开列表
        // If an edge is created that connects to a collapsed node, add it to the list to be expanded
        edgesToAdd.forEach((edge) => {
            if (graph.getElementType(edge.source) !== 'node')
                return;
            const source = graph.getNodeData(edge.source);
            if ((0, collapsibility_1.isCollapsed)(source))
                nodesToCollapse.set(edge.source, source);
        });
        nodesToUpdate.forEach((node, id) => {
            const nodeElement = this.getElement(id);
            if (!nodeElement)
                return;
            const isCurrentCollapsed = nodeElement.attributes.collapsed;
            if ((0, collapsibility_1.isCollapsed)(node)) {
                if (!isCurrentCollapsed)
                    nodesToCollapse.set(id, node);
            }
            else {
                if (isCurrentCollapsed)
                    nodesToExpand.set(id, node);
            }
        });
        const handledNodes = new Set();
        nodesToCollapse.forEach((node, id) => {
            // 将子节点添加到待删除列表，并删除关联的边
            // Add child nodes to the list to be deleted，and delete the associated edges
            const descendants = model.getDescendantsData(id);
            descendants.forEach((descendant) => {
                const id = (0, id_1.idOf)(descendant);
                if (handledNodes.has(id))
                    return;
                (0, utils_1.reassignTo)(input, 'remove', 'node', descendant);
                const relatedEdges = model.getRelatedEdgesData(id);
                relatedEdges.forEach((edge) => {
                    (0, utils_1.reassignTo)(input, 'remove', 'edge', edge);
                });
                handledNodes.add(id);
            });
        });
        nodesToExpand.forEach((node, id) => {
            const ancestors = model.getAncestorsData(id, constants_1.TREE_KEY);
            // 如果祖先节点是收起的，添加到移除列表
            // If the ancestor node is collapsed, add it to the removal list
            if (ancestors.some(collapsibility_1.isCollapsed)) {
                (0, utils_1.reassignTo)(input, 'remove', 'node', node);
                return;
            }
            this.handleExpand(node, input);
        });
        return input;
    }
}
exports.CollapseExpandNode = CollapseExpandNode;
//# sourceMappingURL=collapse-expand-node.js.map