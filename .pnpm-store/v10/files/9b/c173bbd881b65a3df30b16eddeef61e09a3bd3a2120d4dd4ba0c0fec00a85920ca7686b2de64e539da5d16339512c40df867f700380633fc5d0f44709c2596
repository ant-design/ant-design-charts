"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataController = void 0;
const graphlib_1 = require("@antv/graphlib");
const util_1 = require("@antv/util");
const constants_1 = require("../constants");
const collapsibility_1 = require("../utils/collapsibility");
const data_1 = require("../utils/data");
const diff_1 = require("../utils/diff");
const graphlib_2 = require("../utils/graphlib");
const id_1 = require("../utils/id");
const position_1 = require("../utils/position");
const print_1 = require("../utils/print");
const traverse_1 = require("../utils/traverse");
const vector_1 = require("../utils/vector");
class DataController {
    constructor() {
        /**
         * <zh/> 最近一次删除的 combo 的 id
         *
         * <en/> The ids of the last deleted combos
         * @remarks
         * <zh/> 当删除 combo 后，会将其 id 从 comboIds 中移除，此时根据 Graphlib 的 changes 事件获取到的 NodeRemoved 无法区分是 combo 还是 node。
         * 因此需要记录最近一次删除的 combo 的 id，并用于 isCombo 的判断
         *
         * <en/> When the combo is deleted, its id will be removed from comboIds. At this time, the NodeRemoved obtained according to the changes event of Graphlib cannot distinguish whether it is a combo or a node.
         * Therefore, it is necessary to record the id of the last deleted combo and use it to judge isCombo
         */
        this.latestRemovedComboIds = new Set();
        this.comboIds = new Set();
        /**
         * <zh/> 获取详细数据变更
         *
         * <en/> Get detailed data changes
         */
        this.changes = [];
        /**
         * <zh/> 批处理计数器
         *
         * <en/> Batch processing counter
         */
        this.batchCount = 0;
        /**
         * <zh/> 是否处于无痕模式
         *
         * <en/> Whether it is in traceless mode
         */
        this.isTraceless = false;
        this.enableUpdateNodeLikeHierarchy = true;
        this.model = new graphlib_1.Graph();
    }
    pushChange(change) {
        if (this.isTraceless)
            return;
        const { type } = change;
        if (type === constants_1.ChangeType.NodeUpdated || type === constants_1.ChangeType.EdgeUpdated || type === constants_1.ChangeType.ComboUpdated) {
            const { value, original } = change;
            this.changes.push({ value: (0, data_1.cloneElementData)(value), original: (0, data_1.cloneElementData)(original), type });
        }
        else {
            this.changes.push({ value: (0, data_1.cloneElementData)(change.value), type });
        }
    }
    getChanges() {
        return this.changes;
    }
    clearChanges() {
        this.changes = [];
    }
    batch(callback) {
        this.batchCount++;
        this.model.batch(callback);
        this.batchCount--;
    }
    isBatching() {
        return this.batchCount > 0;
    }
    /**
     * <zh/> 执行操作而不会留下记录
     *
     * <en/> Perform operations without leaving records
     * @param callback - <zh/> 回调函数 | <en/> callback function
     * @remarks
     * <zh/> 通常用于运行时调整元素并同步数据，避免触发数据变更导致重绘
     *
     * <en/> Usually used to adjust elements at runtime and synchronize data to avoid triggering data changes and causing redraws
     */
    silence(callback) {
        this.isTraceless = true;
        callback();
        this.isTraceless = false;
    }
    isCombo(id) {
        return this.comboIds.has(id) || this.latestRemovedComboIds.has(id);
    }
    getData() {
        return {
            nodes: this.getNodeData(),
            edges: this.getEdgeData(),
            combos: this.getComboData(),
        };
    }
    getNodeData(ids) {
        return this.model.getAllNodes().reduce((acc, node) => {
            const data = (0, graphlib_2.toG6Data)(node);
            if (this.isCombo((0, id_1.idOf)(data)))
                return acc;
            if (ids === undefined)
                acc.push(data);
            else
                ids.includes((0, id_1.idOf)(data)) && acc.push(data);
            return acc;
        }, []);
    }
    getEdgeDatum(id) {
        return (0, graphlib_2.toG6Data)(this.model.getEdge(id));
    }
    getEdgeData(ids) {
        return this.model.getAllEdges().reduce((acc, edge) => {
            const data = (0, graphlib_2.toG6Data)(edge);
            if (ids === undefined)
                acc.push(data);
            else
                ids.includes((0, id_1.idOf)(data)) && acc.push(data);
            return acc;
        }, []);
    }
    getComboData(ids) {
        return this.model.getAllNodes().reduce((acc, combo) => {
            const data = (0, graphlib_2.toG6Data)(combo);
            if (!this.isCombo((0, id_1.idOf)(data)))
                return acc;
            if (ids === undefined)
                acc.push(data);
            else
                ids.includes((0, id_1.idOf)(data)) && acc.push(data);
            return acc;
        }, []);
    }
    getRootsData(hierarchyKey = constants_1.TREE_KEY) {
        return this.model.getRoots(hierarchyKey).map(graphlib_2.toG6Data);
    }
    getAncestorsData(id, hierarchyKey) {
        const { model } = this;
        if (!model.hasNode(id) || !model.hasTreeStructure(hierarchyKey))
            return [];
        return model.getAncestors(id, hierarchyKey).map(graphlib_2.toG6Data);
    }
    getDescendantsData(id) {
        const root = this.getElementDataById(id);
        const data = [];
        (0, traverse_1.dfs)(root, (node) => {
            if (node !== root)
                data.push(node);
        }, (node) => this.getChildrenData((0, id_1.idOf)(node)), 'TB');
        return data;
    }
    getParentData(id, hierarchyKey) {
        const { model } = this;
        if (!hierarchyKey) {
            print_1.print.warn('The hierarchy structure key is not specified');
            return undefined;
        }
        if (!model.hasNode(id) || !model.hasTreeStructure(hierarchyKey))
            return undefined;
        const parent = model.getParent(id, hierarchyKey);
        return parent ? (0, graphlib_2.toG6Data)(parent) : undefined;
    }
    getChildrenData(id) {
        const structureKey = this.getElementType(id) === 'node' ? constants_1.TREE_KEY : constants_1.COMBO_KEY;
        const { model } = this;
        if (!model.hasNode(id) || !model.hasTreeStructure(structureKey))
            return [];
        return model.getChildren(id, structureKey).map(graphlib_2.toG6Data);
    }
    /**
     * <zh/> 获取指定类型元素的数据
     *
     * <en/> Get the data of the specified type of element
     * @param elementType - <zh/> 元素类型 | <en/> element type
     * @returns <zh/> 元素数据 | <en/> element data
     */
    getElementsDataByType(elementType) {
        if (elementType === 'node')
            return this.getNodeData();
        if (elementType === 'edge')
            return this.getEdgeData();
        if (elementType === 'combo')
            return this.getComboData();
        return [];
    }
    /**
     * <zh/> 根据 ID 获取元素的数据，不用关心元素的类型
     *
     * <en/> Get the data of the element by ID, no need to care about the type of the element
     * @param id - <zh/> 元素 ID 数组 | <en/> element ID array
     * @returns <zh/> 元素数据 | <en/> data of the element
     */
    getElementDataById(id) {
        const type = this.getElementType(id);
        if (type === 'edge')
            return this.getEdgeDatum(id);
        return this.getNodeLikeDatum(id);
    }
    /**
     * <zh/> 获取节点的数据
     *
     * <en/> Get node data
     * @param id - <zh/> 节点 ID | <en/> node ID
     * @returns <zh/> 节点数据 | <en/> node data
     */
    getNodeLikeDatum(id) {
        const data = this.model.getNode(id);
        return (0, graphlib_2.toG6Data)(data);
    }
    /**
     * <zh/> 获取所有节点和 combo 的数据
     *
     * <en/> Get all node and combo data
     * @param ids - <zh/> 节点和 combo ID 数组 | <en/> node and combo ID array
     * @returns <zh/> 节点和 combo 的数据 | <en/> node and combo data
     */
    getNodeLikeData(ids) {
        return this.model.getAllNodes().reduce((acc, node) => {
            const data = (0, graphlib_2.toG6Data)(node);
            if (ids)
                ids.includes((0, id_1.idOf)(data)) && acc.push(data);
            else
                acc.push(data);
            return acc;
        }, []);
    }
    getElementDataByState(elementType, state) {
        const elementData = this.getElementsDataByType(elementType);
        return elementData.filter((datum) => { var _a; return (_a = datum.states) === null || _a === void 0 ? void 0 : _a.includes(state); });
    }
    getElementState(id) {
        var _a;
        return ((_a = this.getElementDataById(id)) === null || _a === void 0 ? void 0 : _a.states) || [];
    }
    hasNode(id) {
        return this.model.hasNode(id) && !this.isCombo(id);
    }
    hasEdge(id) {
        return this.model.hasEdge(id);
    }
    hasCombo(id) {
        return this.model.hasNode(id) && this.isCombo(id);
    }
    getRelatedEdgesData(id, direction = 'both') {
        return this.model.getRelatedEdges(id, direction).map(graphlib_2.toG6Data);
    }
    getNeighborNodesData(id) {
        return this.model.getNeighbors(id).map(graphlib_2.toG6Data);
    }
    setData(data) {
        const { nodes: modifiedNodes = [], edges: modifiedEdges = [], combos: modifiedCombos = [] } = data;
        const { nodes: originalNodes, edges: originalEdges, combos: originalCombos } = this.getData();
        const nodeDiff = (0, diff_1.arrayDiff)(originalNodes, modifiedNodes, (node) => (0, id_1.idOf)(node), data_1.isElementDataEqual);
        const edgeDiff = (0, diff_1.arrayDiff)(originalEdges, modifiedEdges, (edge) => (0, id_1.idOf)(edge), data_1.isElementDataEqual);
        const comboDiff = (0, diff_1.arrayDiff)(originalCombos, modifiedCombos, (combo) => (0, id_1.idOf)(combo), data_1.isElementDataEqual);
        this.batch(() => {
            const dataToAdd = {
                nodes: nodeDiff.enter,
                edges: edgeDiff.enter,
                combos: comboDiff.enter,
            };
            this.addData(dataToAdd);
            this.computeZIndex(dataToAdd, 'add', true);
            const dataToUpdate = {
                nodes: nodeDiff.update,
                edges: edgeDiff.update,
                combos: comboDiff.update,
            };
            this.updateData(dataToUpdate);
            this.computeZIndex(dataToUpdate, 'update', true);
            const dataToRemove = {
                nodes: nodeDiff.exit.map(id_1.idOf),
                edges: edgeDiff.exit.map(id_1.idOf),
                combos: comboDiff.exit.map(id_1.idOf),
            };
            this.removeData(dataToRemove);
        });
    }
    addData(data) {
        const { nodes, edges, combos } = data;
        this.batch(() => {
            // add combo first
            this.addComboData(combos);
            this.addNodeData(nodes);
            this.addEdgeData(edges);
        });
        this.computeZIndex(data, 'add');
    }
    addNodeData(nodes = []) {
        if (!nodes.length)
            return;
        this.model.addNodes(nodes.map((node) => {
            this.pushChange({ value: node, type: constants_1.ChangeType.NodeAdded });
            return (0, graphlib_2.toGraphlibData)(node);
        }));
        this.updateNodeLikeHierarchy(nodes);
        this.computeZIndex({ nodes }, 'add');
    }
    addEdgeData(edges = []) {
        if (!edges.length)
            return;
        this.model.addEdges(edges.map((edge) => {
            this.pushChange({ value: edge, type: constants_1.ChangeType.EdgeAdded });
            return (0, graphlib_2.toGraphlibData)(edge);
        }));
        this.computeZIndex({ edges }, 'add');
    }
    addComboData(combos = []) {
        if (!combos.length)
            return;
        const { model } = this;
        if (!model.hasTreeStructure(constants_1.COMBO_KEY)) {
            model.attachTreeStructure(constants_1.COMBO_KEY);
        }
        model.addNodes(combos.map((combo) => {
            this.comboIds.add((0, id_1.idOf)(combo));
            this.pushChange({ value: combo, type: constants_1.ChangeType.ComboAdded });
            return (0, graphlib_2.toGraphlibData)(combo);
        }));
        this.updateNodeLikeHierarchy(combos);
        this.computeZIndex({ combos }, 'add');
    }
    addChildrenData(parentId, childrenData) {
        const parentData = this.getNodeLikeDatum(parentId);
        const childrenId = childrenData.map(id_1.idOf);
        this.addNodeData(childrenData);
        this.updateNodeData([{ id: parentId, children: [...(parentData.children || []), ...childrenId] }]);
        this.addEdgeData(childrenId.map((childId) => ({ source: parentId, target: childId })));
    }
    /**
     * <zh/> 计算 zIndex
     *
     * <en/> Calculate zIndex
     * @param data - <zh/> 新增的数据 | <en/> newly added data
     * @param type - <zh/> 操作类型 | <en/> operation type
     * @param force - <zh/> 忽略批处理 | <en/> ignore batch processing
     * @remarks
     * <zh/> 调用该函数的情况：
     * - 新增元素
     * - 更新节点/组合的 combo
     * - 更新节点的 children
     *
     * <en/> The situation of calling this function:
     * - Add element
     * - Update the combo of the node/combo
     * - Update the children of the node
     */
    computeZIndex(data, type, force = false) {
        if (!force && this.isBatching())
            return;
        this.batch(() => {
            const { nodes = [], edges = [], combos = [] } = data;
            combos.forEach((combo) => {
                var _a, _b, _c;
                const id = (0, id_1.idOf)(combo);
                if (type === 'add' && (0, util_1.isNumber)((_a = combo.style) === null || _a === void 0 ? void 0 : _a.zIndex))
                    return;
                if (type === 'update' && !('combo' in combo))
                    return;
                const parent = this.getParentData(id, constants_1.COMBO_KEY);
                const zIndex = parent ? ((_c = (_b = parent.style) === null || _b === void 0 ? void 0 : _b.zIndex) !== null && _c !== void 0 ? _c : 0) + 1 : 0;
                this.preventUpdateNodeLikeHierarchy(() => {
                    this.updateComboData([{ id, style: { zIndex } }]);
                });
            });
            nodes.forEach((node) => {
                var _a, _b, _c;
                const id = (0, id_1.idOf)(node);
                if (type === 'add' && (0, util_1.isNumber)((_a = node.style) === null || _a === void 0 ? void 0 : _a.zIndex))
                    return;
                if (type === 'update' && !('combo' in node) && !('children' in node))
                    return;
                let zIndex = 0;
                const comboParent = this.getParentData(id, constants_1.COMBO_KEY);
                if (comboParent) {
                    zIndex = (((_b = comboParent.style) === null || _b === void 0 ? void 0 : _b.zIndex) || 0) + 1;
                }
                else {
                    const nodeParent = this.getParentData(id, constants_1.TREE_KEY);
                    if (nodeParent)
                        zIndex = ((_c = nodeParent === null || nodeParent === void 0 ? void 0 : nodeParent.style) === null || _c === void 0 ? void 0 : _c.zIndex) || 0;
                }
                this.preventUpdateNodeLikeHierarchy(() => {
                    this.updateNodeData([{ id, style: { zIndex } }]);
                });
            });
            edges.forEach((edge) => {
                var _a, _b, _c, _d, _e;
                if ((0, util_1.isNumber)((_a = edge.style) === null || _a === void 0 ? void 0 : _a.zIndex))
                    return;
                let { id, source, target } = edge;
                if (!id)
                    id = (0, id_1.idOf)(edge);
                else {
                    const datum = this.getEdgeDatum(id);
                    source = datum.source;
                    target = datum.target;
                }
                if (!source || !target)
                    return;
                const sourceZIndex = ((_c = (_b = this.getNodeLikeDatum(source)) === null || _b === void 0 ? void 0 : _b.style) === null || _c === void 0 ? void 0 : _c.zIndex) || 0;
                const targetZIndex = ((_e = (_d = this.getNodeLikeDatum(target)) === null || _d === void 0 ? void 0 : _d.style) === null || _e === void 0 ? void 0 : _e.zIndex) || 0;
                this.updateEdgeData([{ id: (0, id_1.idOf)(edge), style: { zIndex: Math.max(sourceZIndex, targetZIndex) - 1 } }]);
            });
        });
    }
    /**
     * <zh/> 计算元素置顶后的 zIndex
     *
     * <en/> Calculate the zIndex after the element is placed on top
     * @param id - <zh/> 元素 ID | <en/> ID of the element
     * @returns <zh/> zIndex | <en/> zIndex
     */
    getFrontZIndex(id) {
        var _a;
        const elementType = this.getElementType(id);
        const elementData = this.getElementDataById(id);
        const data = this.getData();
        // 排除当前元素 / Exclude the current element
        Object.assign(data, {
            [`${elementType}s`]: data[`${elementType}s`].filter((element) => (0, id_1.idOf)(element) !== id),
        });
        if (elementType === 'combo') {
            // 如果 combo 展开，则排除 combo 的子节点/combo 及内部边
            // If the combo is expanded, exclude the child nodes/combos of the combo and the internal edges
            if (!(0, collapsibility_1.isCollapsed)(elementData)) {
                const ancestorIds = new Set(this.getAncestorsData(id, constants_1.COMBO_KEY).map(id_1.idOf));
                data.nodes = data.nodes.filter((element) => !ancestorIds.has((0, id_1.idOf)(element)));
                data.combos = data.combos.filter((element) => !ancestorIds.has((0, id_1.idOf)(element)));
                data.edges = data.edges.filter(({ source, target }) => !ancestorIds.has(source) && !ancestorIds.has(target));
            }
        }
        return Math.max(((_a = elementData.style) === null || _a === void 0 ? void 0 : _a.zIndex) || 0, 0, ...Object.values(data)
            .flat()
            .map((datum) => { var _a; return (((_a = datum === null || datum === void 0 ? void 0 : datum.style) === null || _a === void 0 ? void 0 : _a.zIndex) || 0) + 1; }));
    }
    updateNodeLikeHierarchy(data) {
        if (!this.enableUpdateNodeLikeHierarchy)
            return;
        const { model } = this;
        data.forEach((datum) => {
            const id = (0, id_1.idOf)(datum);
            const parent = (0, id_1.parentIdOf)(datum);
            if (parent !== undefined) {
                if (!model.hasTreeStructure(constants_1.COMBO_KEY))
                    model.attachTreeStructure(constants_1.COMBO_KEY);
                // 解除原父节点的子节点关系，更新原父节点及其祖先的数据
                // Remove the child relationship of the original parent node, update the data of the original parent node and its ancestors
                if (parent === null) {
                    this.refreshComboData(id);
                }
                this.setParent(id, (0, id_1.parentIdOf)(datum), constants_1.COMBO_KEY);
            }
            const children = datum.children || [];
            if (children.length) {
                if (!model.hasTreeStructure(constants_1.TREE_KEY))
                    model.attachTreeStructure(constants_1.TREE_KEY);
                const _children = children.filter((child) => model.hasNode(child));
                _children.forEach((child) => this.setParent(child, id, constants_1.TREE_KEY));
                if (_children.length !== children.length) {
                    // 从数据中移除不存在的子节点
                    // Remove non-existent child nodes from the data
                    this.updateNodeData([{ id, children: _children }]);
                }
            }
        });
    }
    /**
     * <zh/> 执行变更时不要更新节点层次结构
     *
     * <en/> Do not update the node hierarchy when executing changes
     * @param callback - <zh/> 变更函数 | <en/> change function
     */
    preventUpdateNodeLikeHierarchy(callback) {
        this.enableUpdateNodeLikeHierarchy = false;
        callback();
        this.enableUpdateNodeLikeHierarchy = true;
    }
    updateData(data) {
        const { nodes, edges, combos } = data;
        this.batch(() => {
            this.updateNodeData(nodes);
            this.updateComboData(combos);
            this.updateEdgeData(edges);
        });
        this.computeZIndex(data, 'update');
    }
    updateNodeData(nodes = []) {
        if (!nodes.length)
            return;
        const { model } = this;
        this.batch(() => {
            const modifiedNodes = [];
            nodes.forEach((modifiedNode) => {
                const id = (0, id_1.idOf)(modifiedNode);
                const originalNode = (0, graphlib_2.toG6Data)(model.getNode(id));
                if ((0, data_1.isElementDataEqual)(originalNode, modifiedNode))
                    return;
                const value = (0, data_1.mergeElementsData)(originalNode, modifiedNode);
                this.pushChange({ value, original: originalNode, type: constants_1.ChangeType.NodeUpdated });
                model.mergeNodeData(id, value);
                modifiedNodes.push(value);
            });
            this.updateNodeLikeHierarchy(modifiedNodes);
        });
        this.computeZIndex({ nodes }, 'update');
    }
    /**
     * <zh/> 将所有数据提交到变更记录中以进行重绘
     *
     * <en/> Submit all data to the change record for redrawing
     */
    refreshData() {
        const { nodes, edges, combos } = this.getData();
        nodes.forEach((node) => {
            this.pushChange({ value: node, original: node, type: constants_1.ChangeType.NodeUpdated });
        });
        edges.forEach((edge) => {
            this.pushChange({ value: edge, original: edge, type: constants_1.ChangeType.EdgeUpdated });
        });
        combos.forEach((combo) => {
            this.pushChange({ value: combo, original: combo, type: constants_1.ChangeType.ComboUpdated });
        });
    }
    syncNodeLikeDatum(datum) {
        const { model } = this;
        const id = (0, id_1.idOf)(datum);
        if (!model.hasNode(id))
            return;
        const original = (0, graphlib_2.toG6Data)(model.getNode(id));
        const value = (0, data_1.mergeElementsData)(original, datum);
        model.mergeNodeData(id, value);
    }
    syncEdgeDatum(datum) {
        const { model } = this;
        const id = (0, id_1.idOf)(datum);
        if (!model.hasEdge(id))
            return;
        const original = (0, graphlib_2.toG6Data)(model.getEdge(id));
        const value = (0, data_1.mergeElementsData)(original, datum);
        model.mergeEdgeData(id, value);
    }
    updateEdgeData(edges = []) {
        if (!edges.length)
            return;
        const { model } = this;
        this.batch(() => {
            edges.forEach((modifiedEdge) => {
                const id = (0, id_1.idOf)(modifiedEdge);
                const originalEdge = (0, graphlib_2.toG6Data)(model.getEdge(id));
                if ((0, data_1.isElementDataEqual)(originalEdge, modifiedEdge))
                    return;
                if (modifiedEdge.source && originalEdge.source !== modifiedEdge.source) {
                    model.updateEdgeSource(id, modifiedEdge.source);
                }
                if (modifiedEdge.target && originalEdge.target !== modifiedEdge.target) {
                    model.updateEdgeTarget(id, modifiedEdge.target);
                }
                const updatedData = (0, data_1.mergeElementsData)(originalEdge, modifiedEdge);
                this.pushChange({ value: updatedData, original: originalEdge, type: constants_1.ChangeType.EdgeUpdated });
                model.mergeEdgeData(id, updatedData);
            });
        });
        this.computeZIndex({ edges }, 'update');
    }
    updateComboData(combos = []) {
        if (!combos.length)
            return;
        const { model } = this;
        model.batch(() => {
            const modifiedCombos = [];
            combos.forEach((modifiedCombo) => {
                const id = (0, id_1.idOf)(modifiedCombo);
                const originalCombo = (0, graphlib_2.toG6Data)(model.getNode(id));
                if ((0, data_1.isElementDataEqual)(originalCombo, modifiedCombo))
                    return;
                const value = (0, data_1.mergeElementsData)(originalCombo, modifiedCombo);
                this.pushChange({ value, original: originalCombo, type: constants_1.ChangeType.ComboUpdated });
                model.mergeNodeData(id, value);
                modifiedCombos.push(value);
            });
            this.updateNodeLikeHierarchy(modifiedCombos);
        });
        this.computeZIndex({ combos }, 'update');
    }
    /**
     * <zh/> 设置节点的父节点
     *
     * <en/> Set the parent node of the node
     * @param id - <zh/> 节点 ID | <en/> node ID
     * @param parent - <zh/> 父节点 ID | <en/> parent node ID
     * @param hierarchyKey - <zh/> 层次结构类型 | <en/> hierarchy type
     * @param update - <zh/> 添加新/旧父节点数据更新记录 | <en/> add new/old parent node data update record
     */
    setParent(id, parent, hierarchyKey, update = true) {
        if (id === parent)
            return;
        const elementData = this.getNodeLikeDatum(id);
        const originalParentId = (0, id_1.parentIdOf)(elementData);
        if (originalParentId !== parent && hierarchyKey === constants_1.COMBO_KEY) {
            const modifiedDatum = { id, combo: parent };
            if (this.isCombo(id))
                this.syncNodeLikeDatum(modifiedDatum);
            else
                this.syncNodeLikeDatum(modifiedDatum);
        }
        this.model.setParent(id, parent, hierarchyKey);
        if (update && hierarchyKey === constants_1.COMBO_KEY) {
            (0, util_1.uniq)([originalParentId, parent]).forEach((pId) => {
                if (pId !== undefined)
                    this.refreshComboData(pId);
            });
        }
    }
    /**
     * <zh/> 刷新 combo 数据
     *
     * <en/> Refresh combo data
     * @param id - <zh/> combo ID | <en/> combo ID
     * @remarks
     * <zh/> 不会更改数据，但会触发数据变更事件
     *
     * <en/> Will not change the data, but will trigger data change events
     */
    refreshComboData(id) {
        const combo = this.getComboData([id])[0];
        const ancestors = this.getAncestorsData(id, constants_1.COMBO_KEY);
        if (combo)
            this.pushChange({ value: combo, original: combo, type: constants_1.ChangeType.ComboUpdated });
        ancestors.forEach((value) => {
            this.pushChange({ value: value, original: value, type: constants_1.ChangeType.ComboUpdated });
        });
    }
    getElementPosition(id) {
        const datum = this.getElementDataById(id);
        return (0, position_1.positionOf)(datum);
    }
    translateNodeLikeBy(id, offset) {
        if (this.isCombo(id))
            this.translateComboBy(id, offset);
        else
            this.translateNodeBy(id, offset);
    }
    translateNodeLikeTo(id, position) {
        if (this.isCombo(id))
            this.translateComboTo(id, position);
        else
            this.translateNodeTo(id, position);
    }
    translateNodeBy(id, offset) {
        const curr = this.getElementPosition(id);
        const position = (0, vector_1.add)(curr, [...offset, 0].slice(0, 3));
        this.translateNodeTo(id, position);
    }
    translateNodeTo(id, position) {
        const [x = 0, y = 0, z = 0] = position;
        this.preventUpdateNodeLikeHierarchy(() => {
            this.updateNodeData([{ id, style: { x, y, z } }]);
        });
    }
    translateComboBy(id, offset) {
        const [dx = 0, dy = 0, dz = 0] = offset;
        if ([dx, dy, dz].some(isNaN) || [dx, dy, dz].every((o) => o === 0))
            return;
        const combo = this.getComboData([id])[0];
        if (!combo)
            return;
        const seenNodeLikeIds = new Set();
        (0, traverse_1.dfs)(combo, (succeed) => {
            const succeedID = (0, id_1.idOf)(succeed);
            if (seenNodeLikeIds.has(succeedID))
                return;
            seenNodeLikeIds.add(succeedID);
            const [x, y, z] = (0, position_1.positionOf)(succeed);
            const value = (0, data_1.mergeElementsData)(succeed, {
                style: { x: x + dx, y: y + dy, z: z + dz },
            });
            this.pushChange({
                value,
                // @ts-ignore
                original: succeed,
                type: this.isCombo(succeedID) ? constants_1.ChangeType.ComboUpdated : constants_1.ChangeType.NodeUpdated,
            });
            this.model.mergeNodeData(succeedID, value);
        }, (node) => this.getChildrenData((0, id_1.idOf)(node)), 'BT');
    }
    translateComboTo(id, position) {
        var _a;
        if (position.some(isNaN))
            return;
        const [tx = 0, ty = 0, tz = 0] = position;
        const combo = (_a = this.getComboData([id])) === null || _a === void 0 ? void 0 : _a[0];
        if (!combo)
            return;
        const [comboX, comboY, comboZ] = (0, position_1.positionOf)(combo);
        const dx = tx - comboX;
        const dy = ty - comboY;
        const dz = tz - comboZ;
        (0, traverse_1.dfs)(combo, (succeed) => {
            const succeedId = (0, id_1.idOf)(succeed);
            const [x, y, z] = (0, position_1.positionOf)(succeed);
            const value = (0, data_1.mergeElementsData)(succeed, {
                style: { x: x + dx, y: y + dy, z: z + dz },
            });
            this.pushChange({
                value,
                // @ts-ignore
                original: succeed,
                type: this.isCombo(succeedId) ? constants_1.ChangeType.ComboUpdated : constants_1.ChangeType.NodeUpdated,
            });
            this.model.mergeNodeData(succeedId, value);
        }, (node) => this.getChildrenData((0, id_1.idOf)(node)), 'BT');
    }
    removeData(data) {
        const { nodes, edges, combos } = data;
        this.batch(() => {
            // remove edges first
            this.removeEdgeData(edges);
            this.removeNodeData(nodes);
            this.removeComboData(combos);
            this.latestRemovedComboIds = new Set(combos);
        });
    }
    removeNodeData(ids = []) {
        if (!ids.length)
            return;
        this.batch(() => {
            ids.forEach((id) => {
                // 移除关联边、子节点
                // remove related edges and child nodes
                this.removeEdgeData(this.getRelatedEdgesData(id).map(id_1.idOf));
                // TODO 树图情况下移除子节点
                this.pushChange({ value: this.getNodeData([id])[0], type: constants_1.ChangeType.NodeRemoved });
                this.removeNodeLikeHierarchy(id);
            });
            this.model.removeNodes(ids);
        });
    }
    removeEdgeData(ids = []) {
        if (!ids.length)
            return;
        ids.forEach((id) => this.pushChange({ value: this.getEdgeData([id])[0], type: constants_1.ChangeType.EdgeRemoved }));
        this.model.removeEdges(ids);
    }
    removeComboData(ids = []) {
        if (!ids.length)
            return;
        this.batch(() => {
            ids.forEach((id) => {
                this.pushChange({ value: this.getComboData([id])[0], type: constants_1.ChangeType.ComboRemoved });
                this.removeNodeLikeHierarchy(id);
                this.comboIds.delete(id);
            });
            this.model.removeNodes(ids);
        });
    }
    /**
     * <zh/> 移除节点层次结构，将其子节点移动到父节点的 children 列表中
     *
     * <en/> Remove the node hierarchy and move its child nodes to the parent node's children list
     * @param id - <zh/> 待处理的节点 | <en/> node to be processed
     */
    removeNodeLikeHierarchy(id) {
        if (this.model.hasTreeStructure(constants_1.COMBO_KEY)) {
            const grandParent = (0, id_1.parentIdOf)(this.getNodeLikeDatum(id));
            // 从父节点的 children 列表中移除
            // remove from its parent's children list
            // 调用 graphlib.setParent，不需要更新数据
            this.setParent(id, undefined, constants_1.COMBO_KEY, false);
            // 将子节点移动到父节点的 children 列表中
            // move the children to the grandparent's children list
            this.model.getChildren(id, constants_1.COMBO_KEY).forEach((child) => {
                const childData = (0, graphlib_2.toG6Data)(child);
                const childId = (0, id_1.idOf)(childData);
                this.setParent((0, id_1.idOf)(childData), grandParent, constants_1.COMBO_KEY, false);
                const value = (0, data_1.mergeElementsData)(childData, {
                    id: (0, id_1.idOf)(childData),
                    combo: grandParent,
                });
                this.pushChange({
                    value,
                    original: childData,
                    type: this.isCombo(childId) ? constants_1.ChangeType.ComboUpdated : constants_1.ChangeType.NodeUpdated,
                });
                this.model.mergeNodeData((0, id_1.idOf)(childData), value);
            });
            if (!(0, util_1.isNil)(grandParent))
                this.refreshComboData(grandParent);
        }
    }
    /**
     * <zh/> 获取元素的类型
     *
     * <en/> Get the type of the element
     * @param id - <zh/> 元素 ID | <en/> ID of the element
     * @returns <zh/> 元素类型 | <en/> type of the element
     */
    getElementType(id) {
        if (this.model.hasNode(id)) {
            if (this.isCombo(id))
                return 'combo';
            return 'node';
        }
        if (this.model.hasEdge(id))
            return 'edge';
        throw new Error((0, print_1.format)(`Unknown element type of id: ${id}`));
    }
    destroy() {
        const { model } = this;
        const nodes = model.getAllNodes();
        const edges = model.getAllEdges();
        model.removeEdges(edges.map((edge) => edge.id));
        model.removeNodes(nodes.map((node) => node.id));
        // @ts-expect-error force delete
        this.context = {};
    }
}
exports.DataController = DataController;
//# sourceMappingURL=data.js.map